import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Apex Auto Specialists
            </Link>
            <p className="mt-4 text-mediumGray">
              Expert car interior restoration that makes your car feel new again.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-mediumGray hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-mediumGray hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-mediumGray hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-mediumGray hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-mediumGray hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#headliner" className="text-mediumGray hover:text-white transition-colors">
                  Headliner Repair
                </Link>
              </li>
              <li>
                <Link href="/services#upholstery" className="text-mediumGray hover:text-white transition-colors">
                  Seat Upholstery
                </Link>
              </li>
              <li>
                <Link href="/services#dashboard" className="text-mediumGray hover:text-white transition-colors">
                  Dashboard Repair
                </Link>
              </li>
              <li>
                <Link href="/services#trim" className="text-mediumGray hover:text-white transition-colors">
                  Interior Trim Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-mediumGray">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center text-mediumGray">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@apexautospecialists.com" className="hover:text-white transition-colors">info@apexautospecialists.com</a>
              </li>
              <li className="flex items-center text-mediumGray">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-mediumGray">
          <p>&copy; {new Date().getFullYear()} Apex Auto Specialists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;