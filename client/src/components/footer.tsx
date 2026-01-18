import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import greenscapeProLogo from "@assets/image - Edited_1757809378054.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6" data-testid="footer-logo">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img src={greenscapeProLogo} alt="GreenScape Pro Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-serif font-bold text-xl text-primary">GreenScape Pro</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
              Professional landscaping services creating beautiful, sustainable outdoor spaces for over 15 years. 
              Licensed, insured, and committed to excellence.
            </p>
            <div className="flex space-x-4" data-testid="footer-social">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-twitter">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-facebook">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-instagram">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-service-design">Landscape Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-service-lawn">Lawn Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-service-hardscape">Hardscaping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-service-irrigation">Irrigation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-service-tree">Tree Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-service-cleanup">Seasonal Cleanup</a></li>
            </ul>
          </div>

          {/* Company */}
          <div data-testid="footer-company">
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-testimonials">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-careers">Careers</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors" data-testid="footer-blog">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" data-testid="footer-bottom">
          <div className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2024 GreenScape Pro Landscape & Lawn Care Company. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0" data-testid="footer-legal">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-terms">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-licensing">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
