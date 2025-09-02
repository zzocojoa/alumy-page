import React from 'react';
import PointBadge from "./PointBadge";

const FeatureSection2 = () => (
    <section className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <PointBadge n={2}/>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="mb-2 text-2xl font-extrabold md:text-3xl">와이드 슬롯 – 다양한 두께/폭 호환</h3>
            <p className="text-stone-700">라벨 폭 <strong>38mm</strong>, 두께 <strong>0.2~1.0mm</strong>까지 안정 고정. 커스텀 규격 협의 가능.</p>
            <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-white px-4 py-2 ring-1 ring-stone-200">
              <span className="text-sm text-stone-700">폭 38mm</span>
              <span className="text-stone-300">|</span>
              <span className="text-sm text-stone-700">깊이 14mm</span>
            </div>
          </div>
          <div className="relative order-1 overflow-hidden rounded-3xl bg-stone-100 md:order-2">
            <img src="/images/holder-slot.jpg" alt="슬롯 규격" width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/>
            <div className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-stone-700 ring-1 ring-stone-200">GUIDE</div>
          </div>
        </div>
      </section>
);

export default FeatureSection2;
