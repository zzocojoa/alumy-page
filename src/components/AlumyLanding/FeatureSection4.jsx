import React from 'react';
import PointBadge from "./PointBadge";

const FeatureSection4 = () => (
    <section className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <PointBadge n={4}/>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img src="/images/holder-clean.jpg" alt="분리 세척" width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-extrabold md:text-3xl">분리 세척으로 위생적인 관리</h3>
            <p className="text-stone-700">구성품 분리 설계로 물 세척 및 소독이 용이합니다. 음식점/병원/행사 등 위생이 중요한 환경에 적합합니다.</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["빠른 분해","물 세척","재조립 쉬움"].map((t)=> (
                <div key={t} className="rounded-xl bg-white/90 p-3 text-center text-xs ring-1 ring-stone-200">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
);

export default FeatureSection4;
