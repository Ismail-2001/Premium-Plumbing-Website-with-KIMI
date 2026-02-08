import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TrustedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftFrameRef = useRef<HTMLDivElement>(null);
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const goldPanelRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl
        .fromTo(
          leftFrameRef.current,
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          rightFrameRef.current,
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0.06
        )
        .fromTo(
          goldPanelRef.current,
          { y: '40vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.1
        )
        .fromTo(
          textBlockRef.current,
          { y: '18vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.12
        )
        .fromTo(
          microLabelRef.current,
          { opacity: 0 },
          { opacity: 1, ease: 'none' },
          0.2
        );

      // SETTLE (30-70%): Hold positions

      // EXIT (70-100%)
      scrollTl
        .to(
          leftFrameRef.current,
          { x: '-55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(
          rightFrameRef.current,
          { x: '55vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(
          goldPanelRef.current,
          { scaleY: 0.2, opacity: 0, ease: 'power2.in' },
          0.7
        )
        .to(
          textBlockRef.current,
          { y: '16vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .to(
          microLabelRef.current,
          { opacity: 0, ease: 'power2.in' },
          0.8
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-navy overflow-hidden z-[102]"
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-overlay pointer-events-none" />

      {/* Left Landscape Image Frame */}
      <div
        ref={leftFrameRef}
        className="absolute left-[6vw] top-[18vh] w-[44vw] h-[54vh] image-frame overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/team_van_street.jpg"
          alt="Elite service van"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gold Accent Panel */}
      <div
        ref={goldPanelRef}
        className="absolute left-[50.5vw] top-[18vh] w-[3vw] h-[64vh] bg-gold/85 origin-center"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Right Portrait Image Frame */}
      <div
        ref={rightFrameRef}
        className="absolute left-[54vw] top-[14vh] w-[40vw] h-[72vh] image-frame overflow-hidden"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/team_plumber_portrait.jpg"
          alt="Trusted professional plumber"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Block (left, under landscape) */}
      <div
        ref={textBlockRef}
        className="absolute left-[8vw] top-[76vh] w-[40vw]"
        style={{ willChange: 'transform, opacity' }}
      >
        <h2 className="text-elite-white uppercase text-[clamp(28px,3.5vw,52px)] leading-tight mb-4">
          Trusted Professionals
        </h2>
        <p className="text-elite-gray text-[clamp(13px,1.1vw,16px)] leading-relaxed mb-6 max-w-[32vw]">
          Background-checked, licensed plumbers who arrive on time, protect your home, 
          and explain every step. Our team treats your home with the respect it deserves.
        </p>
        <button className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-semibold uppercase tracking-wider">
          Meet the Team
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Micro Label (right, under portrait) */}
      <div
        ref={microLabelRef}
        className="absolute left-[56vw] top-[88vh]"
        style={{ willChange: 'opacity' }}
      >
        <span className="text-micro text-gold">24/7 Response</span>
      </div>
    </section>
  );
}
