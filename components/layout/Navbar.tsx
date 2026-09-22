import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300 dark:border-white/20 bg-white dark:bg-black text-black dark:text-white transition-colors">
      <div className="flex h-16 w-full items-center">
        {/* Shop Link */}
        <div className="flex h-full items-center justify-center border-r border-gray-300 dark:border-white/20 px-8">
          <Link href="/shop" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Shop
          </Link>
        </div>

        {/* Contact Link */}
        <div className="flex h-full items-center justify-center border-r border-gray-300 dark:border-white/20 px-8">
          <Link href="/contact" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* Middle Empty Space */}
        <div className="flex-1 h-full border-r border-gray-300 dark:border-white/20"></div>

        {/* Theme Toggle & Cart Link */}
        <div className="flex h-full items-center justify-center gap-4 px-8">
          <ThemeToggle />
          <Link href="/cart" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
