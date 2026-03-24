import { useCallback, useRef, useState } from 'react'

const SWIPE_THRESHOLD = 50

export default function useCarousel(itemCount: number) {
  const [index, setIndex] = useState(0)
  const startXRef = useRef<number | null>(null)

  const next = useCallback(() => setIndex(i => (i + 1) % itemCount), [itemCount])
  const prev = useCallback(() => setIndex(i => (i - 1 + itemCount) % itemCount), [itemCount])
  const goTo = useCallback((i: number) => setIndex(() => ((i % itemCount) + itemCount) % itemCount), [itemCount])

  const transform = `translateX(-${index * 100}%)`

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX
    if (startXRef.current == null) return
    const diff = startXRef.current - endX
    if (diff > SWIPE_THRESHOLD) {
      setIndex(i => (i + 1) % itemCount)
    } else if (diff < -SWIPE_THRESHOLD) {
      setIndex(i => (i - 1 + itemCount) % itemCount)
    }
    startXRef.current = null
  }, [itemCount])

  return { index, next, prev, goTo, transform, handleTouchStart, handleTouchEnd }
}
