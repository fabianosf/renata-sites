import { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  height?: string;
}

const Logo = ({ className = "", height = "h-28 md:h-32" }: LogoProps) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link
      to="/inicio"
      className={`flex items-center hover:opacity-90 transition-opacity drop-shadow-lg cursor-pointer ${className}`}
    >
      {logoError ? (
        <span className="font-bold text-xl text-primary">{siteConfig.brand.name}</span>
      ) : (
        <img
          src="/logo.png"
          alt={`${siteConfig.brand.name} Logo`}
          className={`${height} w-auto object-contain max-w-[450px] drop-shadow-2xl brightness-110 contrast-110`}
          onError={() => setLogoError(true)}
        />
      )}
    </Link>
  );
};

export default Logo;

