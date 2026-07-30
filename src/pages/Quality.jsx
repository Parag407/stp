import AnimateOnScroll from "../components/AnimateOnScroll";
import { qualityImage, sliderImages } from "../data/media";

const services = [
  {
    title: "Focused Approach",
    desc: "Dedicated focus on delivering specialized piping solutions for dairy, pharma, and industrial applications.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    desc: "Every product undergoes rigorous quality checks and testing to ensure they meet industry standards.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "High Quality",
    desc: "Premium grade materials and precision manufacturing ensure superior product performance and longevity.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    desc: "We prioritize our clients' needs with responsive support, timely delivery, and after-sales service.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

// const standards = [
//   { name: "ISO 9001:2015", desc: "Quality Management System certified" },
//   { name: "Raw Material Testing", desc: "Chemical and mechanical property verification" },
//   { name: "Dimensional Inspection", desc: "Precision measurement with calibrated instruments" },
//   { name: "Pressure Testing", desc: "Hydrostatic and pneumatic testing for all valves" },
//   { name: "Surface Finish Check", desc: "Ra value verification for sanitary applications" },
//   { name: "Traceability", desc: "Full material traceability with mill test certificates" }
// ];

export default function Quality() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue py-20 text-white">
        <div className="absolute inset-0 z-0">
          <img src={sliderImages[2]} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-brand-blue-light/70 to-brand-blue/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-yellow font-semibold text-sm tracking-widest uppercase">
            Quality
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Quality Assurance
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We are committed to delivering products that meet the highest
            standards of quality and reliability.
          </p>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">
                  Our Standards
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  Commitment to Excellence
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    At Silver TC Fitting, quality is not just a department - it
                    is a culture. Every product we manufacture undergoes
                    comprehensive quality checks at multiple stages of
                    production. From raw material inspection to final dispatch,
                    our quality team ensures that every item meets the strictest
                    industry standards.
                  </p>
                  <p>
                    We are ISO 9001:2015 certified and our testing procedures
                    are aligned with international standards. Our in-house
                    testing facility is equipped with modern instruments for
                    dimensional inspection, pressure testing, surface finish
                    analysis, and material verification.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl overflow-hidden">
                <img
                  src={qualityImage}
                  alt="Quality Control"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                What We Deliver
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group p-4 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:border-brand-blue/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
