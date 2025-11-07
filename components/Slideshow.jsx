'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Shuffle Fisher-Yates pour mélanger aléatoirement un tableau
 */
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shuffledImages, setShuffledImages] = useState([])
  const intervalRef = useRef(null)

  // Initialisation: shuffle et index de départ aléatoire
  useEffect(() => {
    if (images.length === 0) return

    const shuffled = shuffleArray(images)
    const randomStartIndex = Math.floor(Math.random() * shuffled.length)
    
    setShuffledImages(shuffled)
    setCurrentIndex(randomStartIndex)
  }, [images])

  // Auto-avance toutes les 5 secondes
  useEffect(() => {
    if (shuffledImages.length === 0) return

    // Nettoie l'intervalle précédent s'il existe
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Crée un nouvel intervalle
    const length = shuffledImages.length
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length)
    }, 4000)

    // Nettoyage au unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [shuffledImages])

  // Reset du timer et navigation
  const resetTimerAndNavigate = (direction) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length)
    }

    // Recrée l'intervalle après navigation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length)
    }, 5000)
  }

  if (shuffledImages.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p>Aucune image trouvée</p>
      </div>
    )
  }

  const currentImage = shuffledImages[currentIndex]
  const nextIndex = (currentIndex + 1) % shuffledImages.length
  const prevIndex = (currentIndex - 1 + shuffledImages.length) % shuffledImages.length
  const nextImage = shuffledImages[nextIndex]
  const prevImage = shuffledImages[prevIndex]

  // Préchargement des images adjacentes
  useEffect(() => {
    if (nextImage) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = nextImage
      document.head.appendChild(link)
      
      return () => {
        document.head.removeChild(link)
      }
    }
  }, [nextImage])

  useEffect(() => {
    if (prevImage) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = prevImage
      document.head.appendChild(link)
      
      return () => {
        document.head.removeChild(link)
      }
    }
  }, [prevImage])

  return (
    <div className="relative h-full w-full">
      {/* Zone de clic gauche (image précédente) */}
      <button
        onClick={() => resetTimerAndNavigate('prev')}
        className="absolute left-0 top-0 bottom-0 w-1/2 z-10 cursor-w-resize"
        aria-label="Image précédente"
      >
        <span className="sr-only">Image précédente</span>
      </button>

      {/* Zone de clic droite (image suivante) */}
      <button
        onClick={() => resetTimerAndNavigate('next')}
        className="absolute right-0 top-0 bottom-0 w-1/2 z-10 cursor-e-resize"
        aria-label="Image suivante"
      >
        <span className="sr-only">Image suivante</span>
      </button>

      {/* Images cachées pour préchargement */}
      {nextImage && (
        <div className="hidden">
          <Image
            src={nextImage}
            alt=""
            width={1920}
            height={1080}
            loading="eager"
            priority={false}
          />
        </div>
      )}
      {prevImage && (
        <div className="hidden">
          <Image
            src={prevImage}
            alt=""
            width={1920}
            height={1080}
            loading="eager"
            priority={false}
          />
        </div>
      )}

      {/* Image affichée */}
      <div className="relative h-full w-full bg-white flex items-center justify-center px-6 lg:px-12 pb-20 lg:pb-0">
        <div className="relative h-[68%] w-full">
          <Image
            src={currentImage}
            alt={`Image ${currentIndex + 1} du diaporama`}
            fill
            className="object-contain transition-opacity duration-500"
            sizes="(max-width: 1024px) calc(100vw - 3rem), calc(100vw - 6rem)"
            priority
            quality={90}
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}

