import React from 'react';

const SpecRow = ({ k, v }) => (
  <div className="grid grid-cols-3 border-b border-stone-200 py-2 text-sm last:border-none">
    <div className="col-span-1 font-medium text-stone-700">{k}</div>
    <div className="col-span-2 text-stone-600">{v}</div>
  </div>
);

export default SpecRow;
