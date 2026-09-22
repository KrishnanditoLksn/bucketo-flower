export default function Home() {
  return (
    <div className="flex w-full flex-col px-8 py-16">
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
      <div className="w-150 h-[1px] bg-black dark:bg-white/20"></div>
    </div>
  );
}
