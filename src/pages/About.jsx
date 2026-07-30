import { Link } from "react-router-dom";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { aboutImage, sliderImages } from "../data/media";

const milestones = [
  { year: "2010", title: "Founded", desc: "Silver TC Fitting established in Mumbai with a vision for quality." },
  { year: "2013", title: "Expansion", desc: "Expanded product range to include full tri-clover fitting line." },
  { year: "2016", title: "ISO Certified", desc: "Achieved ISO 9001 certification for quality management." },
  { year: "2020", title: "Pan-India Reach", desc: "Serving 500+ clients across all major industrial hubs in India." },
  { year: "2024", title: "Industry Leader", desc: "Recognized as a preferred supplier for top pharma & dairy companies." }
];

const team = [
  { name: "Rajesh Mehta", role: "Founder & CEO", initials: "RM" },
  { name: "Anita Sharma", role: "Quality Head", initials: "AS" },
  { name: "Vikram Patel", role: "Technical Director", initials: "VP" },
  { name: "Priya Singh", role: "Operations Manager", initials: "PS" }
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue py-20 text-white">
        <div className="absolute inset-0 z-0">
          <img src={sliderImages[2]} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-brand-blue-light/70 to-brand-blue/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-brand-yellow font-semibold text-sm tracking-widest uppercase">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Who We Are</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Silver TC Fitting is a premier manufacturer and supplier of high-quality pipes, valves, and fittings,
              serving dairy, pharmaceutical, and industrial sectors since 2010.
            </p>
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-last lg:order-first">
                <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Our Story</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                  15+ Years of Excellence in Piping Solutions
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2010, Silver TC Fitting began with a simple mission: to provide premium quality pipes, valves,
                    and fittings to India's growing industrial sector. What started as a small operation in Mumbai has grown
                    into a trusted name across the country.
                  </p>
                  <p>
                    Our specialization in tri-clover fittings, sanitary valves, and stainless steel components has made us the
                    preferred partner for dairy plants, pharmaceutical manufacturers, and chemical processing units.
                  </p>
                  <p>
                    Every product we deliver undergoes rigorous quality checks to ensure it meets the highest industry
                    standards. Our team of experienced engineers and technicians works tirelessly to maintain our reputation
                    for excellence.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-blue-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-3xl font-bold text-brand-blue">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-3xl font-bold text-brand-blue">1000+</p>
                    <p className="text-sm text-gray-600">Products</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-3xl font-bold text-brand-blue">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-3xl font-bold text-brand-blue">99%</p>
                    <p className="text-sm text-gray-600">On-Time Delivery</p>
                  </div>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="aspect-[4/5]  rounded-3xl overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Silver TC Fitting Factory"
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-brand-yellow rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl">
                  <p className="text-brand-blue font-bold text-base sm:text-lg">Est. 2010</p>
                  <p className="text-brand-blue text-xs sm:text-sm">Trusted by Industry</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* <AnimateOnScroll>
        <section className="py-20 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Timeline</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Our Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <div key={i} className={`relative flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-yellow rounded-full items-center justify-center z-10 shadow-md">
                      <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                    </div>
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <span className="text-brand-yellow font-bold text-xl">{m.year}</span>
                        <h3 className="text-lg font-bold text-gray-800 mt-1">{m.title}</h3>
                        <p className="text-sm text-gray-500 mt-2">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll> */}

      {/* <AnimateOnScroll>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Meet Our Team</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group text-center">
                  <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue transition-colors duration-300">
                    <span className="text-2xl font-bold text-brand-blue group-hover:text-white transition-colors duration-300">{member.initials}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll> */}

      <AnimateOnScroll>
        <section className="py-20 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team for premium quality pipes, valves, and fittings tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Contact Us Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
