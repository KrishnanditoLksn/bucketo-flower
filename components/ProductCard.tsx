import Link from "next/link";

export interface ProductCardProps {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  return (
    <Link 
      href={`/shop/${id}`} 
      className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-[#f4f4f4] dark:bg-[#1a1a1a] hover:bg-white dark:hover:bg-[#222] transition-colors"
    >
      <div className="w-full flex-1 flex items-center justify-center max-w-[200px] sm:max-w-[250px] aspect-square relative mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="text-center w-full mt-auto">
        <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white mb-1">
          {name}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          price {price}$
        </p>
      </div>
    </Link>
  );
}
