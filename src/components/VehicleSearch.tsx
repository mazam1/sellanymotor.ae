"use client";

import React, { useMemo, useState } from "react";
import { MapPin, Search, ArrowUpDown } from "lucide-react";

type VehicleItem = {
  id: number;
  brand: string;
  model: string;
  area: string;
  price: number; // AED
};

const VEHICLES: VehicleItem[] = [
  { id: 1, brand: "Mercedes‑AMG", model: "G63", area: "Dubai Marina", price: 950000 },
  { id: 2, brand: "Bentley", model: "Continental GT", area: "Downtown Dubai", price: 900000 },
  { id: 3, brand: "Porsche", model: "911 Turbo S", area: "Business Bay", price: 1100000 },
  { id: 4, brand: "Range Rover", model: "Autobiography", area: "Palm Jumeirah", price: 800000 },
  { id: 5, brand: "Lamborghini", model: "Urus", area: "Dubai Marina", price: 850000 },
  { id: 6, brand: "Mercedes", model: "S‑Class", area: "JLT", price: 550000 },
  { id: 7, brand: "BMW", model: "X7", area: "Business Bay", price: 480000 },
  { id: 8, brand: "Audi", model: "RSQ8", area: "Dubai Marina", price: 650000 },
];

const AREA_ORDER = [
  "Downtown Dubai",
  "Dubai Marina",
  "Business Bay",
  "JLT",
  "Palm Jumeirah",
];

const formatAED = (value: number) => `AED ${value.toLocaleString("en-US")}`;

export default function VehicleSearch() {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [sort, setSort] = useState<string>("area");

  const brands = useMemo(
    () => Array.from(new Set(VEHICLES.map((v) => v.brand))),
    []
  );

  const models = useMemo(
    () => Array.from(new Set(VEHICLES.filter((v) => !brand || v.brand === brand).map((v) => v.model))),
    [brand]
  );

  const areas = useMemo(
    () => Array.from(new Set(VEHICLES.map((v) => v.area))),
    []
  );

  const results = useMemo(() => {
    let data = VEHICLES.filter((v) =>
      (!brand || v.brand === brand) &&
      (!model || v.model === model) &&
      (!area || v.area === area)
    );
    if (sort === "priceAsc") data = data.sort((a, b) => a.price - b.price);
    else if (sort === "priceDesc") data = data.sort((a, b) => b.price - a.price);
    else if (sort === "area") data = data.sort((a, b) => AREA_ORDER.indexOf(a.area) - AREA_ORDER.indexOf(b.area));
    return data;
  }, [brand, model, area, sort]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <div className="md:col-span-1">
          <label className="block text-sm mb-1">Brand</label>
          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setModel("");
            }}
            className="w-full px-3 py-2 rounded-md bg-card text-foreground ring-1 ring-border"
          >
            <option value="">Any</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm mb-1">Model</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-card text-foreground ring-1 ring-border"
          >
            <option value="">Any</option>
            {models.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm mb-1">Area</label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-card text-foreground ring-1 ring-border"
          >
            <option value="">Any</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm mb-1">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-3 py-2 rounded-md bg-card text-foreground ring-1 ring-border"
          >
            <option value="area">By Area</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>

        <div className="md:col-span-1 flex items-end">
          <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground">
            <Search className="w-4 h-4" />
            Apply Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((v) => (
          <div key={v.id} className="bg-card rounded-xl p-4 ring-1 ring-border">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{v.brand} {v.model}</div>
                <div className="text-sm text-muted-foreground inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {v.area}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Approx. price</div>
                <div className="font-semibold">{formatAED(v.price)}</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-muted-foreground inline-flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4" /> Sorted by {sort === "area" ? "area" : sort === "priceAsc" ? "price (asc)" : "price (desc)"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}