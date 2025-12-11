import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Car, Clock, DollarSign, CheckCircle, MapPin, BadgeCheck, Wallet, Building2, Truck, Bike } from "lucide-react";
import ParallaxParticles from "@/src/components/ParallaxParticles";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 to-slate-900 text-white overflow-hidden">
        <ParallaxParticles />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Sell Your Car
              <span className="block text-amber-400 mt-2">Get Best Price</span>
            </h1>
            <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
              Professional car buying service with 15+ years of experience. Get free
              valuation, expert inspection, and instant payment for your vehicle in
              just 30 minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link
                href="/contact"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center rounded-md bg-green-500 text-white w-full sm:w-auto px-6 py-4 text-base font-semibold shadow-lg hover:bg-green-600 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-4 w-full sm:w-auto hover:bg-white/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Form Section */}
      <section className="py-16 bg-gray-100 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">
                Get Free Car Valuation
                <span className="block text-blue-600 dark:text-blue-400 mt-2">Expert Assessment</span>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Fill out our comprehensive form below and our experienced team will contact
                you within 24 hours to discuss your car's value and schedule a free inspection
              </p>
            </div>

            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">1</div>
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter your name *" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email *" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number *" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent">
                      <option value="">Select city *</option>
                      <option value="dubai">Dubai</option>
                      <option value="abudhabi">Abu Dhabi</option>
                      <option value="sharjah">Sharjah</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">2</div>
                  <h3 className="text-xl font-semibold">Vehicle Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent">
                      <option value="">Select make</option>
                      <option value="bmw">BMW</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="toyota">Toyota</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent">
                      <option value="">Select model</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent">
                      <option value="">Choose year</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent">
                      <option value="">Select condition</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">3</div>
                  <h3 className="text-xl font-semibold">Additional Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent">
                      <option value="">Choose color</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                      <option value="silver">Silver</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Car mileage (miles)" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="leather" className="w-4 h-4" />
                    <label htmlFor="leather" className="text-sm">Leather Seats</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="sunroof" className="w-4 h-4" />
                    <label htmlFor="sunroof" className="text-sm">Sunroof</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="alloy" className="w-4 h-4" />
                    <label htmlFor="alloy" className="text-sm">Alloy Wheels</label>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto md:px-12 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-all duration-200"
              >
                Request Free Valuation & Inspection
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Dubai RTA Transfer & Documentation */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Dubai RTA Transfer & Documentation</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Seamless paperwork handled by our specialists. We coordinate with RTA and local banks so you
              can complete the sale in minutes with full transparency and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-left">
              <div className="flex items-center mb-3">
                <BadgeCheck className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Instant RTA Transfer</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Title transfer, vehicle deregistration, and new ownership—all processed correctly at RTA Dubai.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-left">
              <div className="flex items-center mb-3">
                <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Bank Mortgage Release</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We coordinate with UAE banks to clear any outstanding loans and issue release letters fast.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-left">
              <div className="flex items-center mb-3">
                <Wallet className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Fines & Salik Settlement</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Support with clearing traffic fines and Salik balance to enable a clean, quick sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Home Pickup Across UAE */}
      <section className="py-16 bg-gray-100 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Free Home Pickup Across UAE</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We come to you—home or office. Flexible slots and dedicated coordinators to make selling easy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-amber-500 mr-2" />
                <h3 className="text-lg font-semibold">Dubai</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Same-day pickup in most areas, 9am–9pm.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-amber-500 mr-2" />
                <h3 className="text-lg font-semibold">Abu Dhabi</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Next-day pickup, extended evening windows.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-3">
                <MapPin className="h-6 w-6 text-amber-500 mr-2" />
                <h3 className="text-lg font-semibold">Sharjah</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Flexible scheduling with WhatsApp confirmations.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-amber-500 text-white px-6 py-3 font-semibold hover:bg-amber-600 transition-all duration-200">
              Schedule Free Pickup
            </Link>
          </div>
        </div>
      </section>

      {/* We Buy Any Motor Types */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">We Buy Any Motor</h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400">
            Cars, SUVs, motorcycles, vans, and commercial vehicles—GCC specs welcome. Any condition.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-medium">Sedan & Hatchback</div>
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-medium">SUV & 4x4</div>
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Bike className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-medium">Motorcycle</div>
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-medium">Vans</div>
            </div>
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-sm font-medium">Commercial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100 dark:bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Sellanymotor for Selling Your Car</h2>
          <p className="max-w-3xl mx-auto mb-12">
            Sellanymotor has been the trusted choice for car sellers nationwide for over 15 years. We
            specialize in providing fair, transparent, and hassle-free car buying services. Our experienced
            team of automotive professionals ensures you receive the maximum value for your vehicle
            through comprehensive market analysis, expert inspection, and competitive pricing. Whether
            you're selling a luxury vehicle, family car, or commercial vehicle, our personalized approach
            guarantees satisfaction and peace of mind throughout the entire process.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted & Secure</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Licensed car buyers with full insurance coverage and secure transaction processes protecting every sale
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast 30-Minute Process</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Complete evaluation and payment in just 30 minutes with our streamlined professional service
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hassle-Free Experience</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                No paperwork complications, hidden fees, or complicated procedures - just honest, transparent deals
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M12 16v.01"></path>
                  <path d="M6 12h12"></path>
                  <path d="M12 8v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Cash Payment</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get paid immediately on the spot via cash, certified check, or instant bank transfer options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Customer Success Stories</h2>
          <p className="max-w-2xl mx-auto mb-12">
            Real experiences from thousands of satisfied customers who chose Sellanymotor for
            their car selling journey
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold">Ahmed Alrashidi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Planning Consultant</div>
                </div>
              </div>
              <div className="flex text-amber-500 mb-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">5/5</span>
              </div>
              <p className="text-sm mb-4">
                "I was skeptical about selling my 2019 BMW X3 online, but Sellanymotor made it
                incredibly easy. The valuation was spot-on with market rates, and they handled all
                the paper work. Got AED 185,000 for my car - exactly what I was hoping for!"
              </p>
              <div className="flex justify-between items-center text-sm">
                <div>2019 BMW X3 xDrive30i</div>
                <div className="font-semibold text-amber-500">AED 185,000</div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                  P
                </div>
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Marketing Specialist</div>
                </div>
              </div>
              <div className="flex text-amber-500 mb-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">4.5/5</span>
              </div>
              <p className="text-sm mb-4">
                "Moving back to India meant I had to sell my Toyota Camry quickly. Sellanymotor not
                only gave me a fair price but also completed the transaction in just 2 days.
                Their team was professional and transparent throughout the process."
              </p>
              <div className="flex justify-between items-center text-sm">
                <div>2020 Toyota Camry SE</div>
                <div className="font-semibold text-amber-500">AED 72,000</div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Automotive Design Professional</div>
                </div>
              </div>
              <div className="flex text-amber-500 mb-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
                <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">5/5</span>
              </div>
              <p className="text-sm mb-4">
                "After my Audi A4 had some engine issues, I thought I'd get a terrible price for
                it. Sellanymotor surprised me by offering AED 88,000 even with the mechanical
                problems. They truly buy cars in any condition!"
              </p>
              <div className="flex justify-between items-center text-sm">
                <div>2018 Audi A4 Quattro</div>
                <div className="font-semibold text-amber-500">AED 88,000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Ready to Sell Your Car?
                <span className="block text-amber-400 mt-2">Get Started Today!</span>
              </h2>
              <p className="mb-6">
                Join thousands of satisfied customers who have trusted
                Sellanymotor for fair, fast, and professional car buying services.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6z" />
                    </svg>
                  </div>
                  <span className="font-medium">Market-Leading Prices</span>
                  <span className="text-sm text-blue-200">Get up to 10% more than competitors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <span className="font-medium">Trusted by 50,000+</span>
                  <span className="text-sm text-blue-200">Customers nationwide</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6z" />
                    </svg>
                  </div>
                  <span className="font-medium">Award-Winning Service</span>
                  <span className="text-sm text-blue-200">Rated #1 car buying platform</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white">
                      <option value="">Car Model</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      placeholder="Tell us about your car..." 
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
