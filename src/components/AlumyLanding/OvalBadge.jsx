import React from 'react';

const OvalBadge = ({ text }) => (
  <div className="inline-flex items-center justify-center rounded-full border border-stone-400/60 bg-white/80 px-5 py-1 text-[11px] font-semibold tracking-[0.18em] text-stone-700">
    {text}
  </div>
);

export default OvalBadge;
