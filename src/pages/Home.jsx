import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import AnimateOnScroll from "../components/AnimateOnScroll";
import products from "../data/products";
import { brandsImages } from "../data/media";
import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Certified Quality",
    desc: "ISO certified manufacturing with stringent quality checks at every stage."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Quick Delivery",
    desc: "Pan-India delivery network ensuring your orders reach on time, every time."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Expert Team",
    desc: "Experienced professionals dedicated to providing the best solutions."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Vast Inventory",
    desc: "Extensive range of sizes and specifications always in stock."
  }
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Carousel />

      <AnimateOnScroll>
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">What We Offer</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
                Why Choose Silver TC Fitting?
              </h2>
              <p className="text-gray-500 leading-relaxed">
                With over a decade of experience, we deliver unmatched quality and service in the piping industry.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-3 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-brand-blue/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-16 sm:py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-12">
              <div className="text-center sm:text-left">
                <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Our Products</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Featured Products</h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-yellow-dark transition-colors"
              >
                View All Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-12 sm:py-24 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <span className="text-brand-yellow font-semibold text-xs sm:text-sm tracking-widest uppercase">About Us</span>
                <h2 className="text-xl sm:text-4xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6">
                  Trusted Partner in Piping Solutions Since 2010
                </h2>
                <p className="text-blue-200 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  At Silver TC Fitting, we specialize in manufacturing and supplying high-quality pipes, valves, and fittings
                  for dairy, pharmaceutical, and industrial sectors. Our commitment to quality and customer satisfaction has
                  made us a preferred choice for over 500 clients across India.
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
                  {[
                    { number: "500+", label: "Clients" },
                    { number: "15+", label: "Years Experience" },
                    { number: "1000+", label: "Products" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-xl sm:text-3xl font-bold text-brand-yellow">{stat.number}</p>
                      <p className="text-xs sm:text-sm text-blue-200 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-brand-yellow text-brand-blue px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-white transition-all duration-200"
                >
                  Learn More About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Our Mission</h4>
                  <p className="text-blue-200 text-xs sm:text-sm">Deliver premium quality piping solutions with unmatched reliability.</p>
                </div>
                <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm sm:mt-6 mt-0">
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Our Vision</h4>
                  <p className="text-blue-200 text-xs sm:text-sm">Be India's most trusted name in industrial piping solutions.</p>
                </div>
                <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Our Values</h4>
                  <p className="text-blue-200 text-xs sm:text-sm">Integrity, quality, innovation, and customer-first approach.</p>
                </div>
                <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm sm:mt-2 mt-0">
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Our Commitment</h4>
                  <p className="text-blue-200 text-xs sm:text-sm">Consistent quality, timely delivery, and complete satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="py-16 sm:py-20 bg-white overflow-hidden">
          <style>{`
            @keyframes marquee-ltr {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            @keyframes marquee-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-ltr { animation: marquee-ltr 40s linear infinite; }
            .marquee-rtl { animation: marquee-rtl 40s linear infinite; }
            .marquee-ltr:hover, .marquee-rtl:hover { animation-play-state: paused; }
          `}</style>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-brand-blue font-semibold text-sm tracking-widest uppercase">Our Certifications</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">Trusted & Certified</h2>
            </div>
          </div>

          {(() => {
            const half = Math.ceil(brandsImages.length / 2);
            const row1Brands = brandsImages.slice(0, half);
            const row2Brands = brandsImages.slice(half);
            return (
              <>
                <div className="hidden lg:block overflow-hidden px-4">
                  <div className="marquee-ltr flex gap-8 w-max">
                    {[...brandsImages, ...brandsImages].map((img, i) => (
                      <div key={i} className="flex-shrink-0 flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 w-72 h-28">
                        <img src={img} alt={`Brand ${(i % brandsImages.length) + 1}`} className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:hidden space-y-4 overflow-hidden px-4">
                  <div className="marquee-ltr flex gap-4 w-max">
                    {[...row1Brands, ...row1Brands].map((img, i) => (
                      <div key={i} className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 w-44 h-20">
                        <img src={img} alt={`Brand ${(i % row1Brands.length) + 1}`} className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="marquee-rtl flex gap-4 w-max">
                    {[...row2Brands, ...row2Brands].map((img, i) => (
                      <div key={i} className="flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 w-44 h-20">
                        <img src={img} alt={`Brand ${(i % row2Brands.length) + 1}`} className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </section>
      </AnimateOnScroll>
    </>
  );
}
