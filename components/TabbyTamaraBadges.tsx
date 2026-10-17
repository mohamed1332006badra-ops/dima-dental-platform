"use client";

import React from "react";

export function TabbyBadge({ className = "", size = "normal" }: { className?: string; size?: "small" | "normal" | "large" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <div
      className={`inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white rounded-xl transition-all border border-slate-700/60 shadow-sm shrink-0 ${
        isSmall
          ? "px-2.5 py-1 text-[11px]"
          : isLarge
          ? "px-5 py-3 text-sm"
          : "px-3.5 py-2 text-xs"
      } ${className}`}
      dir="ltr"
    >
      {/* Authentic Tabby Neon Green Icon with explicit sizing */}
      <div 
        className="w-5 h-5 rounded-md bg-[#3EFE97] flex items-center justify-center shrink-0"
        style={{ width: 20, height: 20, minWidth: 20, minHeight: 20 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          width={14} 
          height={14} 
          style={{ width: 14, height: 14, minWidth: 14, minHeight: 14 }}
          className="w-3.5 h-3.5" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8h14M12 8v11"
            stroke="#000"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex items-center gap-1.5 font-bold tracking-tight">
        <span className="font-extrabold text-white text-[13px] tracking-wide">tabby</span>
        <span className="w-1 h-1 rounded-full bg-slate-500" />
        <span className="text-[#3EFE97] font-semibold text-[11px]" dir="rtl">
          4 دفعات 0%
        </span>
      </div>
    </div>
  );
}

export function TamaraBadge({ className = "", size = "normal" }: { className?: string; size?: "small" | "normal" | "large" }) {
  const isSmall = size === "small";
  const isLarge = size === "large";

  return (
    <div
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-[#FF5C39] to-[#FF451A] hover:from-[#FF451A] hover:to-[#E0340A] text-white rounded-xl transition-all border border-orange-400/40 shadow-sm shrink-0 ${
        isSmall
          ? "px-2.5 py-1 text-[11px]"
          : isLarge
          ? "px-5 py-3 text-sm"
          : "px-3.5 py-2 text-xs"
      } ${className}`}
      dir="ltr"
    >
      {/* Authentic Tamara Icon with explicit sizing */}
      <div 
        className="w-5 h-5 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm"
        style={{ width: 20, height: 20, minWidth: 20, minHeight: 20 }}
      >
        <span className="text-[#FF5C39] font-black text-xs leading-none">ت</span>
      </div>

      <div className="flex items-center gap-1.5 font-bold tracking-tight">
        <span className="font-extrabold text-white text-[13px] tracking-wide">tamara</span>
        <span className="w-1 h-1 rounded-full bg-white/40" />
        <span className="text-white/95 font-semibold text-[11px]" dir="rtl">
          بدون فوائد
        </span>
      </div>
    </div>
  );
}

export default function TabbyTamaraBadges({
  size = "normal",
  className = "",
}: {
  size?: "small" | "normal" | "large";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      <TabbyBadge size={size} />
      <TamaraBadge size={size} />
    </div>
  );
}
