import { useState, useEffect } from "react";
import Logo from "/src/assets/ak_logo.svg";

interface NavProps {
  onNavigate: (section: string) => void;
}

export default function Nav({ onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-between">
        <img className="w-15" src={Logo} alt="Logo" />
        <div className="flex items-center gap-8">
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
