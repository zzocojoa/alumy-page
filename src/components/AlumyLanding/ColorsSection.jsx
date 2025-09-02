import React, { useState } from "react";
import PointBadge from "./PointBadge";
import ToastScale from "./ToastScale";

const ColorsSection = () => {
    const [color, setColor] = useState("실버");

    return (
        <section id="colors" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <PointBadge n={3}/>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img src="/images/holder-colors.jpg" alt="색상 라인업" width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-extrabold md:text-3xl">기본 4색 제공 · 대량 발주 커스텀 가능</h3>
            <p className="text-stone-700">실버·레드·그린·옐로(기본). 최소수량 충족 시 브랜드 전용 색상 상담 가능.</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[["실버", "#EFEFEF"],["레드", "#ff0844"],["그린", "#0fd850"],["옐로", "#f9d423"]].map(([n, h]) => (
                <div key={n} className="flex items-center gap-2">
                  <span className="inline-block h-5 w-5 rounded-full border" style={{ background: h }} />
                  <span className="text-sm text-stone-700">{n} <span className="text-stone-400">{h}</span></span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="text-stone-600">선택 색상:</span>
              <select className="rounded-lg border border-stone-300 bg-white px-3 py-2" value={color} onChange={(e)=>setColor(e.target.value)}>
                <option>실버</option>
                <option>레드</option>
                <option>그린</option>
                <option>옐로</option>
              </select>
            </div>
            <div className="mt-6"><ToastScale/></div>
          </div>
        </div>
      </section>
    );
};

export default ColorsSection;
