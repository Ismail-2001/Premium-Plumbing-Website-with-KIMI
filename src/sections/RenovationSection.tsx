import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function RenovationSection() {
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
          { x: '40vw', opacity: 0 },
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
          { x: '30vw', opacity: 0, ease: 'power2.in' },
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
      className="relative w-full h-screen bg-navy overflow-hidden z-[107]"
    >
      {/* Full-bleed background image */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/renovation_bg.jpg"
          alt="Bathroom renovation"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-left" />
      </div>

      {/* Right text panel */}
      <div
        ref={textPanelRef}
        className="absolute right-[6vw] top-[22vh] w-[34vw]"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Gold rule */}
        <div
          ref={goldRuleRef}
          className="gold-rule w-[8vw] mb-6 origin-right"
          style={{ willChange: 'transform' }}
        />
        
        <span className="text-micro text-gold block mb-4">Renovations</span>
        
        <h2 className="text-elite-white uppercase text-[clamp(28px,3.5vw,52px)] leading-tight mb-6">
          Bath & Kitchen Transformations
        </h2>
        
        <p className="text-elite-gray text-[clamp(13px,1.1vw,16px)] leading-relaxed mb-8">
          From layout changes to final connections, we coordinate with your build team 
          and deliver code-compliant, beautiful results. Transform your space with 
          expert plumbing craftsmanship.
        </p>
        
        <button className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-semibold uppercase tracking-wider">
          Start a Project
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
