'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Apex Auto Specialists</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-darkGray hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-darkGray hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#process" className="text-darkGray hover:text-primary transition-colors">
            Our Process
          </Link>
          <Link href="/about" className="text-darkGray hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-darkGray hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-darkGray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-darkGray hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-darkGray hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/#process" 
              className="text-darkGray hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link 
              href="/about" 
              className="text-darkGray hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-darkGray hover:text-primary transition-colors px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary mx-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;