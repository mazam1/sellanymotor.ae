import ImageWithFallback from "../../src/components/ImageWithFallback";
import Link from "next/link";
import { CheckCircle, Star, MapPin, Clock, Shield, Award, Zap } from "lucide-react";
import ParallaxParticles from "../../src/components/ParallaxParticles";

export const metadata = {
  title: "Premium Services | SellAnyMotor Dubai",
  description: "Experience SellAnyMotor's premium vehicle selling services in Dubai - professional valuation, inspection, instant payment, and free pickup.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-secondary via-black to-[#00204a] text-secondary-foreground overflow-hidden">
        <ParallaxParticles />
        <div className="absolute inset-0 bg-[url('/dubai-skyline-silhouette.svg')] bg-bottom bg-no-repeat opacity-20 bg-contain"></div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 rounded-full">
            <span className="text-brand-gold font-medium">Dubai's Premier Motor Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Premium <span className="text-brand-gold">Services</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience unparalleled luxury and convenience with our premium motor services tailored for Dubai's discerning clientele.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-brand-gold hover:bg-brand-gold/90 text-black font-medium rounded-full transition-all transform hover:scale-105">
              Get Started
            </Link>
            <Link href="#core-services" className="px-8 py-3 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-medium rounded-full transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="core-services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold">Exclusive Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored premium solutions for luxury vehicle owners in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Premium Vehicle Valuation */}
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden group hover:border-brand-gold/50 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-amber-500 text-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold">Premium Vehicle Valuation</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Receive an expert assessment of your luxury vehicle's market value by Dubai's leading automotive specialists
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Dubai market-specific analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Certified luxury vehicle experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Comprehensive valuation report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Zero obligation assessment</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-5 flex justify-between items-center bg-card/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm font-medium">Available across Dubai</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>

            {/* Expert Motor Inspection */}
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden group hover:border-brand-gold/50 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-amber-500 text-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold">Expert Motor Inspection</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Comprehensive assessment by Dubai's elite automotive technicians using advanced diagnostic equipment
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>175+ point inspection process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Advanced diagnostic technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Luxury vehicle specialization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Detailed digital report</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-5 flex justify-between items-center bg-card/50">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm font-medium">Same-day service available</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Premium Payment */}
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden group hover:border-brand-gold/50 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-amber-500 text-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold">Instant Premium Payment</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Receive immediate payment through your preferred method after accepting our competitive market offer
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Immediate bank transfers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Multiple payment options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Secure transaction guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>No hidden fees or deductions</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-5 flex justify-between items-center bg-card/50">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm font-medium">100% Secure Transactions</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>

            {/* VIP Vehicle Collection */}
            <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden group hover:border-brand-gold/50 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-amber-500 text-black rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
                  <h3 className="text-2xl font-semibold">VIP Vehicle Collection</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  Complimentary premium vehicle pickup service from any location in Dubai with white-glove handling
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Dubai-wide collection service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Specialized transport vehicles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Trained luxury car handlers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-gold" />
                    <span>Premium insurance coverage</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-5 flex justify-between items-center bg-card/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm font-medium">All Dubai Emirates</span>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold">The Dubai Premium Process</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined luxury service experience designed for Dubai's discerning motorists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-card rounded-2xl p-8 relative border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-brand-gold to-amber-500 rounded-full flex items-center justify-center text-black font-bold">1</div>
              <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Request Premium Valuation</h3>
              <p className="text-muted-foreground">
                Complete our exclusive valuation form or call our Dubai concierge service
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-2xl p-8 relative border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-brand-gold to-amber-500 rounded-full flex items-center justify-center text-black font-bold">2</div>
              <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0v5Z"/><path d="M5 14h14"/><path d="M9 16v4"/><path d="M15 16v4"/><path d="M9 6V4"/><path d="M15 6V4"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Dubai Inspection</h3>
              <p className="text-muted-foreground">
                Our Dubai-based specialists conduct a comprehensive 175+ point assessment
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-2xl p-8 relative border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-brand-gold to-amber-500 rounded-full flex items-center justify-center text-black font-bold">3</div>
              <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Market Offer</h3>
              <p className="text-muted-foreground">
                Receive a competitive offer based on Dubai's luxury vehicle market
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-card rounded-2xl p-8 relative border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-brand-gold to-amber-500 rounded-full flex items-center justify-center text-black font-bold">4</div>
              <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">VIP Transaction</h3>
              <p className="text-muted-foreground">
                Complete the sale with instant payment and white-glove service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles We Buy Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold">Dubai's Premium Vehicle Collection</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We purchase all types of luxury and standard vehicles at competitive Dubai market rates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Luxury Vehicles */}
            <div className="relative rounded-2xl overflow-hidden h-80 group shadow-xl">
              <div className="absolute inset-0 bg-[url('/dubai-luxury-cars.svg')] bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Luxury Vehicles</h3>
                <p className="text-white/80">Premium cars and high-end models from top manufacturers</p>
                <div className="mt-4 inline-block">
                  <span className="text-brand-gold text-sm font-medium">Rolls-Royce • Bentley • Mercedes</span>
                </div>
              </div>
            </div>

            {/* Family Vehicles */}
            <div className="relative rounded-2xl overflow-hidden h-80 group shadow-xl">
              <div className="absolute inset-0 bg-[url('/dubai-family-cars.svg')] bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Family Vehicles</h3>
                <p className="text-white/80">Premium SUVs and family-friendly luxury cars</p>
                <div className="mt-4 inline-block">
                  <span className="text-brand-gold text-sm font-medium">Range Rover • BMW • Lexus</span>
                </div>
              </div>
            </div>

            {/* Sports Cars */}
            <div className="relative rounded-2xl overflow-hidden h-80 group shadow-xl">
              <div className="absolute inset-0 bg-[url('/dubai-sports-cars.svg')] bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Sports Cars</h3>
                <p className="text-white/80">High-performance and exotic sports vehicles</p>
                <div className="mt-4 inline-block">
                  <span className="text-brand-gold text-sm font-medium">Ferrari • Lamborghini • Porsche</span>
                </div>
              </div>
            </div>

            {/* Standard Vehicles */}
            <div className="relative rounded-2xl overflow-hidden h-80 group shadow-xl">
              <div className="absolute inset-0 bg-[url('/dubai-standard-cars.svg')] bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Standard Vehicles</h3>
                <p className="text-white/80">Quality sedans, hatchbacks, and compact cars</p>
                <div className="mt-4 inline-block">
                  <span className="text-brand-gold text-sm font-medium">Toyota • Honda • Nissan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold">Exclusive Dubai Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional premium services tailored for Dubai's luxury vehicle owners
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Damage Assessment */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-gold/10 to-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M12 9v2m0 4h.01"/><path d="M5.07 19H19a2 2 0 0 0 1.75-2.97L13.76 4.69a2 2 0 0 0-3.51 0L3.26 16.03a2 2 0 0 0 1.75 2.97"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Damage Assessment</h3>
              <p className="text-muted-foreground">
                Specialized evaluation for luxury vehicles with accident history or mechanical issues
              </p>
            </div>

            {/* Title & Documentation */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-gold/10 to-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dubai Documentation Service</h3>
              <p className="text-muted-foreground">
                Complete handling of all RTA paperwork and UAE title transfer processes
              </p>
            </div>

            {/* 24/7 Customer Support */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-gold/10 to-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">VIP Customer Concierge</h3>
              <p className="text-muted-foreground">
                Dedicated 24/7 Arabic and English-speaking support for Dubai clients
              </p>
            </div>

            {/* Market Analysis */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:border-brand-gold/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-gold/10 to-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dubai Market Intelligence</h3>
              <p className="text-muted-foreground">
                Specialized UAE market analysis ensuring the most competitive pricing in Dubai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-black to-[#00204a] text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/dubai-skyline-silhouette.svg')] bg-bottom bg-no-repeat opacity-10 bg-contain"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold">Ready for the Premium Dubai Experience?</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Experience the luxury of SellAnyMotor's premium vehicle buying service in Dubai</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <Link
              href="/valuation"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-gradient-to-r from-brand-gold to-amber-400 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">Get Premium Valuation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-transparent border border-white/30 rounded-full hover:bg-white/10 hover:shadow-lg transition-all duration-300"
            >
              <span className="mr-2">Contact Our Dubai Team</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold">Dubai's Most Trusted Service</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear what our satisfied clients from across Dubai have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-brand-gold" />
                  ))}
                </div>
              </div>
              <p className="text-lg mb-6 italic">
                "The premium service was exceptional. They offered me more than any other dealer in Dubai for my Range Rover, and the process was seamless."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Mohammed A.</h4>
                  <p className="text-sm text-muted-foreground">Dubai Marina</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-brand-gold" />
                  ))}
                </div>
              </div>
              <p className="text-lg mb-6 italic">
                "I was impressed by their professionalism and attention to detail. The VIP collection service made selling my Mercedes completely hassle-free."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah L.</h4>
                  <p className="text-sm text-muted-foreground">Downtown Dubai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-brand-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-brand-gold" />
                  ))}
                </div>
              </div>
              <p className="text-lg mb-6 italic">
                "Their market knowledge is unmatched. They understood the value of my limited edition Porsche and offered a price that reflected its true worth in Dubai."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold">Khalid R.</h4>
                  <p className="text-sm text-muted-foreground">Palm Jumeirah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-2">
              <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our premium Dubai vehicle buying service
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/></svg>
                </span>
                How long does the valuation process take?
              </h3>
              <p className="text-muted-foreground pl-11">
                Our premium valuation process typically takes 30 minutes or less. Our Dubai specialists use advanced technology to provide accurate valuations quickly, respecting your valuable time.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/></svg>
                </span>
                What documents do I need to sell my vehicle?
              </h3>
              <p className="text-muted-foreground pl-11">
                You'll need your Emirates ID, vehicle registration card, and a valid UAE driving license. Our Dubai documentation team will handle all RTA paperwork and transfer processes for you.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/></svg>
                </span>
                Do you buy vehicles with outstanding finance?
              </h3>
              <p className="text-muted-foreground pl-11">
                Yes, we specialize in purchasing vehicles with outstanding finance in Dubai. Our team will coordinate with your bank to settle the loan and handle all necessary paperwork.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/></svg>
                </span>
                How quickly will I receive payment?
              </h3>
              <p className="text-muted-foreground pl-11">
                With our VIP service, you'll receive instant payment upon completion of the sale. We offer bank transfers, manager's checks, or cash payments based on your preference and UAE regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-secondary to-black rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/dubai-luxury-pattern.svg')] bg-cover opacity-5"></div>
            <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Dubai's Premium Vehicle Service</h2>
                <p className="text-white/80 text-lg max-w-xl">
                  Join thousands of satisfied clients who have chosen SellAnyMotor for a seamless, premium selling experience
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/valuation"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-gradient-to-r from-brand-gold to-amber-400 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">Start Your Premium Valuation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}