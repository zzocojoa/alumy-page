import React from 'react';
import { ICON_ITEMS } from "./IconItems.jsx";

const IconRail = () => (
  <div className="grid grid-cols-4 gap-2 rounded-2xl bg-[#E7D9C9]/40 p-3 ring-1 ring-stone-200">
    {ICON_ITEMS.map(it => (
      <div key={it.label} className="flex flex-col items-center rounded-xl bg-white/90 p-3 text-center shadow-sm ring-1 ring-stone-200">
        <div className="text-stone-700">{it.icon}</div>
        <div className="mt-1 text-[11px] font-extrabold tracking-tight text-stone-800">{it.label}</div>
        <div className="text-[10px] text-stone-500">{it.sub}</div>
      </div>
    ))}
  </div>
);

export default IconRail;
