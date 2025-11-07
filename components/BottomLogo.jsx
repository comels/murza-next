import Link from 'next/link'

export default function BottomLogo() {
  return (
    <Link 
      href="/"
      className="fixed bottom-0 w-full z-[100] px-6 py-6 block"
    >
      <img
        src="/logo.png"
        alt="Maison Murza"
        className="w-full block"
        style={{ height: 'auto', objectFit: 'contain', width: '100%' }}
      />
    </Link>
  )
}

