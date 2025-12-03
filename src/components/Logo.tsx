'use client'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" prefetch={true} className="flex items-center">
        {/* Same logo for both mobile and desktop */}
        <Image
          src="/TruVixo.png"
          alt="TruVixo Logo"
          width={120}
          height={40}
          className="h-8 md:h-10 w-auto shadow-none transition-all duration-300"
          priority
        />
      </Link>
    </div>
  )
}

export default Logo

