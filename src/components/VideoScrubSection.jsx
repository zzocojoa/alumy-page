import React, { useRef, useEffect, useState } from 'react';

// ===================== Video Scrub Section =====================
function VideoScrubSection({ srcWebm, srcMp4, poster, sectionHeightVh = 220, stickyTop = 0 }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [width, setWidth] = useState('100%');
  const [borderRadius, setBorderRadius] = useState(0);

  // Resolve asset paths against Vite base to work under subpaths (e.g., GitHub Pages)
  const resolveAsset = (p) => {
    if (!p) return p;
    if (/^https?:\/\//i.test(p)) return p;
    const base = import.meta.env.BASE_URL || '/';
    return `${base}${String(p).replace(/^\//, '')}`;
  };

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
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

      const targetWidth = 1184; // max-w-6xl + padding
      const currentWidth = window.innerWidth;
      const newWidth = currentWidth - (currentWidth - targetWidth) * p;
      setWidth(`${newWidth}px`);

      const borderRadiusValue = p * 24; // 1.5rem = 24px
      setBorderRadius(borderRadiusValue);

      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
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
      try { v.currentTime = t; } catch { /* iOS seeking quirks: ignore */ }
    }
  }, [progress, duration, reduceMotion]);

  const posterUrl = resolveAsset(poster);
  const mp4Url = resolveAsset(srcMp4);
  const webmUrl = resolveAsset(srcWebm);

  const onVideoError = (e) => {
    const v = e.currentTarget;
    const err = v && v.error ? { code: v.error.code, message: v.error.message } : null;
    // eslint-disable-next-line no-console
    console.error('[VideoScrub] Video failed to load/play', {
      sources: { webm: webmUrl, mp4: mp4Url },
      networkState: v ? v.networkState : undefined,
      readyState: v ? v.readyState : undefined,
      error: err,
    });
  };

  return (
    <section id="video-scrub" ref={sectionRef} className="relative isolate z-20" style={{ height: `${sectionHeightVh}vh` }} aria-label="Scroll to scrub video frames">
      <div className="sticky z-20 w-full bg-stone-100" style={{ top: stickyTop }}>
        <div
          className="mx-auto"
          style={{
            width: width,
            borderRadius: `${borderRadius}px`,
            overflow: 'hidden',
          }}
        >
          {reduceMotion ? (
            <img src={posterUrl} alt="Video scrub poster" width={1600} height={1000} loading="lazy" className="h-screen w-full object-cover" />
          ) : (
            <video ref={videoRef} className="h-screen w-full object-cover" muted playsInline preload="auto" poster={posterUrl} onLoadedMetadata={onLoadedMeta} onError={onVideoError}>
              {webmUrl ? <source src={webmUrl} type="video/webm" /> : null}
              {mp4Url ? <source src={mp4Url} type="video/mp4" /> : null}
            </video>
          )}
        </div>
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-stone-700">{Math.round(progress * 100)}%</div>
      </div>
    </section>
  );
}

export default VideoScrubSection;
