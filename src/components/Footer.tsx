import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-navy-dark border-t border-elite-white/10 z-[110]">
      <div className="w-full px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-3xl font-black tracking-tight text-elite-white hover:text-gold transition-colors mb-4 block"
              >
                ELITE
              </button>
              <p className="text-elite-gray text-sm leading-relaxed mb-6">
                Premium plumbing services with a satisfaction guarantee. 
                Licensed, insured, and available 24/7.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-navy-light border border-elite-white/10 flex items-center justify-center text-elite-gray hover:text-gold hover:border-gold/50 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-navy-light border border-elite-white/10 flex items-center justify-center text-elite-gray hover:text-gold hover:border-gold/50 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-navy-light border border-elite-white/10 flex items-center justify-center text-elite-gray hover:text-gold hover:border-gold/50 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-navy-light border border-elite-white/10 flex items-center justify-center text-elite-gray hover:text-gold hover:border-gold/50 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-elite-white font-bold uppercase tracking-wide text-sm mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-elite-gray hover:text-gold transition-colors text-sm"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-elite-gray hover:text-gold transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('membership')}
                    className="text-elite-gray hover:text-gold transition-colors text-sm"
                  >
                    Membership
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-elite-gray hover:text-gold transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-elite-white font-bold uppercase tracking-wide text-sm mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-elite-gray text-sm">Leak Detection & Repair</span>
                </li>
                <li>
                  <span className="text-elite-gray text-sm">Emergency Services</span>
                </li>
                <li>
                  <span className="text-elite-gray text-sm">Fixture Installation</span>
                </li>
                <li>
                  <span className="text-elite-gray text-sm">Drain & Sewer Care</span>
                </li>
                <li>
                  <span className="text-elite-gray text-sm">Bath & Kitchen Renovations</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-elite-white font-bold uppercase tracking-wide text-sm mb-6">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+18001234567"
                    className="text-elite-gray hover:text-gold transition-colors text-sm"
                  >
                    1-800-123-4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:service@eliteplumbing.com"
                    className="text-elite-gray hover:text-gold transition-colors text-sm"
                  >
                    service@eliteplumbing.com
                  </a>
                </li>
                <li>
                  <span className="text-elite-gray text-sm">
                    123 Service Street<br />
                    Metro City, ST 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-elite-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-elite-gray/60 text-xs">
              © {new Date().getFullYear()} Elite Plumbing Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-elite-gray/60 hover:text-elite-gray text-xs transition-colors">
                Privacy Policy
              </button>
              <button className="text-elite-gray/60 hover:text-elite-gray text-xs transition-colors">
                Terms of Service
              </button>
              <button className="text-elite-gray/60 hover:text-elite-gray text-xs transition-colors">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
