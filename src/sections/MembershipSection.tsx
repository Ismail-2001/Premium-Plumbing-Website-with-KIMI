import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ChevronDown, ArrowRight, Shield, Clock, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Essential',
    price: '$19',
    period: '/month',
    description: 'Annual inspection + 10% off repairs',
    features: [
      'Annual comprehensive inspection',
      '10% discount on all repairs',
      'Priority scheduling',
      'No overtime charges',
    ],
    icon: Shield,
  },
  {
    name: 'Preferred',
    price: '$39',
    period: '/month',
    description: 'Bi-annual tune-ups + 15% off + priority scheduling',
    features: [
      'Bi-annual system tune-ups',
      '15% discount on all repairs',
      'Priority scheduling',
      'No dispatch fees',
      'Extended warranty on work',
    ],
    icon: Star,
    popular: true,
  },
  {
    name: 'Complete',
    price: '$69',
    period: '/month',
    description: 'Quarterly care + 20% off + 24/7 line access',
    features: [
      'Quarterly maintenance visits',
      '20% discount on all repairs',
      '24/7 emergency line access',
      'No dispatch fees ever',
      'Lifetime repair guarantee',
      'Annual water heater flush',
    ],
    icon: Clock,
  },
];

const faqs = [
  {
    question: 'What does the membership cover?',
    answer: 'Our memberships cover preventive maintenance, inspections, and discounts on all repair services. Parts and labor for repairs are billed separately at your discounted rate.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, all memberships can be cancelled with 30 days notice. There are no long-term contracts or cancellation fees.',
  },
  {
    question: 'Is the membership transferable?',
    answer: 'Yes, if you sell your home, the membership can be transferred to the new owners at no additional cost.',
  },
  {
    question: 'What is the response time for members?',
    answer: 'Preferred and Complete members receive same-day service for non-emergencies and priority response for emergencies, typically within 1-2 hours.',
  },
];

export default function MembershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger reveal
      const cards = cardsRef.current?.querySelectorAll('.plan-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.5,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // CTA reveal
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="membership"
      className="relative w-full bg-elite-offwhite py-24 lg:py-32 z-[108]"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-micro text-gold block mb-4">Membership</span>
          <h2 className="text-navy uppercase text-[clamp(32px,4vw,56px)] leading-tight mb-4">
            EliteCare Membership
          </h2>
          <p className="text-gray-600 text-[clamp(14px,1.2vw,18px)] max-w-2xl mx-auto">
            Priority scheduling, lower rates, and peace of mind—year round.
          </p>
        </div>

        {/* Plan Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`plan-card relative bg-white p-8 lg:p-10 border-2 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.popular
                  ? 'border-gold shadow-xl'
                  : 'border-transparent shadow-lg hover:border-gold/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <plan.icon className="w-6 h-6 text-gold" />
                <h3 className="text-navy text-xl font-bold uppercase tracking-wide">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-6">
                <span className="text-navy text-4xl font-black">{plan.price}</span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              <p className="text-gray-600 text-sm mb-8">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold text-navy hover:bg-gold-dark'
                    : 'bg-navy text-white hover:bg-navy-light'
                }`}
              >
                Join EliteCare
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-navy text-2xl font-bold uppercase tracking-wide text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-navy font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div
          ref={ctaRef}
          className="bg-navy py-8 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <p className="text-elite-white text-lg">
            Not sure? Book a free inspection.
          </p>
          <button className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-semibold uppercase tracking-wider">
            Schedule Free Inspection
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
