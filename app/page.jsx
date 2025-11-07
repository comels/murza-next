import getImages from '@/lib/getImages'
import HomePageClient from './HomePageClient'

export default function HomePage() {
  // Récupère la liste des images côté serveur
  const images = getImages()

  return <HomePageClient images={images} />
}

