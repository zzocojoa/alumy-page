import React from 'react';
import SafeImg from './SafeImg';

export default function Colors({ PRODUCT }) {
  return (
    <section id="colors" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance">색상</h3>
      <p className="text-sm text-gray-500 mt-1">※ 실제 색상은 디스플레이·촬영 환경에 따라 다르게 보일 수 있습니다.</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PRODUCT.colors.map((c) => (
          <div key={c.name} className="card overflow-hidden transition-transform hover:scale-105">
            {/* 1. Color swatch */}
            <div className="h-28" style={{ backgroundColor: c.swatch }} />
            
            {/* 2. Image placeholder */}
            <SafeImg 
              src={c.img}
              alt={`${c.name} 제품 이미지`} 
              className="w-full aspect-[4/3] object-cover bg-gray-100" 
            />

            {/* 3. Color name */}
            <div className="p-3 text-center text-sm font-semibold alt-head tracking-wider opacity-90">{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
