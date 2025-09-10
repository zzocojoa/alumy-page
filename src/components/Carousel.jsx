import { useEffect, useRef, useState, useCallback } from 'react';

// items: Array<{ src: string, alt?: string }>
export default function Carousel({ items = [], intervalMs = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const count = items.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // autoplay
  useEffect(() => {
    if (!count || !isPlaying) return;
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [count, isPlaying, intervalMs, next]);

  // keyboard navigation when focused
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === ' ') { e.preventDefault(); setIsPlaying((p) => !p); }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // swipe support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let deltaX = 0;
    let dragging = false;
    const onDown = (e) => {
      dragging = true;
      startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      deltaX = 0;
      setIsPlaying(false);
    };
    const onMove = (e) => {
      if (!dragging) return;
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      deltaX = x - startX;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      const threshold = 40; // px
      if (deltaX > threshold) prev();
      else if (deltaX < -threshold) next();
    };
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    // touch fallback
    el.addEventListener('touchstart', onDown, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onUp, { passive: true });
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('touchstart', onDown);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onUp);
    };
  }, [next, prev]);

  if (!count) return null;

  return (
    <div
      ref={containerRef}
      className="relative z-10 select-none focus:outline-none h-full w-full"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="이미지 슬라이드"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl">
        {items.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={item.alt || ''}
            width={2432}
            height={1442}
            className={`absolute inset-0 z-10 h-full w-full object-cover rounded-lg sm:rounded-xl shadow-2xl ring-1 ring-gray-900/10 transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] will-change-transform ${i === index ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          {/* Label bottom-left (plain text) */}
          <div className="absolute bottom-4 left-4 text-[13px] font-medium text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)] select-none">
            {items[index]?.label || items[index]?.caption || ''}
          </div>

          {/* Controls group bottom-right */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow hover:bg-white text-gray-900 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              onClick={() => { setIsPlaying(false); prev(); }}
              aria-label="이전 이미지"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow hover:bg-white text-gray-900 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? '일시정지' : '재생'}
            >
              {isPlaying ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              )}
            </button>
            <button
              type="button"
              className="h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow hover:bg-white text-gray-900 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
              onClick={() => { setIsPlaying(false); next(); }}
              aria-label="다음 이미지"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
