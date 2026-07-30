import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 z-20">
            <span className="text-[11px] sm:text-xs font-semibold text-white bg-brand-blue/80 backdrop-blur sm px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full">
              {product.category}
            </span>
          </div>
          <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 z-20 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1.5 sm:px-3 sm:py-1 flex items-center gap-0.5 sm:gap-1">
            <span className="text-brand-yellow text-[11px] sm:text-sm">★</span>
            <span className="text-brand-blue font-semibold text-[11px] sm:text-sm">{product.ratings}</span>
          </div>
        </div>
        <div className="p-3 sm:p-5 flex flex-col flex-1 relative sm:pb-10">
          <span className="hidden sm:inline text-xs font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full self-start">
            {product.category}
          </span>
          <h3 className="text-[15px] sm:text-base font-bold text-gray-800 line-clamp-2 group-hover:text-brand-blue transition-colors sm:mt-3 text-center sm:text-left">
            {product.name}
          </h3>
          <p className="hidden sm:block mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed truncate">
            {product.desc}
          </p>
          <span className="hidden sm:inline-flex absolute bottom-2.5 left-5 items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-yellow-dark transition-colors">
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
}
