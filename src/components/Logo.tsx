'use client'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" prefetch={true} className="flex items-center">
        {/* Desktop: TruVixo.png */}
        <Image
          src="/TruVixo.png"
          alt="TruVixo Logo"
          width={120}
          height={40}
          className="hidden md:block h-10 w-auto shadow-none transition-all duration-300"
          priority
        />
        {/* Mobile: TruVixo logo.png */}
        <Image
          src="/TruVixo logo.png"
          alt="TruVixo Logo"
          width={120}
          height={40}
          className="md:hidden h-8 w-auto shadow-none transition-all duration-300"
          priority
          unoptimized
        />
      </Link>
    </div>
  )
}

export default Logo

