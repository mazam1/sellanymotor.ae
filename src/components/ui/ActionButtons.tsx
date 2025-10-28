"use client";

import React from "react";
import Link from "next/link";

interface ActionButtonsProps {
  whatsappNumber?: string;
  phoneNumber?: string;
  className?: string;
}

export function ActionButtons({
  whatsappNumber = "971568559762",
  phoneNumber = "00971568558762",
  className = "",
}: ActionButtonsProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <div className={`flex flex-col sm:flex-row gap-5 ${className}`}>
      <Link
        href={whatsappUrl}
        className="inline-flex items-center justify-center h-12 min-h-[48px] px-6 sm:px-8 py-3 bg-[#FFA800] hover:bg-[#E69500] text-white font-semibold tracking-[0.2px] text-base sm:text-lg rounded-xl transition-all duration-200 active:scale-95"
        aria-label="Open WhatsApp chat with customer support"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.4539 3.54C18.2166 1.3 15.2097 0 12.0645 0C5.46124 0 0.129026 5.33 0.129026 11.94C0.129026 14.05 0.708387 16.11 1.80645 17.89L0 24L6.25161 22.22C7.96774 23.22 9.99355 23.75 12.0645 23.75C18.6677 23.75 24 18.42 24 11.81C24 8.67 22.6911 5.78 20.4539 3.54ZM12.0645 21.75C10.2911 21.75 8.56774 21.25 7.05806 20.31L6.70968 20.09L2.90323 21.18L4.00645 17.5L3.76129 17.14C2.73548 15.57 2.19355 13.79 2.19355 11.94C2.19355 6.44 6.56774 2.06 12.0645 2.06C14.6911 2.06 17.1548 3.13 19.0323 5.01C20.9097 6.89 21.9355 9.35 21.9355 11.81C21.9355 17.31 17.5613 21.75 12.0645 21.75ZM17.5161 14.43C17.2258 14.29 15.7548 13.57 15.4645 13.5C15.1742 13.43 14.9742 13.36 14.7742 13.65C14.5742 13.94 13.9871 14.59 13.8323 14.79C13.6774 14.99 13.5226 15.03 13.2323 14.89C12.9419 14.75 11.9613 14.44 10.8129 13.42C9.90323 12.62 9.29032 11.62 9.13548 11.33C8.98065 11.04 9.11613 10.9 9.25161 10.76C9.37419 10.64 9.52903 10.44 9.66452 10.29C9.8 10.14 9.86774 10.03 9.93548 9.83C10.0032 9.63 9.93548 9.48 9.88387 9.34C9.83226 9.2 9.21935 7.73 8.95806 7.15C8.69677 6.57 8.43548 6.67 8.28065 6.67C8.12581 6.67 7.92581 6.67 7.72581 6.67C7.52581 6.67 7.2129 6.72 6.92258 7.01C6.63226 7.3 5.84516 8.02 5.84516 9.49C5.84516 10.96 6.94839 12.37 7.08387 12.57C7.21935 12.77 9.21935 15.86 12.2645 17.13C13.0516 17.47 13.6645 17.67 14.1419 17.82C14.9097 18.07 15.6129 18.03 16.1677 17.98C16.7871 17.92 17.9806 17.28 18.2419 16.6C18.5032 15.92 18.5032 15.34 18.4516 15.25C18.4 15.16 18.2 15.11 17.9097 14.97L17.5161 14.43Z"
          />
        </svg>
        WhatsApp
      </Link>
      <Link
        href={phoneUrl}
        className="inline-flex items-center justify-center h-12 min-h-[48px] px-6 sm:px-8 py-3 bg-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.20)] text-white font-semibold tracking-[0.2px] text-base sm:text-lg rounded-xl transition-all duration-200 active:scale-95"
        aria-label="Call customer support directly"
      >
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now
      </Link>
    </div>
  );
}

export default ActionButtons;