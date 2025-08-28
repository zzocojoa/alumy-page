import React from 'react';

const priceData = [
  { size: "75 X 50", silver: "금액", red: "금액", green: "금액", yellow: "금액", bundle: "160개" },
  { size: "80 X 60", silver: "금액", red: "금액", green: "금액", yellow: "금액", bundle: "금액" },
  { size: "90 X 60", silver: "금액", red: "금액", green: "금액", yellow: "금액", bundle: "금액" },
  { size: "90 X 70", silver: "금액", red: "금액", green: "금액", yellow: "금액", bundle: "금액" },
  { size: "90 X 90", silver: "금액", red: "금액", green: "금액", yellow: "금액", bundle: "금액" },
];

function PriceTableRow({ data }) {
  return (
    <tr className="border-t border-gray-100">
      <td className="px-4 py-3 text-center">{data.size}</td>
      <td className="px-4 py-3 text-center">{data.silver}</td>
      <td className="px-4 py-3 text-center">{data.red}</td>
      <td className="px-4 py-3 text-center">{data.green}</td>
      <td className="px-4 py-3 text-center">{data.yellow}</td>
      <td className="px-4 py-3 text-center">{data.bundle}</td>
    </tr>
  );
}

export default function Price() {
  return (
    <section id="price" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance">가격</h3>
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
        <table className="w-full text-left text-sm num">
          <thead className="bg-gray-50">
            <tr>
              <th rowSpan="2" className="px-4 py-3 font-semibold text-gray-700 text-center align-middle">사이즈</th>
              <th colSpan="4" className="px-4 py-3 font-semibold text-gray-700 text-center">색상</th>
              <th rowSpan="2" className="px-4 py-3 font-semibold text-gray-700 text-center align-middle">묶음 배송 가능 수량</th>
            </tr>
            <tr>
              <th className="px-4 py-3 font-semibold text-gray-700 text-center border-t border-gray-200">Silver</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-center border-t border-gray-200">Red</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-center border-t border-gray-200">Green</th>
              <th className="px-4 py-3 font-semibold text-gray-700 text-center border-t border-gray-200">Yellow</th>
            </tr>
          </thead>
          <tbody>
            {priceData.map((row, index) => (
              <PriceTableRow key={index} data={row} />
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 md:col-span-2 text-xs text-gray-500">※ 기본 배송비용은 3,000원 입니다. &lt;묶음 배송 가능 수량&gt; 초과시 추가 배송비용이 발생합니다.</p>
    </section>
  );
}