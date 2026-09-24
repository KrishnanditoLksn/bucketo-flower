import ProductCard from "@/components/ProductCard";

const flowers = [
  { id: 1, name: "Snowfall", price: 70, image: "/buket.png" },
  { id: 2, name: "Dawn's Delight", price: 85, image: "/buket.png" },
  { id: 3, name: "Pink Elegance", price: 120, image: "/buket.png" },
  { id: 4, name: "Rustic Charm", price: 150, image: "/buket.png" },
  { id: 5, name: "Single Rose", price: 15, image: "/buket.png" },
  { id: 6, name: "Spring Bloom", price: 75, image: "/buket.png" },
];

export default function ShopPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-[#121212]">
      {/* Top Hero Section */}
      <div className="relative w-full h-[250px] md:h-[350px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/buket.png" 
            alt="Fresh Flowers Background" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg mb-4">
            Koleksi Bunga
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-lg mx-auto">
            Temukan koleksi bunga terbaik untuk setiap momen spesial Anda.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
            Semua Bunga
          </h2>
        </div>

        {/* Flower Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {flowers.map((flower) => (
            <ProductCard 
              key={flower.id}
              id={flower.id}
              name={flower.name}
              price={flower.price}
              image={flower.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
