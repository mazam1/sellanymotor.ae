"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Car } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to show/hide fixed header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled 
    ? "bg-black dark:bg-black text-white w-full z-50 header-fixed" 
    : "bg-black dark:bg-black text-white w-full z-50";

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-lg font-bold text-white">Sell AnyMotor</span>
          </div>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          
          <div className="hidden md:flex items-center ml-4">
            <ThemeToggle />
          </div>
          
          <div className="hidden md:flex items-center ml-4">
            <div className="bg-gray-600 text-white rounded-md px-4 py-2 flex items-center">
              <Car className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Auto</span>
            </div>
          </div>
          
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center p-2 text-white"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <MobileMenu open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4 px-4 py-6 bg-black dark:bg-black text-white">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-base ${active ? "font-semibold text-white" : "text-gray-300"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-4 flex flex-col gap-4">
            <ThemeToggle />
            <div className="bg-gray-600 text-white rounded-md px-4 py-2 flex items-center">
              <Car className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Auto</span>
            </div>
          </div>
          <button
            aria-label="Close menu"
            className="mt-4 inline-flex items-center justify-center p-2 text-white"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </MobileMenu>
    </header>
  );
}