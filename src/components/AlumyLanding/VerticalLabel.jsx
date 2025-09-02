import React from 'react';

const VerticalLabel = ({ children }) => (
  <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rotate-90 text-[11px] tracking-[0.28em] text-stone-400 md:block">
    {children}
  </div>
);

export default VerticalLabel;
