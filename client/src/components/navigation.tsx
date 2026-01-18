import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import greenscapeProLogo from "@assets/image - Edited_1757809378054.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-sm" : "bg-background/95 backdrop-blur-sm"
      } border-b border-border`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <img src={greenscapeProLogo} alt="GreenScape Pro Logo" className="w-6 h-6 object-contain" />
            </div>
            <span className="font-serif font-bold text-xl text-primary">GreenScape Pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="nav-contact"
            >
              Contact Us
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
            <button 
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-primary font-medium w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
