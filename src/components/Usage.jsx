import React from 'react';
import SafeImg from './SafeImg';

export default function Usage({ IMG }) {
  const usageCases = [
    {
      imgSrc: IMG.usage1,
      text: "☕ 카페 & 키친\n메뉴판이나 레시피 카드를 세워두고 요리하며 확인하세요",
    },
    {
      imgSrc: IMG.usage2,
      text: "텍스트를 여기에 입력하세요",
    },
    {
      imgSrc: IMG.usage3,
      text: "텍스트를 여기에 입력하세요",
    },
    {
      imgSrc: IMG.usage4,
      text: "텍스트를 여기에 입력하세요",
    },
  ];

  return (
    <section id="usage" className="page scroll-mt-24 py-10 md:py-14">
      <h3 className="display alt-head text-xl md:text-3xl h-tight balance text-center">제품 활용 예시</h3>
      <div className="mt-8 grid grid-cols-1 gap-12 max-w-4xl mx-auto">
        {usageCases.map((uc, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <SafeImg src={uc.imgSrc} alt={`제품 활용 예시 ${i + 1}`} className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg" style={{ objectPosition: '50% 70%' }} />
            <p className="mt-4 text-gray-700 whitespace-pre-line">{uc.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
