import useScrollFadeIn from '../hooks/useScrollFadeIn';

const gradientTextClass = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text";

const Hero = ({ content }) => {
  const animatedHero = useScrollFadeIn('up', 1, 0);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#f5f9ff] to-white text-center pt-28 md:pt-36 pb-28 md:pb-36" {...animatedHero}>
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">{content.superTitle}</p>
        <h1 className={`mt-3 text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl ${gradientTextClass} balance`}>
          {content.title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-600">{content.desc}</p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <a href="#price" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">가격 보기</a>
          <a href="#contact" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">문의하기 <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="mt-16 px-4">
          <img src={content.heroImg} alt="알루미늄 메모 제품 이미지" className="mx-auto w-full max-w-6xl rounded-[28px] shadow-2xl ring-1 ring-gray-900/10 drop-shadow-2xl"/>
      </div>
    </section>
  );
};

export default Hero;
