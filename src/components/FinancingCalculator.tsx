"use client";

import React, { useMemo, useState } from "react";

const fmtAED = (n: number) => `AED ${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

const calcMonthly = (price: number, down: number, ratePct: number, months: number) => {
  const principal = Math.max(0, price - down);
  if (principal === 0 || months === 0) return 0;
  const r = ratePct / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
};

export default function FinancingCalculator() {
  const [price, setPrice] = useState<number>(600000);
  const [down, setDown] = useState<number>(120000);
  const [rate, setRate] = useState<number>(4.25);
  const [months, setMonths] = useState<number>(48);

  const monthly = useMemo(() => Math.round(calcMonthly(price, down, rate, months)), [price, down, rate, months]);
  const principal = Math.max(0, price - down);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-card rounded-xl p-6 ring-1 ring-border">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Vehicle Price (AED)</label>
            <input
              type="number"
              min={10000}
              step={1000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-md bg-background ring-1 ring-border"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Down Payment (AED)</label>
            <input
              type="number"
              min={0}
              step={1000}
              value={down}
              onChange={(e) => setDown(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-md bg-background ring-1 ring-border"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Interest Rate (% p.a.)</label>
              <input
                type="number"
                min={0}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-md bg-background ring-1 ring-border"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Term (months)</label>
              <select
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-md bg-background ring-1 ring-border"
              >
                {[24, 36, 48, 60, 72].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-xl p-6 ring-1 ring-border">
        <h3 className="text-xl font-semibold">Estimated Payments</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted">
            <div className="text-xs text-muted-foreground">Principal</div>
            <div className="text-lg font-semibold">{fmtAED(principal)}</div>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <div className="text-xs text-muted-foreground">Monthly Payment</div>
            <div className="text-lg font-semibold">{fmtAED(monthly)}</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Rates and terms reflect typical UAE resident financing. Actual approval may vary by bank and profile.</p>
      </div>
    </div>
  );
}