import { useState } from "react";
import ProductCard from "../components/ProductCard";
import AnimateOnScroll from "../components/AnimateOnScroll";
import products, { categories } from "../data/products";
import { sliderImages } from "../data/media";

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue-light to-brand-blue py-20 text-white">
        <div className="absolute inset-0 z-0">
          <img src={sliderImages[0]} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 via-brand-blue-light/70 to-brand-blue/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-yellow font-semibold text-sm tracking-widest uppercase">Our Range</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">Our Products</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Explore our extensive range of premium pipes, valves, and fittings for dairy, pharmaceutical, and industrial applications.
          </p>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-12">
              <button
                onClick={() => handleCategoryChange("All")}
                className={`flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === "All"
                    ? "bg-brand-blue text-white shadow-lg shadow-blue-200"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                All
              </button>
              <div className="flex overflow-x-auto lg:overflow-visible flex-nowrap lg:flex-wrap gap-3 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e40af #e2e8f0' }}>
              {categories.filter(c => c !== "All").map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-brand-blue text-white shadow-lg shadow-blue-200"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      currentPage === page
                        ? "bg-brand-blue text-white shadow-lg shadow-blue-200"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  Next
                </button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
