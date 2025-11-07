import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="flex justify-between items-center px-6 py-4 lg:px-8">
        {/* Liens à gauche */}
        <div className="flex gap-6">
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

