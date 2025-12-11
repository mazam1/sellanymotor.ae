import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">SellanyMotor</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Professional motor selling and services. We help you buy, sell,
            and service vehicles with confidence.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">About Us</Link></li>
            <li><Link href="/services" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Services</Link></li>
            <li><Link href="/blogs" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/faq" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">FAQ</Link></li>
            <li><Link href="/docs" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Documentation</Link></li>
            <li><Link href="/privacy" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow Us</h4>
          <div className="mt-3 flex items-center gap-3 text-muted-foreground">
            <Link href="#" aria-label="Facebook" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Twitter" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} SellanyMotor. All rights reserved.
      </div>
    </footer>
  );
}