import React from 'react';

export default function Footer({ PRODUCT }) {
  return (
    <footer id="inquiry" className="page scroll-mt-24 py-12 md:py-16">
      <div className="card p-6 md:p-10 bg-gradient-to-br from-white to-gray-50">
        <h3 className="display alt-head text-xl md:text-3xl h-tight balance">구매/도매 문의</h3>
        <p className="mt-2 text-sm text-gray-600">필요 수량·색상·사이즈를 알려주시면 재고/납기 확인 후 회신드립니다.</p>
        <form className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
          <input className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="이름" />
          <input className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="연락처 또는 이메일" />
          <input className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 md:col-span-2" placeholder="요청 수량 / 색상 / 사이즈" />
          <textarea className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900 md:col-span-2 min-h-[120px]" placeholder="추가 요청 사항" />
          <button type="button" className="btn btn-primary md:col-span-2">문의 전송</button>
        </form>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} {PRODUCT.brand}. All rights reserved.</div>
    </footer>
  );
}
