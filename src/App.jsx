import React from 'react';

import GlobalDesignTokens from './components/GlobalDesignTokens';
import Header from './components/Header';
import Hero from './components/Hero';
import Colors from './components/Colors';
import Intro from './components/Intro';
import Details from './components/Details';
import CheckPoint from './components/CheckPoint';
import Usage from './components/Usage';
import Size from './components/Size';
import Price from './components/Price';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

// ====== 안전한 에셋 경로 유틸 ======
const asset = (p) => p;

// ====== 데이터 ======
const PRODUCT = {
  brand: "Alumy",
  title: "알루미 미닛 카드홀더",
  subtitle: "작은 공간에도 완벽한 각도로, 카드와 라벨을 깔끔하게",
  contents: [
    `- 프리미엄 알루미늄 베이스로 견고하면서 가벼운 사용감`,
    `- 최적의 각도 설계로 카드와 라벨이 넘어지지 않는 안정감`,
    `- 4가지 컬러 선택으로 나만의 공간에 어울리는 스타일링`,
  ],
  colors: [
    { name: "Silver", swatch: "#c0c0c0", img: "/Silver.png" },
    { name: "Red", swatch: "#e11d48", img: "/Red.png" },
    { name: "Green", swatch: "#16a34a", img: "/Green.png" },
    { name: "Yellow", swatch: "#facc15", img: "/Yellow.png" },
  ],
  titlehighlights: [
    "왜 미닛 카드홀더일까요?",
    "작은 변화로 만드는 깔끔한 정리의 완성",
  ],
  highlights: [
    `💡 똑똑한 설계\n 명함이나 카드를 깔끔하게 정리하고 싶을 때`,
    `🏆 프리미엄 소재\n가볍지만 견고한 알루미늄 소재로 오래 사용해도 변형이 없어요`,
    `🎨 나만의 스타일\n실버, 레드, 그린, 옐로 4가지 컬러로 내 공간에 어울리는 포인트`,
    `✨ 미니멀 디자인\n작은 사이즈로 공간을 차지하지 않으면서도 확실한 정리 효과`,
  ],
  checkpoints: [
    { title: "완벽한 안정감", description: `유선형 곡면 설계로 연결부가 자연스럽게\n이어지는 부드러운 실루엣` },
    { title: "무게 중심 설계", description: "하단에 무게중심을 두어 안정적인 거치 지원" },
    { title: "고급스러운 마감", description: "메탈 소재를 사용하여 내구성 및 고급스러운 질감 제공" },
  ],
  sizes: [
    { spec: "- - -", note: "75 × 50" },
    { spec: "- - -", note: "80 × 60" },
    { spec: "- - -", note: "90 × 60" },
    { spec: "- - -", note: "90 × 70" },
    { spec: "- - -", note: "90 × 90" },
  ],
};

const IMG = {
  logo: asset('/Alumy.jpg'),
  hero: asset('/Alumy_Products.png'),
  intro_detail: asset('/Product-2.png'),
  detail1: asset('/Product-5.png'),
  detail2: asset('/Product-3.png'),
  detail3: asset('/Product-4.png'),
  usage1: asset('/Utilized_Products-1.png'),
  usage2: asset('/Utilized_Products-2.png'),
  usage3: asset('/Utilized_Products-3.png'),
  usage4: asset('https://placehold.co/800x450/eeeeee/555555?text=Usage+4'),
};

// 메인 앱 컴포넌트
export default function App() {
  // 특정 ID를 가진 요소로 부드럽게 스크롤하는 함수
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  // 키보드 접근성을 위한 핸들러
  const onKey = (e, id) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToId(id); } };

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <GlobalDesignTokens />
      <Header PRODUCT={PRODUCT} IMG={IMG} scrollToId={scrollToId} onKey={onKey} />
      <main>
        <Hero PRODUCT={PRODUCT} IMG={IMG} />
        <Colors PRODUCT={PRODUCT} />
        <Intro PRODUCT={PRODUCT} IMG={IMG} />
        <Details IMG={IMG} />
        <CheckPoint PRODUCT={PRODUCT} />
        <Usage IMG={IMG} />
        <Size PRODUCT={PRODUCT} />
        <Price />
      </main>
      <Footer PRODUCT={PRODUCT} />
      <BackToTopButton />
    </div>
  );
}