import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">
              <span className="text-primary">EM</span>webdesigner
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Portafolio", "Servicios", "Productos", "Certificados"].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(["portfolio", "services", "pricing", "certificates"][idx])}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
