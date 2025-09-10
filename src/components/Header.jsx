import { useEffect, useRef, useState } from 'react'

const Header = ({ content }) => {
  const [hidden, setHidden] = useState(false)
  const lastYRef = useRef(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset
        const lastY = lastYRef.current
        const delta = y - lastY

        // Show when near top
        if (y < 10) {
          setHidden(false)
        } else {
          // Hide on scroll down, show on scroll up
          if (delta > 0) setHidden(true)
          else if (delta < 0) setHidden(false)
        }

        lastYRef.current = y
        tickingRef.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/80 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">{content.productName}</span>
          </div>
          <a
            href={content.href}
            className="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            {content.cta}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
