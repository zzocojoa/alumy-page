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
import VideoScrubSection from './components/VideoScrubSection';

// ====== 안전한 에셋 경로 유틸 ======
const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

// ====== 데이터 ======
const PRODUCT = {
  brand: "Alumy",
  title: "알루미 메모 홀더",
  subtitle: "작은 공간에도 완벽한 각도로, 카드와 라벨을 깔끔하게",
  contents: [
    <>
      ✔ 어떤 순간에도 믿을 수 있는 <span className="bg-yellow-200">완벽한 밸런스</span>로 당신의 소중한 순간을 지켜드립니다.
    </>,
    <>
      ✔ 수많은 색상 중에서 오직 <span className="bg-yellow-200">나만의 이야기를 담은 컬러</span>
    </>,
    <>
      ✔ 프리미엄 알루미늄이 선사하는 <span className="bg-yellow-200">고급스러운 질감과 세련된 존재감</span>
    </>,
  ],
  colors: [
    { name: "Silver", swatch: "#c0c0c0", img: "Silver.png" },
    { name: "Red", swatch: "#e11d48", img: "Red.png" },
    { name: "Green", swatch: "#16a34a", img: "Green.png" },
    { name: "Yellow", swatch: "#facc15", img: "Yellow.png" },
  ],
  titlehighlights: [
    "왜 알루미 메모 홀더일까요?",
    "작은 변화로 만드는 깔끔한 정리의 완성",
  ],
  highlights: [
    `💡 시간이 지나도 변하지 않는 품질\n ✔세월이 흘러도 첫날처럼 아름다운 프리미엄 알루미늄의\n 변함없는 신뢰감`,
    `🏆 내 취향을 담은 컬러 스토리\n ✔고급 알루미늄 소재로 변질이나 파손이 적음`,
    `🎨 나만의 스타일\n ✔실버, 레드, 그린, 옐로\n - 나만의 개성으로 공간을 완성하는 4가지 특별한 선택`,
    `✨ 나만의 개성을 담는 자유로움\ 내 마음대로 꾸밀 수 있는\n 맞춤형 용지로 매일 새로운 나를 표현하세요`,
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
  logo: asset('Alumy.jpg'),
  hero: asset('Alumy_Products.png'),
  intro_detail: asset('Product-2.png'),
  detail1: asset('Product-5.png'),
  detail2: asset('Product-3.png'),
  detail3: asset('Product-4.png'),
  usage1: asset('Utilized_Products-1.png'),
  usage2: asset('Utilized_Products-2.png'),
  usage3: asset('Utilized_Products-3.png'),
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
        <VideoScrubSection
          srcMp4={asset('20190828_204819.mp4')}
          srcWebm={asset('20190828_204819.mp4')}
          poster={asset('Alumy.jpg')}
        />
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