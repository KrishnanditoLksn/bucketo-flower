import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-80px)]">
      {/* Left Column - Hero Content */}
      <div className="flex flex-col w-full lg:w-1/2 px-8 py-16 lg:pr-16">
        {/* Hero Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-[100px] leading-tight font-medium tracking-tight mb-6">
          Kyiv <br />
          LuxeBouquets
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-16">
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: <br className="hidden sm:block" />
          Spread Joy with Our <span className="italic">Online Flower Delivery Service</span>
        </p>

        {/* Bottom Divider */}
        <div className="w-[150px] sm:w-[300px] h-[1px] bg-black dark:bg-white/20 mb-8 sm:mb-12"></div>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-[256px] shrink-0">
            <img 
              src="/buket.png" 
              alt="Woman smelling a white floral bouquet" 
              className="w-[256px] h-[256px] object-cover grayscale"
            />
          </div>
          
          <div className="hidden md:block w-[1px] h-64 bg-black dark:bg-white/20"></div>

          <div className="w-full md:w-[45%] flex items-center">
            <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-light">
              Experience the joy of giving with our<br className="hidden md:block" />
              modern floral studio. Order online and<br className="hidden md:block" />
              send fresh flowers, plants and gifts<br className="hidden md:block" />
              today.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Shop Cards */}
      <div className="flex flex-col w-full lg:w-1/2 border-l border-black dark:border-white/20">
        {/* Fresh Flowers Row */}
        <div className="flex flex-col sm:flex-row w-full flex-1 min-h-[350px] border-b border-black dark:border-white/20">
          {/* Left Half (Text) */}
          <Link 
            href="/shop" 
            className="group w-full sm:w-1/2 flex flex-col items-center justify-center relative p-8 sm:p-12 border-b sm:border-b-0 sm:border-r border-black dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <h2 className="text-4xl lg:text-5xl font-medium text-center">Fresh Flowers</h2>
            
            <div className="absolute bottom-8 left-8 sm:left-12 flex items-center gap-2 font-medium text-lg">
              Shop now 
              <svg 
                className="w-6 h-6 transition-transform group-hover:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
          
          {/* Right Half (Image) */}
          <Link 
            href="/shop"
            className="group w-full sm:w-1/2 flex items-center justify-center p-8 bg-[#e8e9eb] dark:bg-black/50 overflow-hidden"
          >
            <img 
              src="/buket.png" 
              alt="Fresh Flowers Bouquet" 
              className="w-full max-w-[250px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Dried Flowers Row */}
        <div className="flex flex-col-reverse sm:flex-row w-full flex-1 min-h-[350px]">
          {/* Left Half (Image) */}
          <Link 
            href="/shop"
            className="group w-full sm:w-1/2 flex items-center justify-center p-8 bg-[#e9dccf] dark:bg-black/50 border-t sm:border-t-0 sm:border-r border-black dark:border-white/20 overflow-hidden"
          >
            <img 
              src="/buket.png" 
              alt="Dried Flowers Bouquet" 
              className="w-full max-w-[250px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Right Half (Text) */}
          <Link 
            href="/shop" 
            className="group w-full sm:w-1/2 flex flex-col items-center justify-center relative p-8 sm:p-12 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <h2 className="text-4xl lg:text-5xl font-medium text-center">Dried Flowers</h2>
            
            <div className="absolute bottom-8 right-8 sm:right-12 flex items-center gap-2 font-medium text-lg">
              <svg 
                className="w-6 h-6 transition-transform group-hover:-translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Shop now 
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
