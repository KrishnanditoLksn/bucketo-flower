import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-[#121212] text-white text-[13px] tracking-widest font-medium uppercase py-3 px-6 w-full hover:bg-black/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
