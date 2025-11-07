'use client'

import { useEffect } from 'react'

export default function ContactPageClient({ children }) {
  useEffect(() => {
    // Désactive le scroll sur la page contact
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    return () => {
      // Réactive le scroll quand on quitte la page
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  return <>{children}</>
}

