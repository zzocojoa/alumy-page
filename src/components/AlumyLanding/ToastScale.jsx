import React from 'react';
import { TOAST_STEPS } from "./constants";

const ToastScale = () => (
  <div className="flex items-end gap-2">
    {TOAST_STEPS.map((s, i) => (
      <div key={s} className="flex flex-col items-center">
        <div className="h-8 w-10 rounded-md bg-gradient-to-b from-[#F6E3C3] to-[#7A4A2B]" style={{ opacity: 0.2 + i * 0.12 }} />
        <div className="mt-1 text-[10px] text-stone-600">{s}단</div>
      </div>
    ))}
  </div>
);

export default ToastScale;
