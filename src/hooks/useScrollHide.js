import { useEffect, useRef, useState } from 'react'

// Hides on scroll down, shows on scroll up or near top
export default function useScrollHide({ threshold = 8, offset = 64 } = {}) {
  const lastY = useRef(0)
  const ticking = useRef(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    lastY.current = window.scrollY || 0
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const delta = y - lastY.current
        if (y <= offset || delta < -threshold) setHidden(false)
        else if (delta > threshold) setHidden(true)
        lastY.current = y
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold, offset])

  return hidden
}

