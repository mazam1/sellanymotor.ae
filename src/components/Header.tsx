"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
    ? "bg-white w-full z-50 header-fixed shadow-sm" 
    : "bg-white w-full z-50";

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="SellAnyMotor Home">
          <div className="flex items-center">
            <span className="text-lg font-bold">SellAnyMotor</span>
          </div>
        </Link>
        
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm font-medium text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      active ? "font-semibold" : "hover:underline"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center p-2 text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <MobileMenu open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4 px-4 py-6 bg-white">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-base text-black transition-colors ${active ? "font-semibold" : "hover:underline"}`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            aria-label="Close menu"
            className="mt-4 inline-flex items-center justify-center p-2 text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </MobileMenu>
    </header>
  );
}
