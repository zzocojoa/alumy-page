import React from 'react';
import DimensionSVG from './DimensionSVG';

export default function Size({ PRODUCT }) {
  return (
    <section id="size" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance">Size</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <DimensionSVG />
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full text-left text-sm num">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-700">규격 (가로×세로)</th>
                <th className="px-4 py-3 font-semibold text-gray-700">속지 사이즈 (W x H)</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCT.sizes.map((row, i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="px-4 py-3">{row.spec}</td>
                  <td className="px-4 py-3 text-gray-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="md:col-span-2 text-xs text-gray-500">※ 표기 치수는 참고용입니다.</p>
      </div>
    </section>
  );
}
