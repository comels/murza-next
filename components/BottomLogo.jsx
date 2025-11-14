export default function BottomLogo() {
  return (
    <div className="fixed bottom-0 w-full z-[100] px-6 py-6 block select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>
      <img
        src="/logo.png"
        alt="Maison Murza"
        className="w-full block pointer-events-none"
        style={{ height: 'auto', objectFit: 'contain', width: '100%', userSelect: 'none', WebkitUserSelect: 'none' }}
      />
    </div>
  )
}

