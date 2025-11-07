import ContactPageClient from '../ContactPageClient'

export default function ContactPage() {
  return (
    <ContactPageClient>
      <div className="h-screen w-full pt-24 pb-24 lg:pb-24 overflow-hidden" style={{ height: '100dvh' }}>
        <div className="px-6 lg:px-8 pt-8 lg:pt-12">
          <div className="text-base leading-none">
            <div className="space-y-0">
              <p>Agathe Soudan</p>
              <a 
                href="mailto:contact@maisonmurza.com"
                className="hover:opacity-70 transition-opacity block"
              >
                contact@maisonmurza.com
              </a>
              <a 
                href="tel:+33645869898"
                className="hover:opacity-70 transition-opacity block tabular-nums"
              >
                +33 6 45 86 98 98
              </a>
              <a 
                href="https://instagram.com/maisonmurza"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity block"
              >
                ig: @maisonmurza
              </a>
            </div>
            <p className="mt-5">Paris // Marseille</p>
          </div>
        </div>
      </div>
    </ContactPageClient>
  )
}

