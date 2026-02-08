import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EmergencySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const goldRuleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=125%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl
        .fromTo(
          bgRef.current,
          { scale: 1.1, opacity: 0.6 },
          { scale: 1, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          textPanelRef.current,
          { x: '-40vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.08
        )
        .fromTo(
          goldRuleRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none' },
          0.12
        );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl
        .to(
          textPanelRef.current,
          { x: '-30vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(
          goldRuleRef.current,
          { opacity: 0, ease: 'power2.in' },
          0.72
        )
        .to(
          bgRef.current,
          { scale: 1.06, opacity: 0.85, ease: 'power2.in' },
          0.7
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-navy overflow-hidden z-[104]"
    >
      {/* Full-bleed background image */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/emergency_bg.jpg"
          alt="Emergency plumbing service"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-right" />
      </div>

      {/* Left text panel */}
      <div
        ref={textPanelRef}
        className="absolute left-[6vw] top-[22vh] w-[34vw]"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Gold rule */}
        <div
          ref={goldRuleRef}
          className="gold-rule w-[8vw] mb-6 origin-left"
          style={{ willChange: 'transform' }}
        />
        
        <span className="text-micro text-gold block mb-4">Emergency</span>
        
        <h2 className="text-elite-white uppercase text-[clamp(28px,3.5vw,52px)] leading-tight mb-6">
          Emergency Services
        </h2>
        
        <p className="text-elite-gray text-[clamp(13px,1.1vw,16px)] leading-relaxed mb-8">
          Burst pipe? Sewer backup? We're on call with fast response, clear pricing, 
          and lasting fixes. Available 24 hours a day, 7 days a week for true emergencies.
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="tel:+18001234567"
            className="btn-primary flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button className="flex items-center gap-2 text-elite-white hover:text-gold transition-colors text-sm font-semibold uppercase tracking-wider">
            <MessageCircle className="w-4 h-4" />
            Text Us
          </button>
        </div>
      </div>
    </section>
  );
}
