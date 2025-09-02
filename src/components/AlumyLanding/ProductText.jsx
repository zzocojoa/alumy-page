import React from 'react';

function ProductText({ text }) {
  const lines = (text || "").split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  return (
    <div className="prose prose-stone max-w-none text-sm">
      <ul className="m-0 list-disc pl-5">
        {lines.map((ln, i) => <li key={i}>{ln}</li>)}
      </ul>
    </div>
  );
}

export default ProductText;

