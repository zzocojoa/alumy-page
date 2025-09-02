import React from 'react';
import SpecRow from "./SpecRow";

const SizeSection = () => (
    <section id="size" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <h3 className="mb-4 text-2xl font-extrabold md:text-3xl">Size · 치수</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img src="/images/holder-size.jpg" alt="홀더 치수 도해" width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
            <SpecRow k="Overall" v="W × H × D mm — [입력]"/>
            <SpecRow k="Slot Width" v="[입력] mm"/>
            <SpecRow k="Weight" v="[입력] g"/>
            <SpecRow k="공차" v="± [입력] mm"/>
            <p className="mt-3 text-xs text-stone-500">※ 실제 측정값은 가공·측정 환경에 따라 달라질 수 있습니다.</p>
          </div>
        </div>
      </section>
);

export default SizeSection;
