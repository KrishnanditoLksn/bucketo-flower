"use client";

import { useState } from "react";
import Link from "next/link";

const catalogs = ["Reguler Bouquet", "Medium", "Large", "Premium/Custom", "Satuan"];
const colors = ["Merah", "Putih", "Pink", "Kuning", "Biru"];
const wrappings = ["Kertas Coklat (Rustic)", "Kertas Hitam Premium", "Kertas Transparan", "Jaring / Mesh"];

export interface FlowerDetailProps {
  flower: {
    id: string | number;
    name: string;
    price: number;
    image: string;
    description: string;
    contents?: string[];
  };
}

export default function FlowerDetail({ flower }: FlowerDetailProps) {
  // Opsi Produk
  const [selectedCatalog, setSelectedCatalog] = useState(catalogs[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedWrapping, setSelectedWrapping] = useState(wrappings[0]);
  const [greetingCard, setGreetingCard] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  // Data Pemesan
  const [customerName, setCustomerName] = useState("");
  const [customerWa, setCustomerWa] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [dateNeeded, setDateNeeded] = useState("");

  const bouquetContents = flower.contents || [
    "Bunga Utama (Mawar/Lily)",
    "Bunga Pendamping (Baby's Breath)",
    "Daun Hias (Eucalyptus)",
    "Pita Satin Premium"
  ];

  const handleOrder = () => {
    // Validasi sederhana
    if (!customerName || !customerWa || !customerAddress || !dateNeeded) {
      alert("Mohon lengkapi data pemesan (Nama, No WA, Alamat, Tanggal).");
      return;
    }

    const phoneNumber = "6281332636458"; // TODO: Ganti dengan nomor WhatsApp admin yang asli
    
    const message = `Halo, saya ingin memesan produk berikut:

*DATA PESANAN*
- Produk: ${flower.name}
- Detail: ${selectedCatalog}, Warna ${selectedColor}, Wrap ${selectedWrapping}
- Jumlah: ${quantity}
- Custom Kartu Ucapan: ${greetingCard ? greetingCard : "-"}
- Catatan: ${orderNotes ? orderNotes : "-"}

*DATA PEMESAN*
- Nama: ${customerName}
- No. WhatsApp: ${customerWa}
- Tanggal dibutuhkan: ${dateNeeded}
- Alamat: ${customerAddress}

Total Harga Estimasi: $${flower.price * quantity}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-[#121212] py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Back Button */}
        <Link href="/shop" className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Kembali ke Koleksi
        </Link>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 flex items-start justify-center">
            <div className="sticky top-24 w-full flex items-center justify-center bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent dark:from-black/20 dark:to-transparent z-0 pointer-events-none"></div>
              <img 
                src={flower.image} 
                alt={flower.name} 
                className="relative z-10 w-full max-w-md object-contain hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Right Column: Details & Selections */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              {flower.name}
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
              ${flower.price}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {flower.description}
            </p>

            {/* Isi Bouquet */}
            <div className="mb-8 p-5 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-2xl">
              <h3 className="font-semibold text-black dark:text-white mb-3">Detail Isi Bouquet:</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                {bouquetContents.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* OPSI PRODUK */}
            <div className="mb-10 space-y-6 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-black dark:text-white mb-4">1. Opsi Bouquet</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Ukuran / Katalog</h3>
                <div className="flex flex-wrap gap-2">
                  {catalogs.map((catalog) => (
                    <button
                      key={catalog}
                      onClick={() => setSelectedCatalog(catalog)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all
                        ${selectedCatalog === catalog 
                          ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" 
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 dark:bg-[#1a1a1a] dark:text-gray-300 dark:border-gray-700"
                        }
                      `}
                    >
                      {catalog}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Pilihan Warna Bunga</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all
                        ${selectedColor === color 
                          ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" 
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 dark:bg-[#1a1a1a] dark:text-gray-300 dark:border-gray-700"
                        }
                      `}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Pilihan Wrapping</h3>
                <div className="flex flex-wrap gap-2">
                  {wrappings.map((wrap) => (
                    <button
                      key={wrap}
                      onClick={() => setSelectedWrapping(wrap)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all
                        ${selectedWrapping === wrap 
                          ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white" 
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 dark:bg-[#1a1a1a] dark:text-gray-300 dark:border-gray-700"
                        }
                      `}
                    >
                      {wrap}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM DATA PEMESAN */}
            <div className="mb-10 space-y-6 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h2 className="text-xl font-bold text-black dark:text-white mb-4">2. Data Pemesan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap *</label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">No. WhatsApp *</label>
                  <input 
                    type="tel" 
                    value={customerWa}
                    onChange={(e) => setCustomerWa(e.target.value)}
                    placeholder="Contoh: 08123456789"
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Jumlah *</label>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tanggal Dibutuhkan *</label>
                  <input 
                    type="date" 
                    value={dateNeeded}
                    onChange={(e) => setDateNeeded(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Alamat Pengiriman *</label>
                <textarea 
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Jalan, RT/RW, Kecamatan, Kota..."
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Kartu Ucapan (Opsional)</label>
                <textarea
                  value={greetingCard}
                  onChange={(e) => setGreetingCard(e.target.value)}
                  placeholder="Tulis pesan untuk penerima di sini..."
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none min-h-[80px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Catatan Pesanan (Opsional)</label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Ada request khusus? Tulis di sini..."
                  className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none min-h-[80px]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sticky bottom-4 z-20 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Total Harga Estimasi</span>
                <span className="text-2xl font-bold text-black dark:text-white">${flower.price * quantity}</span>
              </div>
              <button 
                onClick={handleOrder}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pesan via WhatsApp
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
