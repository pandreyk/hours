import { useState, useCallback, useEffect } from 'react'

export const useMediaQuery = (width: number) => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia === 'undefined'
  ) {
    return false
  }

  const media = window.matchMedia(`(min-width: ${width}px)`)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [targetReached, setTargetReached] = useState(!!media.matches)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const updateTarget = useCallback((e) => {
    setTargetReached(!!e.matches)
  }, [])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    media.addListener(updateTarget)
    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}
