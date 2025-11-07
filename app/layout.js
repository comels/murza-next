import './globals.css'
import Navbar from '@/components/Navbar'
import BottomLogo from '@/components/BottomLogo'

export const metadata = {
  title: 'Maison Murza',
  description: 'Maison Murza - Site vitrine avec diaporama d\'images',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Maison Murza',
    description: 'Maison Murza - Site vitrine avec diaporama d\'images',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="relative min-h-screen lg:h-screen pb-24 lg:pb-0 overflow-auto lg:overflow-hidden">
          {children}
        </main>
        <BottomLogo />
      </body>
    </html>
  )
}

