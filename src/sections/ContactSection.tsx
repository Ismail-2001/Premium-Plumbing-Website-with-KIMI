import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const goldLineRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    notes: '',
  });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        goldLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        notes: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-navy py-24 lg:py-32 z-[109]"
    >
      {/* Gold line decoration */}
      <div
        ref={goldLineRef}
        className="absolute top-16 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gold origin-center"
        style={{ willChange: 'transform' }}
      />

      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 pt-8">
            <span className="text-micro text-gold block mb-4">Contact</span>
            <h2 className="text-elite-white uppercase text-[clamp(32px,4vw,56px)] leading-tight mb-4">
              Book Your Appointment
            </h2>
            <p className="text-elite-gray text-[clamp(14px,1.2vw,18px)] max-w-2xl mx-auto">
              Tell us what you need and we'll confirm within 30 minutes during business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div ref={leftColRef} className="space-y-10">
              <div>
                <h3 className="text-elite-white text-xl font-bold uppercase tracking-wide mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:+18001234567"
                    className="flex items-center gap-4 text-elite-gray hover:text-gold transition-colors group"
                  >
                    <div className="w-12 h-12 bg-navy-light border border-elite-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="text-micro text-elite-gray/60 block">Phone</span>
                      <span className="text-elite-white">1-800-123-4567</span>
                    </div>
                  </a>

                  <a
                    href="mailto:service@eliteplumbing.com"
                    className="flex items-center gap-4 text-elite-gray hover:text-gold transition-colors group"
                  >
                    <div className="w-12 h-12 bg-navy-light border border-elite-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="text-micro text-elite-gray/60 block">Email</span>
                      <span className="text-elite-white">service@eliteplumbing.com</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-elite-gray">
                    <div className="w-12 h-12 bg-navy-light border border-elite-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="text-micro text-elite-gray/60 block">Service Area</span>
                      <span className="text-elite-white">Greater Metropolitan Area</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-elite-gray">
                    <div className="w-12 h-12 bg-navy-light border border-elite-white/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="text-micro text-elite-gray/60 block">Hours</span>
                      <span className="text-elite-white">24/7 Emergency Service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative map illustration */}
              <div className="bg-navy-light border border-elite-white/10 p-6">
                <div className="aspect-video bg-navy relative overflow-hidden">
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Stylized map grid */}
                    <g stroke="rgba(201,164,92,0.2)" strokeWidth="1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={i * 25} x2="400" y2={i * 25} />
                      ))}
                      {Array.from({ length: 17 }).map((_, i) => (
                        <line key={`v${i}`} x1={i * 25} y1="0" x2={i * 25} y2="200" />
                      ))}
                    </g>
                    {/* Service area highlight */}
                    <circle cx="200" cy="100" r="60" fill="rgba(201,164,92,0.1)" />
                    <circle cx="200" cy="100" r="40" fill="rgba(201,164,92,0.15)" />
                    {/* Location pin */}
                    <circle cx="200" cy="100" r="8" fill="#C9A45C" />
                    <circle cx="200" cy="100" r="4" fill="#0B0F17" />
                  </svg>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-micro text-gold">Service Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div ref={rightColRef}>
              <div className="bg-navy-light border border-elite-white/10 p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-gold mb-4" />
                    <h4 className="text-elite-white text-xl font-bold uppercase tracking-wide mb-2">
                      Request Received
                    </h4>
                    <p className="text-elite-gray">
                      We'll contact you within 30 minutes to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-micro text-elite-gray/60 block mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy border border-elite-white/20 px-4 py-3 text-elite-white placeholder-elite-gray/40 focus:border-gold focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-micro text-elite-gray/60 block mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy border border-elite-white/20 px-4 py-3 text-elite-white placeholder-elite-gray/40 focus:border-gold focus:outline-none transition-colors"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-micro text-elite-gray/60 block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-navy border border-elite-white/20 px-4 py-3 text-elite-white placeholder-elite-gray/40 focus:border-gold focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-micro text-elite-gray/60 block mb-2">
                          Service Type
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy border border-elite-white/20 px-4 py-3 text-elite-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-navy">Select service</option>
                          <option value="repair" className="bg-navy">Leak Repair</option>
                          <option value="install" className="bg-navy">Fixture Installation</option>
                          <option value="emergency" className="bg-navy">Emergency Service</option>
                          <option value="maintenance" className="bg-navy">Maintenance</option>
                          <option value="renovation" className="bg-navy">Renovation</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-micro text-elite-gray/60 block mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-navy border border-elite-white/20 px-4 py-3 text-elite-white focus:border-gold focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-micro text-elite-gray/60 block mb-2">
                        Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-navy border border-elite-white/20 px-4 py-3 text-elite-white placeholder-elite-gray/40 focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Describe your plumbing issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Request Appointment
                    </button>
                  </form>
                )}
              </div>

              <p className="text-elite-gray/60 text-xs text-center mt-6">
                Licensed & insured. Satisfaction guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
