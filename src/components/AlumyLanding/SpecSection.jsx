import React from 'react';
import SpecRow from "./SpecRow";

const SpecSection = () => (
    <section id="spec" className="scroll-mt-24 mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#F4EFE8] p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="mb-4 text-center text-xl font-extrabold">제품정보</h3>
            <SpecRow k="제품명" v="미닛 미니홀더 (MINIT-HOLDER S)"/>
            <SpecRow k="재질" v="알루미늄(본체), 스테인리스(클립), PC(내부)"/>
            <SpecRow k="규격" v="W 45 × H 28 × D 14 mm"/>
            <SpecRow k="무게" v="12 g (±1 g)"/>
            <SpecRow k="호환 라벨" v="폭 38 mm, 두께 0.2~1.0 mm"/>
            <SpecRow k="제조국" v="Korea"/>
            <SpecRow k="품질보증" v="구매일로부터 1년"/>
            <div className="mt-6 rounded-2xl bg-white p-4 text-center">
              <div className="text-[12px] text-stone-500">고객센터</div>
              <div className="text-2xl font-black tracking-widest">1234 · 5678</div>
              <div className="text-[12px] text-stone-500">평일 09:00–18:00 · 점심 12:00–13:00</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl"><img src="/images/holder-spec.jpg" alt="제품 환경컷" width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/></div>
        </div>
      </section>
);

export default SpecSection;
