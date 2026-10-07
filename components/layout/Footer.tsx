import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
// import { Instagram, Facebook, Twitter, Send } from "lucide-react";

const FooterColumn = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 md:p-8 flex flex-col ${className}`}>
    {children}
  </div>
);

const FooterLinkList = ({ title, links }: { title: string, links: string[] }) => (
  <div>
    <h3 className="text-gray-400 dark:text-gray-500 text-lg mb-4 transition-colors">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((item) => (
        <li key={item}>
          <Link href="#" className="text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const FooterContactItem = ({ label, value }: { label: string, value: string }) => (
  <div>
    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 transition-colors">{label}</p>
    <p className="text-sm text-black dark:text-white font-medium transition-colors">{value}</p>
  </div>
);

// --- Main Footer Component ---

export default function Footer() {
  return (
    <footer className="w-full border-t border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-black">
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-gray-800">
        
        {/* Column 1 */}
        <FooterColumn className="justify-between h-full">
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address
          </p>
          <div className="flex flex-col gap-3 mt-auto">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="border border-gray-300 dark:border-gray-700 p-3 text-sm focus:outline-none focus:border-black dark:focus:border-white bg-transparent dark:text-white w-full transition-colors"
            />
            <Button className="w-full text-white bg-black dark:bg-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-200 uppercase tracking-widest text-xs py-4 transition-colors">
              Remind
            </Button>
          </div>
        </FooterColumn>

        {/* Column 2 */}
        <FooterColumn className="gap-6">
          <div>
            <h3 className="text-gray-400 dark:text-gray-500 text-lg mb-4 transition-colors">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <FooterContactItem label="Address" value="15/4 Khreshchatyk Street, Kyiv" />
              <FooterContactItem label="Phone" value="+380980099777" />
              <FooterContactItem label="General Enquiry:" value="Kiev.Florist.Studio@gmail.com" />
            </div>
          </div>
          
          <div className="mt-auto pt-4">
            <h3 className="text-gray-400 dark:text-gray-500 text-lg mb-4 transition-colors">Follow Us</h3>
            <div className="flex gap-4 items-center">
              {/* <Link href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.436 2.981 7.436 6.969 0 4.156-2.623 7.502-6.262 7.502-1.22 0-2.368-.636-2.763-1.386l-.754 2.878c-.274 1.011-.99 2.279-1.48 3.056 1.144.333 2.348.514 3.593.514 6.621 0 11.988-5.368 11.988-11.988 0-6.62-5.367-11.987-11.988-11.987z"/>
                </svg>
              </Link>
              <Link href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Twitter size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <Send size={20} strokeWidth={1.5} />
              </Link> */}
            </div>
          </div>
        </FooterColumn>

        {/* Column 3 */}
        <FooterColumn className="gap-6">
          <FooterLinkList 
            title="Shop" 
            links={["All Products", "Fresh Flowers", "Dried Flowers", "Live Plants", "Designer Vases", "Aroma Candles", "Freshener Diffuser"]} 
          />
          <div className="mt-4">
            <FooterLinkList 
              title="Service" 
              links={["Flower Subcription", "Wedding & Event Decor"]} 
            />
          </div>
        </FooterColumn>

        {/* Column 4 */}
        <FooterColumn>
          <FooterLinkList 
            title="About Us" 
            links={["Our story", "Blog", "Shipping & returns", "Terms & conditions", "Privacy policy"]} 
          />
        </FooterColumn>
        
      </div>
    </footer>
  );
}