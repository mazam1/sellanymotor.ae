import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, Car, Clock, DollarSign, CheckCircle, User } from "lucide-react";
import ParallaxParticles from "../src/components/ParallaxParticles";
import ImageWithFallback from "../src/components/ImageWithFallback";
import VehicleSearch from "../src/components/VehicleSearch";
import FinancingCalculator from "@/src/components/FinancingCalculator";

export const metadata = {
  title: "SellAnyMotor | Sell Your Car for the Best Price",
  description:
    "Professional car buying service with free valuation, expert inspection, and instant payment in 30 minutes.",
  keywords: [
    "sell your car",
    "car valuation",
    "instant car payment",
    "car inspection",
    "sellanymotor",
  ],
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
        <ParallaxParticles />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto z-10">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Sell Your Car
              <span className="block text-accent mt-2">Get Best Price</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional car buying service with 15+ years of experience. Get free
              valuation, expert inspection, and instant payment for your vehicle in
              just 30 minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Link
                href="/contact"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground w-full sm:w-auto px-6 py-4 text-base font-semibold shadow-lg hover:brightness-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-4 w-full sm:w-auto hover:bg-gray-800 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card text-card-foreground rounded-xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">
                Get Free Car Valuation
                <span className="block text-primary mt-2">Expert Assessment</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Fill out our comprehensive form below and our experienced team will contact
                you within 24 hours to discuss your car's value and schedule a free inspection
              </p>
            </div>

            <form className="space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</div>
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter your name *" 
                      className="w-full px-4 py-3 rounded-md border border-border bg-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email *" 
                      className="w-full px-4 py-3 rounded-md border border-border bg-transparent"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number *" 
                      className="w-full px-4 py-3 rounded-md border border-border bg-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-transparent">
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
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</div>
                  <h3 className="text-xl font-semibold">Vehicle Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-transparent">
                      <option value="">Select make</option>
                      <option value="bmw">BMW</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="toyota">Toyota</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-transparent">
                      <option value="">Select model</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-transparent">
                      <option value="">Choose year</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-transparent">
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
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</div>
                  <h3 className="text-xl font-semibold">Additional Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-transparent">
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
                      className="w-full px-4 py-3 rounded-md border border-border bg-transparent"
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
                className="w-full md:w-auto md:px-12 py-4 bg-accent text-accent-foreground font-semibold rounded-md flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-95"
              >
                Request Free Valuation & Inspection
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Dubai Premium Vehicle Showcase */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Dubai Premium Vehicle Showcase</h2>
            <p className="text-muted-foreground mt-2">Curated luxury and performance models popular across Dubai.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { brand: "Rolls‑Royce", model: "Cullinan", price: "AED 1,400,000", img: "https://unsplash.com/photos/IYUgCC3Ci-o/download?force=true&w=1280" },
              { brand: "Mercedes‑AMG", model: "G63", price: "AED 950,000", img: "https://unsplash.com/photos/5CsHwC0AuJs/download?force=true&w=1280" },
              { brand: "Bentley", model: "Continental GT", price: "AED 900,000", img: "https://unsplash.com/photos/ptw1UyOXguA/download?force=true&w=1280" },
              { brand: "Lamborghini", model: "Urus", price: "AED 850,000", img: "https://unsplash.com/photos/hVld5nXY-Ok/download?force=true&w=1280" },
              { brand: "Porsche", model: "911 Turbo S", price: "AED 1,100,000", img: "https://unsplash.com/photos/HfONwykj7tE/download?force=true&w=1280" },
              { brand: "Range Rover", model: "Autobiography", price: "AED 800,000", img: "https://unsplash.com/photos/CfCsO9QIxLY/download?force=true&w=1280" },
            ].map((car, i) => (
              <div key={`${car.brand}-${i}`} className="group bg-card rounded-xl overflow-hidden shadow-sm ring-1 ring-border">
                <div className="relative aspect-[16/9] bg-muted">
                  <ImageWithFallback
                    src={car.img}
                    alt={`${car.brand} ${car.model}`}
                    fallback="/next.svg"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-xs ring-1 ring-border">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Verified GCC Specs</span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{car.brand} {car.model}</h3>
                    <p className="text-sm text-muted-foreground">Premium condition • Dubai</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="font-semibold">{car.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai Vehicle Search & Filter */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Find Vehicles Across Dubai</h2>
            <p className="text-muted-foreground mt-2">Filter by brand, model and popular areas like Marina, Downtown, JLT and Palm.</p>
          </div>
          <VehicleSearch />
        </div>
      </section>

      {/* Sell Your Car Fast CTA (Dubai) */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-2xl p-8 md:p-10 ring-1 ring-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Sell Your Car Fast in Dubai</h2>
                <p className="text-muted-foreground mt-3">Get a guaranteed offer and complete RTA transfer the same day.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {["Instant bank transfer", "Free pickup across Dubai", "RTA transfer assistance", "GCC spec and supercars welcomed"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold">Average completion time: 30–60 minutes</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">From valuation to payout, guided by our Dubai team.</p>
                  <Link href="#valuation" className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Dealership Network */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Luxury Dealership Network</h2>
          <p className="max-w-2xl mx-auto mb-8">We collaborate with leading luxury dealership networks and premium buyers in Dubai to secure top offers for your vehicle.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Luxury Network", "Premium Buyer", "Certified Partner", "Elite Autos", "Signature Motors", "Prestige Garage"].map((partner, i) => (
              <div key={i} className="flex items-center justify-center h-20 rounded-xl bg-muted text-sm font-medium text-muted-foreground ring-1 ring-border">
                {partner}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">Names are illustrative placeholders. Replace with confirmed partners when available.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted">
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
            <div className="bg-card p-6 rounded-xl">
              <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted & Secure</h3>
              <p className="text-muted-foreground text-sm">
                Licensed car buyers with full insurance coverage and secure transaction processes protecting every sale
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast 30-Minute Process</h3>
              <p className="text-muted-foreground text-sm">
                Complete evaluation and payment in just 30 minutes with our streamlined professional service
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hassle-Free Experience</h3>
              <p className="text-muted-foreground text-sm">
                No paperwork complications, hidden fees, or complicated procedures - just honest, transparent deals
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl">
              <div className="bg-muted w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M12 16v.01"></path>
                  <path d="M6 12h12"></path>
                  <path d="M12 8v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Cash Payment</h3>
              <p className="text-muted-foreground text-sm">
                Get paid immediately on the spot via cash, certified check, or instant bank transfer options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Testimonials */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Trusted by Dubai Clients</h2>
          <p className="max-w-2xl mx-auto mb-12">Stories from sellers across Dubai Marina, Downtown, Business Bay, JLT and Palm.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Sold my G63 within a day. Seamless RTA transfer and instant payment.", name: "Saeed", area: "Dubai Marina" },
              { quote: "Professional team and fair offer for my Bentley. Highly recommended.", name: "Noura", area: "Downtown Dubai" },
              { quote: "They picked up from JLT and handled everything—super convenient!", name: "Yusuf", area: "JLT" },
            ].map((t, i) => (
              <div key={i} className="bg-card p-6 rounded-xl text-left">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mr-3">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.area}</div>
                  </div>
                </div>
                <p className="text-sm mb-4">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options Calculator */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">UAE Financing Options Calculator</h2>
            <p className="text-muted-foreground mt-2">Estimate monthly payments in AED with typical local terms and rates.</p>
          </div>
          <FinancingCalculator />
          <p className="text-xs text-muted-foreground text-center mt-4">Calculated values are estimates. Final terms subject to bank approval.</p>
        </div>
      </section>

      {/* Contact Options Section (Custom) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Contact Options</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to reach us. We respond quickly and professionally.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/contact" className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-3">💬</div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-muted-foreground">Quick chat for instant replies</div>
            </Link>
            <Link href="/contact" className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-3">📞</div>
              <div className="font-semibold">Phone</div>
              <div className="text-sm text-muted-foreground">Speak with our experts</div>
            </Link>
            <Link href="/contact" className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mb-3">✉️</div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">Detailed queries welcomed</div>
            </Link>
            <Link href="/contact" className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">📍</div>
              <div className="font-semibold">Visit</div>
              <div className="text-sm text-muted-foreground">Come to our office</div>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <Script id="jsonld-organization" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'SellAnyMotor',
          url: 'https://sellanymotor.example.com',
          logo: '/icon.svg',
          sameAs: [
            'https://www.facebook.com/sellanymotor',
            'https://www.instagram.com/sellanymotor',
          ],
          contactPoint: [{
            '@type': 'ContactPoint',
            telephone: '+971-000-0000',
            contactType: 'customer service',
            areaServed: 'AE',
            availableLanguage: ['en']
          }]
        })}
      </Script>
      <Script id="jsonld-website" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SellAnyMotor',
          url: 'https://sellanymotor.example.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://sellanymotor.example.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        })}
      </Script>
    </>
  );
}
