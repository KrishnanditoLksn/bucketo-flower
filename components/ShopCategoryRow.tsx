import Link from "next/link";
import React from "react";

interface ShopCategoryRowProps {
  title: string;
  imageUrl: string;
  href: string;
  imageBgColor?: string;
  imageDarkBgColor?: string;
  reverse?: boolean;
}

export default function ShopCategoryRow({
  title,
  imageUrl,
  href,
  imageBgColor = "bg-[#e8e9eb]",
  imageDarkBgColor = "dark:bg-[#222]",
  reverse = false,
}: ShopCategoryRowProps) {
  // SVG Arrow Right
  const arrowRight = (
    <svg 
      className="w-6 h-6 transition-transform group-hover:translate-x-2" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  // SVG Arrow Left
  const arrowLeft = (
    <svg 
      className="w-6 h-6 transition-transform group-hover:-translate-x-2" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
  );

  const textSection = (
    <div className={`w-full sm:w-1/2 flex flex-col items-center justify-center relative p-8 sm:p-12 group-hover:bg-gray-50 dark:group-hover:bg-white/5 transition-colors ${reverse ? "" : "border-b sm:border-b-0 sm:border-r border-black dark:border-white/20"}`}>
      <h2 className="text-4xl lg:text-5xl font-medium text-center">{title}</h2>
      
      <div className={`absolute bottom-8 ${reverse ? 'right-8 sm:right-12' : 'left-8 sm:left-12'} flex items-center gap-2 font-medium text-lg`}>
        {reverse && arrowLeft}
        Shop now 
        {!reverse && arrowRight}
      </div>
    </div>
  );

  const imageSection = (
    <div className={`w-full sm:w-1/2 flex items-center justify-center p-8 ${imageBgColor} ${imageDarkBgColor} overflow-hidden ${reverse ? "border-t sm:border-t-0 sm:border-r border-black dark:border-white/20" : ""}`}>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full max-w-[250px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );

  return (
    <Link 
      href={href} 
      className={`group flex flex-col sm:flex-row w-full flex-1 min-h-[350px] ${!reverse ? "border-b border-black dark:border-white/20" : ""}`}
    >
      {reverse ? (
        <>
          {imageSection}
          {textSection}
        </>
      ) : (
        <>
          {textSection}
          {imageSection}
        </>
      )}
    </Link>
  );
}
