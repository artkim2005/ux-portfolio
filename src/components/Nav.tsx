import { useEffect, useState } from "react";
import Logo from "/src/assets/ak_logo.svg";

interface NavProps {
  onNavigate: (section: string) => void;
}

export default function Nav({ onNavigate }: NavProps) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY for modern browsers
      setScrollY(window.scrollY);
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up listener on unmount to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY !== 0 && "bg-black/10 backdrop-blur-sm"}`}
    >
      <div
        className={`max-w-8xl mx-auto px-6 h-20 flex items-center justify-between`}
      >
        <img className="w-15" src={Logo} alt="Logo" />
        <div className="hidden sm:flex items-center gap-8">
          {["Home", "About", "Work", "Contact"].map((label) => (
            <button
              key={label}
              onClick={() => onNavigate(label.toLowerCase())}
              className="text-md text-white hover:text-neutral-200 transition-colors font-medium cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
