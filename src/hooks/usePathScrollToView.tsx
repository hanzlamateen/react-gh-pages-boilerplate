import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const usePathScrollToView = (pathName: string) => {
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === pathName && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }, [location.pathname])

  return ref
}
