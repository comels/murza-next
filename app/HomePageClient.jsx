'use client'

import { useEffect } from 'react'
import Slideshow from '@/components/Slideshow'

export default function HomePageClient({ images }) {
  useEffect(() => {
    // Désactive le scroll sur la page home
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    return () => {
      // Réactive le scroll quand on quitte la page
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <div className="h-screen w-full bg-white relative overflow-hidden" style={{ height: '100dvh', overflow: 'hidden' }}>
      <Slideshow images={images} />
    </div>
  )
}

