import React from 'react';

const PointBadge = ({ n }) => (
  <div className="relative mx-auto mb-4 mt-2 w-28 select-none">
    <div className="rounded-full bg-stone-900 px-4 py-1 text-center text-[10px] font-bold tracking-wider text-white">POINT {String(n).padStart(2, "0")}</div>
    <div className="absolute -bottom-2 left-1/2 h-[18px] w-[1px] -translate-x-1/2 rotate-[18deg] bg-stone-300" />
  </div>
);

export default PointBadge;
