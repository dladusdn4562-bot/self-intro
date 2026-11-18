import { useEffect, useRef, useState } from 'react'

const supportsObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window

// 요소가 화면에 처음 들어올 때 한 번만 true가 된다.
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(!supportsObserver)

  useEffect(() => {
    const node = ref.current
    if (!node || !supportsObserver) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

export default useReveal
