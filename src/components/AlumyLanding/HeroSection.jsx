import React from 'react';
import OvalBadge from "./OvalBadge";
import IconRail from "./IconRail";
import VerticalLabel from "./VerticalLabel";

const HeroSection = () => (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-100 to-stone-50" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 text-2xl text-stone-500">달라진 작업과 일상이 아름다워집니다</p>
          <OvalBadge text="현장 운영에 최적화된 라벨 홀더" />
          <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">흔들림 없는 명찰 홀더,<br/>하루 종일 단단하게</h1>
          <p className="mt-4 text-stone-700 md:text-lg">경량 알루미늄 바디와 강화 클립 구조로 <strong>집게력</strong>과 <strong>교체 편의성</strong>을 동시에. 현장/매장/이벤트 운영에 최적화된 <em>미닛 미니홀더</em>.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#spec" className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white">도면·사이즈 보기</a>
            <a href="#contact" className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold">구매 문의</a>
          </div>
          <div className="mt-8"><IconRail/></div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-stone-200">
            <img src="/images/holder-hero.jpg" alt="미닛 미니홀더 히어로" width="1280" height="720" decoding="async" fetchpriority="high" loading="eager" className="h-full w-full object-cover"/>
          </div>
          <VerticalLabel>MODERN HOLDER</VerticalLabel>
        </div>
      </div>
    </section>
  );
  
  export default HeroSection;
