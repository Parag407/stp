import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sliderImages } from "../data/media";

const slides = [
  {
    title: "Premium Pipes, Valves & Fittings",
    subtitle: "Engineering Excellence for Dairy, Pharma & Industry",
    cta: "Explore",
    link: "/about",
    bg: sliderImages[0],
  },
  {
    title: "Quality You Can Trust",
    subtitle: "ISO Certified Manufacturing with Rigorous Quality Control",
    cta: "Explore",
    link: "/about",
    bg: sliderImages[1],
  },
  {
    title: "Industry Leaders Since 2010",
    subtitle: "Serving 500+ Clients Across India with Excellence",
    cta: "Explore",
    link: "/about",
    bg: sliderImages[2],
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[780px] flex items-end overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 via-50% to-black z-10"></div>

      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute border border-l-white left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute  border border-l-white right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 w-full pb-16 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 hidden"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-blue drop-shadow-2xl w-48 sm:w-56 px-8 py-4 rounded-xl font-semibold text-xl sm:text-base hover:bg-white hover:scale-105 transition-all duration-200 shadow-xl"
              >
                {slide.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
              index === current
                ? "bg-brand-yellow scale-125"
                : "bg-white/40 hover:bg-white/70 scale-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
