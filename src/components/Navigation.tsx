import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-black tracking-tight text-elite-white hover:text-gold transition-colors"
          >
            ELITE
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-elite-gray hover:text-elite-white transition-colors tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="text-sm font-medium text-elite-gray hover:text-elite-white transition-colors tracking-wide"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-elite-gray hover:text-elite-white transition-colors tracking-wide"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+18001234567"
              className="flex items-center gap-2 text-sm font-medium text-elite-gray hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>1-800-123-4567</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-xs"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-elite-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-navy/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-2xl font-semibold text-elite-white hover:text-gold transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('membership')}
            className="text-2xl font-semibold text-elite-white hover:text-gold transition-colors"
          >
            Membership
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-2xl font-semibold text-elite-white hover:text-gold transition-colors"
          >
            Contact
          </button>
          <a
            href="tel:+18001234567"
            className="flex items-center gap-3 text-lg text-gold mt-4"
          >
            <Phone className="w-5 h-5" />
            <span>1-800-123-4567</span>
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary mt-6"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
