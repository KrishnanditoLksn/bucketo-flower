"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import FlowerDetail from "@/components/FlowerDetail";

// Mock data (in a real app this would be fetched from API/Database)
const flowers = [
  { id: "1", name: "Snowfall", price: 70, image: "/buket.png", description: "Bunga putih bersih bagaikan salju, cocok untuk momen suci dan elegan." },
  { id: "2", name: "Dawn's Delight", price: 85, image: "/buket.png", description: "Warna-warni cerah yang mengingatkan pada keindahan fajar." },
  { id: "3", name: "Pink Elegance", price: 120, image: "/buket.png", description: "Nuansa merah muda yang sangat elegan dan romantis." },
  { id: "4", name: "Rustic Charm", price: 150, image: "/buket.png", description: "Gaya rustic yang unik dan memberikan kesan hangat." },
  { id: "5", name: "Single Rose", price: 15, image: "/buket.png", description: "Satu tangkai mawar merah klasik untuk mengungkapkan cinta." },
  { id: "6", name: "Spring Bloom", price: 75, image: "/buket.png", description: "Kombinasi bunga musim semi yang ceria dan menyegarkan." },
];

export default function FlowerDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const flower = flowers.find((f) => f.id === id);

  if (!flower) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-[#121212]">
        <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">Bunga tidak ditemukan</h1>
        <Link href="/shop" className="text-blue-600 dark:text-blue-400 hover:underline">
          Kembali ke Koleksi
        </Link>
      </div>
    );
  }

  return <FlowerDetail flower={flower} />;
}
