import React from 'react';
import SafeImg from './SafeImg';

export default function Intro({ PRODUCT, IMG }) {
  return (
    <section id="intro" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance">제품 소개</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <SafeImg
            src={IMG.intro_detail}
            alt="제품 재질 및 텍스처"
            className="w-full aspect-[16/10] object-cover rounded-2xl shadow-lg"
            style={{ objectPosition: '50% 0%' }}
          />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <ul className="mt-3 space-y-2 text-lg text-gray-600 tracking-tight">
            {PRODUCT.titlehighlights.map((t, i) => (
              <li key={i}><span>{t}</span></li>
            ))}
          </ul>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            {PRODUCT.highlights.map((t, i) => (
              <li key={i}><span style={{ whiteSpace: 'pre-line' }}>{t}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
