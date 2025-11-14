'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Affiche la navbar seulement si on est en haut de la page
      if (currentScrollY <= 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 lg:px-8">
        {/* Liens à gauche */}
        <div className="flex gap-6">
          <Link 
            href="/" 
            className="hover:opacity-70 transition-opacity"
          >
            Accueil
          </Link>
          <Link 
            href="/contact" 
            className="hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
          <Link 
            href="/about" 
            className="hover:opacity-70 transition-opacity"
          >
            À propos
          </Link>
        </div>

        {/* Lien à droite */}
        <div>
          <Link 
            href="https://instagram.com/maisonmurza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            IG
          </Link>
        </div>
      </div>
    </nav>
  )
}

