import React, { useRef, useEffect, useState } from 'react';

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

export default VideoScrubSection;
