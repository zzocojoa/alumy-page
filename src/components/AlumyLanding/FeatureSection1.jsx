import React from 'react';
import PointBadge from "./PointBadge";

const FeatureSection1 = () => (
    <section className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <PointBadge n={1}/>
        <div className="mx-auto grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img src="/images/holder-body.jpg" alt="알루미늄 바디" width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-extrabold md:text-3xl">알루미늄 바디 & 라운드 모서리 마감</h3>
            <ul className="list-disc space-y-2 pl-5 text-stone-700">
              <li>6061-T6 알루미늄, 아노다이징(무광)</li>
              <li>손베임 방지 라운드 가공, 모서리 안전 강화</li>
              <li>현장 충격/스크래치에 강한 내구성</li>
            </ul>
          </div>
        </div>
      </section>
);

export default FeatureSection1;
