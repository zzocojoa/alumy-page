import React from 'react';

export default function CheckPoint({ PRODUCT }) {
  return (
    <section id="checkpoint" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance">Check Point</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {PRODUCT.checkpoints.map((cp, i) => (
          <div key={i} className="rounded-2xl bg-gray-50 p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-extrabold text-gray-300 num">{String(i + 1).padStart(2, '0')}.</div>
              <h4 className="text-lg font-bold text-gray-800">{cp.title}</h4>
            </div>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line">{cp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
