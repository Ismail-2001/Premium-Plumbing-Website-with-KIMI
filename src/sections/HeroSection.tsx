import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const landscapeRef = useRef<HTMLDivElement>(null);
  const goldPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      loadTl
        .fromTo(
          portraitRef.current,
          { x: '-12vw', opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          0
        )
        .fromTo(
          landscapeRef.current,
          { x: '12vw', opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          0.15
        )
        .fromTo(
          goldPanelRef.current,
          { y: '10vh', opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.25
        )
        .fromTo(
          headlineRef.current?.querySelectorAll('.word') || [],
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.03, duration: 0.5 },
          0.4
        )
        .fromTo(
          [subheadRef.current, ctaRef.current],
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
          0.6
        )
        .fromTo(
          microLabelRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          0.7
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([portraitRef.current, landscapeRef.current, goldPanelRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
            });
            gsap.set(headlineRef.current, { opacity: 1, y: 0 });
            gsap.set([subheadRef.current, ctaRef.current], { opacity: 1, y: 0 });
          },
        },
      });

      // ENTRANCE (0-30%): Hold settle state (already entered via load)
      // SETTLE (30-70%): Hold
      // EXIT (70-100%): Elements exit
      scrollTl
        .fromTo(
          portraitRef.current,
          { x: 0, opacity: 1 },
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          landscapeRef.current,
          { x: 0, opacity: 1 },
          { x: '55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          goldPanelRef.current,
          { y: 0, opacity: 1 },
          { y: '-40vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          headlineRef.current,
          { y: 0, opacity: 1 },
          { y: '-18vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          [subheadRef.current, ctaRef.current],
          { y: 0, opacity: 1 },
          { y: '-10vh', opacity: 0, ease: 'power2.in' },
          0.75
        )
        .fromTo(
          microLabelRef.current,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.8
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen bg-navy overflow-hidden z-[101]"
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Left Portrait Image Frame */}
      <div
        ref={portraitRef}
        className="absolute left-[6vw] top-[14vh] w-[40vw] h-[72vh] image-frame overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/hero_plumber_portrait.jpg"
          alt="Professional plumber"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gold Accent Panel */}
      <div
        ref={goldPanelRef}
        className="absolute left-[48.5vw] top-[18vh] w-[3vw] h-[64vh] bg-gold/85"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Right Landscape Image Frame */}
      <div
        ref={landscapeRef}
        className="absolute left-[52vw] top-[26vh] w-[42vw] h-[48vh] image-frame overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/hero_work_closeup.jpg"
          alt="Plumbing work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline Block */}
      <div
        ref={headlineRef}
        className="absolute left-[58vw] top-[10vh] w-[34vw]"
        style={{ willChange: 'transform, opacity' }}
      >
        <h1 className="text-elite-white uppercase leading-[0.95]">
          <span className="word inline-block text-[clamp(36px,5vw,72px)]">Plumbing,</span>
          <br />
          <span className="word inline-block text-[clamp(36px,5vw,72px)]">Perfected</span>
        </h1>
      </div>

      {/* Subheadline */}
      <div
        ref={subheadRef}
        className="absolute left-[58vw] top-[28vh] w-[32vw]"
        style={{ willChange: 'transform, opacity' }}
      >
        <p className="text-elite-gray text-[clamp(14px,1.2vw,18px)] leading-relaxed">
          Fast, clean repairs and installations—backed by a satisfaction guarantee.
          Serving homes with excellence since 2005.
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        ref={ctaRef}
        className="absolute left-[58vw] top-[38vh] flex items-center gap-6"
        style={{ willChange: 'transform, opacity' }}
      >
        <button onClick={() => scrollToSection('contact')} className="btn-primary">
          Book a Visit
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className="flex items-center gap-2 text-elite-white hover:text-gold transition-colors text-sm font-medium"
        >
          View Services
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="absolute left-[58vw] top-[50vh] flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-gold" />
          <span className="text-micro text-elite-gray">Licensed</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-gold" />
          <span className="text-micro text-elite-gray">Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gold" />
          <span className="text-micro text-elite-gray">24/7 Available</span>
        </div>
      </div>

      {/* Micro Label (bottom left) */}
      <div
        ref={microLabelRef}
        className="absolute left-[8vw] top-[88vh]"
        style={{ willChange: 'opacity' }}
      >
        <span className="text-micro text-gold">Expert Service</span>
      </div>

      {/* Bottom Right Licensed */}
      <div className="absolute right-[6vw] bottom-[4vh]">
        <span className="text-micro text-elite-gray/60">Licensed & Insured</span>
      </div>
    </section>
  );
}
