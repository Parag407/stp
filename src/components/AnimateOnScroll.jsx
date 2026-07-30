import { useEffect, useRef, useState } from "react";

const variants = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-left": "opacity-0 -translate-x-8",
  "fade-right": "opacity-0 translate-x-8",
  scale: "opacity-0 scale-90",
};

const visibleClasses = {
  "fade-up": "opacity-100 translate-y-0",
  "fade-left": "opacity-100 translate-x-0",
  "fade-right": "opacity-100 translate-x-0",
  scale: "opacity-100 scale-100",
};

export default function AnimateOnScroll({ children, className = "", variant = "fade-up", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? visibleClasses[variant] || visibleClasses["fade-up"] : variants[variant] || variants["fade-up"]
      } ${className}`}
    >
      {children}
    </div>
  );
}
