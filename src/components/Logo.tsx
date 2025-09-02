'use client'

import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/TruVixo 2.svg"
        alt="TruVixo Logo"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>
  )
}

export default Logo
