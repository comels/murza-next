import Image from 'next/image'

export default function AProposPage() {
  return (
    <div className="min-h-screen lg:h-screen w-full pt-24 pb-24 lg:pb-24">
      <div className="flex flex-col lg:flex-row max-w-[64rem] gap-8 lg:gap-2 mx-auto px-7 lg:px-10">
        {/* Image */}
        <div className="w-[70vw] max-w-[400px] mx-auto lg:mx-0 lg:w-[45vw] lg:max-w-none">
          <Image
            src="/portrait.jpg"
            alt="À propos"
            width={520}
            height={800}
            className="w-full h-full object-contain"
            sizes="(max-width: 1024px) 80vw, 45vw"
          />
        </div>

        {/* Texte */}
        <div className="text-lg max-w-[400px] text-gray-950 lg:max-w-xl text-justify mx-auto px-4 lg:pl-4 leading-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  )
}

