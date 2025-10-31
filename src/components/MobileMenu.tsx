"use client";
import React from "react";

export default function MobileMenu({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* panel */}
      <div className="relative h-full w-80 max-w-[85%] bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
}