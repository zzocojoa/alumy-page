import React from 'react';
import ImageMagnifier from './ImageMagnifier';

export default function Hero({ PRODUCT, IMG }) {
  return (
    <section className="page pt-8 md:pt-12 pb-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <ImageMagnifier src={IMG.hero} alt="미닛 미니홀더 대표 이미지" className="w-full aspect-[16/10] object-cover object-top rounded-2xl shadow-lg" />
        <div>
          <h2 className="display alt-head text-2xl md:text-4xl leading-tight h-tight balance break-keep">{PRODUCT.title}</h2>
          <p className="mt-3 text-gray-600 tracking-tight">{PRODUCT.subtitle}</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            {PRODUCT.contents.map((t, i) => (
              <li key={i}><span style={{ whiteSpace: 'pre-line' }}>{t}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
