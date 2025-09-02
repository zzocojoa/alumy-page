import React from 'react';
import { PRODUCT_TXT } from "./constants";
import ProductText from "./ProductText";

const DetailsSection = () => (
    <section id="details" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
      <h3 className="mb-4 text-2xl font-extrabold md:text-3xl">제품 상세 · 설명(txt) 반영</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
          <h4 className="mb-2 text-lg font-bold">요약 설명</h4>
          <ProductText text={PRODUCT_TXT}/>
        </div>
        <div className="rounded-3xl bg-[#F4EFE8] p-6 ring-1 ring-stone-200">
          <h4 className="mb-2 text-lg font-bold">핵심 포인트</h4>
          <ul className="list-disc space-y-2 pl-5 text-sm text-stone-700">
            <li>강한 집게력 · 3초 교체 구조</li>
            <li>알루미늄 바디 · 라운드 모서리 안전</li>
            <li>분리 세척 · 위생 관리 용이</li>
          </ul>
          <p className="mt-3 text-xs text-stone-500">※ 상단 요약은 txt에서 자동 생성되지 않으므로 필요 시 수동 수정</p>
        </div>
      </div>
    </section>
  );
  
  export default DetailsSection;
