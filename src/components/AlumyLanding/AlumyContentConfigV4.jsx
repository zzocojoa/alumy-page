import React, { useEffect, useRef, useState } from "react";

const asset = (path) => `/alumy-page/${path}`;

const renderWithNewlines = (text) => {
  if (typeof text !== 'string') {
    return text; // Return as is if not a string (e.g., React fragment)
  }
  return text.split('\n').map((line, index) => (
    <span key={index} style={{ display: 'block' }}>
      {line}
    </span>
  ));
};

/* ===================== 콘텐츠 설정(JSON) ===================== */
const CONTENT = {
  hero: {
    badge: `작은 공간에도 완벽한 각도,\n카드와 라벨을 깔끔하게`,
    title: `흔들림 없는 라벨 홀더,\n하루 종일 단단하게`,
    desc: <>알루미늄 바디와 강화 클립 구조로 <span className="bg-yellow-200">고정력과 교체 편의성</span>을 동시에.</>,
    heroImg: asset("Alumy_Products.png"),
  },
  details: {
    material: "[입력] 알루미늄(본체) · 스테인리스(클립) · 마감(예: 무광 아노다이징)",
    labelCompat: "[입력] 라벨 폭 xx mm / 두께 yy–zz mm",
    mountType: "[입력] 클립형/자석형/거치형 등",
    usage: "[입력] 실내 권장 · 분리 세척/소독 가능",
    package: "[입력] 본체 ×1, 클립 ×1 …",
  },
  size: {
    overall: "[입력] W × H × D mm",
    slotWidth: "[입력] mm",
    weight: "[입력] g",
    tolerance: "±[입력] mm",
    sizeImg: asset("images/holder-size.jpg"),
  },
  points: [
    { no: 1, title: "[POINT1 제목]", bullets: ["[입력]", "[입력]", "[입력]"], image: asset("images/holder-body.jpg"), alt: "POINT1 이미지", flip: false },
    { no: 2, title: "[POINT2 제목]", bullets: ["[입력]", "[입력]"], image: asset("images/holder-slot.jpg"), alt: "POINT2 이미지", flip: true },
    { no: 3, title: "[POINT3 제목]", bullets: ["[입력]", "[입력]"], image: asset("images/holder-colors.jpg"), alt: "POINT3 이미지", flip: false },
    { no: 4, title: "[POINT4 제목]", bullets: ["[입력]", "[입력]"], image: asset("images/holder-clean.jpg"), alt: "POINT4 이미지", flip: true },
  ],
  colors: [
    { name: "실버", hex: "#EFEFEF" },
    { name: "레드", hex: "#ff0844" },
    { name: "그린", hex: "#0fd850" },
    { name: "옐로", hex: "#f9d423" },
  ],
  contact: { tel: "1234-5678" },
  video: {
    webm: asset("video/holder_insert.webm"),
    mp4: asset("20180602_091239.mp4"),
    poster: asset("video/poster.jpg"),
    heightVh: 220,
    stickyTop: 0,
  }
};

/* ===================== 공용 UI 컴포넌트 ===================== */
const Badge = ({ children }) => (
  <div className="inline-flex items-center rounded-full border border-stone-400/60 bg-white/90 px-4 py-1 text-[11px] font-semibold tracking-[0.18em]" style={{ whiteSpace: 'pre-wrap' }}>
    {children.split('\n').map((line, index) => (
      <span key={index} style={{ display: 'block' }}>
        {line}
      </span>
    ))}
  </div>
);

const SpecRow = ({ k, v }) => (
  <div className="grid grid-cols-3 border-b border-stone-200 py-2 text-sm last:border-none">
    <div className="col-span-1 font-medium text-stone-700">{k}</div>
    <div className="col-span-2 text-stone-600">{v}</div>
  </div>
);

