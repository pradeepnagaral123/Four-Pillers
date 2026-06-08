import { useEffect, useRef } from 'react'

export default function useParallax(speed = 0.5, axis = 'y', scale = 1) {
  const ref = useRef(null)
  const current = useRef(0)
  const target = useRef(0)
  const rafId = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.willChange = 'transform'

    const onScroll = () => {
      target.current = window.scrollY * speed
    }

    const animate = () => {
      current.current += (target.current - current.current) * 0.08
      const diff = Math.abs(current.current - target.current)
      const y = axis === 'y' || axis === 'both' ? current.current : 0
      const x = axis === 'x' || axis === 'both' ? current.current : 0
      const s = scale !== 1 ? scale : null
      const transforms = []
      if (x !== 0 || y !== 0) transforms.push(`translate3d(${x}px, ${y}px, 0)`)
      if (s) transforms.push(`scale(${s})`)
      el.style.transform = transforms.join(' ')
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [speed, axis, scale])

  return ref
}
