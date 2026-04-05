import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center logo-container">
      <Link href="/" prefetch={true} className="flex items-center logo-link">
        <Image
          src="/TruVixo.png"
          alt="TruVixoo Logo"
          width={100}
          height={34}
          className="h-6 md:h-7 w-auto shadow-none transition-all duration-300 logo-image dark:brightness-0 dark:invert"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