const Point = ({ no, title, bullets, image, alt, flip }) => (
  <section className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
    <div className="relative mx-auto mb-4 mt-2 w-28 select-none">
      <div className="rounded-full bg-stone-900 px-4 py-1 text-center text-[10px] font-bold tracking-wider text-white">POINT {String(no).padStart(2, "0")}</div>
      <div className="absolute -top-5 left-1/2 h-[18px] w-[1px] -translate-x-1/2 rotate-[18deg] bg-stone-900" />
    </div>
    <div className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${flip ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''}`}>
      <div className="overflow-hidden rounded-3xl bg-stone-100">
        <img src={image} alt={alt} width="1280" height="720" decoding="async" loading="lazy" className="h-full w-full object-cover"/>
      </div>
      <div>
        <h3 className="mb-2 text-2xl font-extrabold md:text-3xl">{renderWithNewlines(title)}</h3>
        <ul className="list-disc space-y-2 pl-5 text-stone-700">
          {bullets.map((b,i)=>(<li key={i}>{renderWithNewlines(b)}</li>))}
        </ul>
      </div>
    </div>
  </section>
);

/* ===================== Video Scrub 컴포넌트(B 방식) ===================== */
function VideoScrubSection({ srcWebm, srcMp4, poster, sectionHeightVh = 220, stickyTop = 0 }){
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [width, setWidth] = useState('100%');
  const [borderRadius, setBorderRadius] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const calc = () => {
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight;
      const p = Math.min(1, Math.max(0, (view - rect.top) / (rect.height + view)));
      setProgress(p);

      // .max-w-6xl (72rem = 1152px) + px-4 (1rem = 16px) * 2 = 1184px
      const targetWidth = 1184;
      const currentWidth = window.innerWidth;
      const newWidth = currentWidth - (currentWidth - targetWidth) * p;
      setWidth(`${newWidth}px`);

      const borderRadiusValue = p * 24; // 1.5rem = 24px
      setBorderRadius(borderRadiusValue);

      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const onLoadedMeta = () => {
    const v = videoRef.current;
    if (v && Number.isFinite(v.duration)) setDuration(v.duration);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduceMotion || !duration) return;
    const t = duration * progress;
    if (Math.abs((v.currentTime || 0) - t) > 1 / 60) {
      try { v.currentTime = t; } catch (e) { /* iOS 시킹 준비 전 예외 무시 */ }
    }
  }, [progress, duration, reduceMotion]);

  return (
    <section id="video-scrub" ref={sectionRef} className="relative" style={{ height: `${sectionHeightVh}vh` }} aria-label="스크롤에 따라 종이가 홀더에 들어가는 과정">
      <div className="sticky w-full bg-stone-100" style={{ top: stickyTop }}>
        <div
          className="mx-auto"
          style={{
            width: width,
            borderRadius: `${borderRadius}px`,
            overflow: 'hidden',
          }}
        >
          {reduceMotion ? (
            <img src={poster} alt="종이 삽입 과정 고정 이미지" width={1600} height={1000} loading="lazy" className="h-screen w-full object-cover" />
          ) : (
            <video ref={videoRef} className="h-screen w-full object-cover" muted playsInline preload="metadata" poster={poster} onLoadedMetadata={onLoadedMeta}>
              <source src={srcWebm} type="video/webm" />
              <source src={srcMp4} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-stone-700">{Math.round(progress * 100)}%</div>
      </div>
    </section>
  );
}

/* ===================== 페이지 컴포넌트 ===================== */
export default function AlumyContentConfigV4(){
  const [color, setColor] = useState(CONTENT.colors[0].name);
  const telDigits = CONTENT.contact.tel.replace(/[^0-9]/g, "");

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      {/* 1) Video Scrub를 최상단으로 이동 */}
      <VideoScrubSection
        srcWebm={CONTENT.video.webm}
        srcMp4={CONTENT.video.mp4}
        poster={CONTENT.video.poster}
        sectionHeightVh={CONTENT.video.heightVh}
        stickyTop={CONTENT.video.stickyTop}
      />

      {/* 2) Hero (아래로 이동, LCP 보호 위해 lazy) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-100 to-stone-50" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Badge>{CONTENT.hero.badge}</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl" style={{ whiteSpace: 'pre-wrap' }}>{CONTENT.hero.title.split('\n').map((line, index) => (<span key={index} style={{ display: 'block' }}>{line}</span>))}</h1>
            <p className="mt-4 text-stone-700 md:text-lg">{CONTENT.hero.desc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#size" className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white">도면·사이즈 보기</a>
              <a href="#contact" className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold">구매 문의</a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-stone-200">
              <img src={CONTENT.hero.heroImg} alt="제품 히어로" width={1280} height={720} decoding="async" loading="lazy" className="h-full w-full object-cover"/>
            </div>
            <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 rotate-90 text-[11px] tracking-[0.28em] text-stone-400 md:block">MODERN HOLDER</div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-30 border-y border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 text-sm">
          <a href="#details" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Details</a>
          <a href="#colors" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Color</a>
          <a href="#size" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Size</a>
          <a href="#spec" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Spec</a>
          <a href="#contact" className="rounded-full bg-stone-100 px-3 py-1 hover:bg-stone-200">Contact</a>
        </div>
      </div>

      {/* 3) Details */}
      <section id="details" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <h3 className="mb-4 text-2xl font-extrabold md:text-3xl">제품 상세</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"><p className="text-sm font-semibold">재질/마감</p><p className="text-sm text-stone-600">{renderWithNewlines(CONTENT.details.material)}</p></div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"><p className="text-sm font-semibold">호환 라벨</p><p className="text-sm text-stone-600">{renderWithNewlines(CONTENT.details.labelCompat)}</p></div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"><p className="text-sm font-semibold">장착 방식</p><p className="text-sm text-stone-600">{renderWithNewlines(CONTENT.details.mountType)}</p></div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"><p className="text-sm font-semibold">사용 환경</p><p className="text-sm text-stone-600">{renderWithNewlines(CONTENT.details.usage)}</p></div>
          <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-200"><p className="text-sm font-semibold">패키지 구성</p><p className="text-sm text-stone-600">{renderWithNewlines(CONTENT.details.package)}</p></div>
        </div>
      </section>

      {/* 4) POINTS */}
      {CONTENT.points.map(p => (<Point key={p.no} {...p} />))}

      {/* 5) COLORS */}
      <section id="colors" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <h3 className="mb-4 text-2xl font-extrabold md:text-3xl">색상</h3>
        <div className="grid max-w-md grid-cols-2 gap-4">
          {CONTENT.colors.map(c => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="inline-block h-5 w-5 rounded-full border" style={{ background: c.hex }} />
              <span className="text-sm text-stone-700">{c.name} <span className="text-stone-400">{c.hex}</span></span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 text-sm">
          <span className="text-stone-600">선택 색상:</span>
          <select className="rounded-lg border border-stone-300 bg-white px-3 py-2" value={color} onChange={(e)=>setColor(e.target.value)}>
            {CONTENT.colors.map(c => <option key={c.name}>{c.name}</option>)}
          </select>
        </div>
      </section>

      {/* 6) SIZE */}
      <section id="size" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-14">
        <h3 className="mb-4 text-2xl font-extrabold md:text-3xl">Size · 치수</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-stone-100">
            <img src={CONTENT.size.sizeImg} alt="치수 도해" width={1280} height={720} decoding="async" loading="lazy" className="h-full w-full object-cover"/>
          </div>
          <div className="rounded-3xl bg-white p-6 ring-1 ring-stone-200">
            <SpecRow k="Overall" v={CONTENT.size.overall}/>
            <SpecRow k="Slot Width" v={CONTENT.size.slotWidth}/>
            <SpecRow k="Weight" v={CONTENT.size.weight}/>
            <SpecRow k="공차" v={CONTENT.size.tolerance}/>
            <p className="mt-3 text-xs text-stone-500">※ 실제 측정값은 가공·측정 환경에 따라 달라질 수 있습니다.</p>
          </div>
        </div>
      </section>

      {/* 7) SPEC */}
      <section id="spec" className="scroll-mt-24 mx-auto max-w-6xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#F4EFE8] p-6 shadow-sm ring-1 ring-stone-200">
            <h3 className="mb-4 text-center text-xl font-extrabold">제품정보</h3>
            <SpecRow k="재질" v={CONTENT.details.material}/>
            <SpecRow k="호환 라벨" v={CONTENT.details.labelCompat}/>
            <SpecRow k="장착 방식" v={CONTENT.details.mountType}/>
            <SpecRow k="무게" v={CONTENT.size.weight}/>
            <div className="mt-6 rounded-2xl bg-white p-4 text-center">
              <div className="text-[12px] text-stone-500">고객센터</div>
              <div className="text-2xl font-black tracking-widest">{CONTENT.contact.tel.replace('-', ' · ')}</div>
              <div className="text-[12px] text-stone-500">평일 09:00–18:00 · 점심 12:00–13:00</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={asset("images/holder-spec.jpg")} alt="제품 환경컷" width={1280} height={720} decoding="async" loading="lazy" className="h-full w-full object-cover"/>
          </div>
        </div>
      </section>

      {/* 8) CONTACT */}
      <section id="contact" className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 md:flex-row">
          <p className="text-center text-lg font-semibold md:text-left">시제품/대량 견적이 필요하신가요? 지금 상담해 보세요.</p>
          <div className="flex gap-3">
            <a href="#" className="rounded-xl border border-stone-300 px-5 py-3 text-sm font-semibold">도면 다운로드</a>
            <a href={`tel:${telDigits}`} className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white">전화 문의</a>
          </div>
        </div>
      </section>

      {/* 9) Mobile Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <span className="text-sm font-medium">Alumy · 미닛 미니홀더</span>
          <a href={`tel:${telDigits}`} className="rounded-xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white">문의</a>
        </div>
      </div>

      <footer className="bg-stone-50 py-10 text-center text-sm text-stone-500">© {new Date().getFullYear()} Alumy. All rights reserved.</footer>
    </main>
  );
}
