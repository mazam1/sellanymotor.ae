import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">SellanyMotor</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Professional motor selling and services. We help you buy, sell,
            and service vehicles with confidence.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Follow Us</h4>
          <div className="mt-3 flex items-center gap-3">
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} SellanyMotor. All rights reserved.
      </div>
    </footer>
  );
}