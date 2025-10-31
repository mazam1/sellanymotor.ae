import ImageWithFallback from "@/src/components/ImageWithFallback";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import ParallaxParticles from "@/src/components/ParallaxParticles";

export const metadata = {
  title: "Services | SellAnyMotor",
  description: "Explore SellAnyMotor's vehicle selling and servicing solutions.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-neutral-700 text-secondary-foreground overflow-hidden">
        <ParallaxParticles />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Our <span className="text-brand-gold">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Comprehensive motor buying services designed to provide maximum value and convenience.
            From free valuations to instant payments, we handle every aspect of your motor sale.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Core Services</h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to sell your motor quickly, safely, and profitably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Vehicle Valuation */}
            <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-accent-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold">Free Vehicle Valuation</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get a professional assessment of your motor's market value with no obligations
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Comprehensive market analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Professional inspection by certified experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Instant valuation report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">No hidden fees or charges</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-4 flex justify-between items-center">
                <span className="text-sm font-medium">Premium Service</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-brand-gold">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Motor Inspection */}
            <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-accent-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold">Professional Motor Inspection</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Thorough vehicle assessment by experienced automotive professionals
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Complete mechanical inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Body and paint condition assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Interior and exterior evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Detailed condition report</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-4 flex justify-between items-center">
                <span className="text-sm font-medium">Premium Service</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-brand-gold">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Cash Payment */}
            <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-accent-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold">Instant Cash Payment</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Get paid immediately after accepting our fair market offer
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Immediate payment processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Bank transfer or certified check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Same-day payment guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Secure transaction processing</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-4 flex justify-between items-center">
                <span className="text-sm font-medium">Premium Service</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-brand-gold">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Free Vehicle Pickup */}
            <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-accent-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold">Free Vehicle Pickup</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Convenient pickup service from your location at no extra cost
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Nationwide pickup coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Flexible scheduling options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Professional transport team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm">Full insurance coverage during transport</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-4 flex justify-between items-center">
                <span className="text-sm font-medium">Premium Service</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-brand-gold">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              Our streamlined 4-step process makes selling your motor simple and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-muted rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request Valuation</h3>
              <p className="text-muted-foreground">
                Fill out our comprehensive form with your vehicle details
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-muted rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Inspection</h3>
              <p className="text-muted-foreground">
                Our certified inspectors assess your vehicle thoroughly
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-muted rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Offer</h3>
              <p className="text-muted-foreground">
                Get a fair, competitive offer based on market analysis
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-muted rounded-xl p-6 relative">
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">4</div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Sale</h3>
              <p className="text-muted-foreground">
                Accept the offer and receive instant payment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles We Buy Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Vehicles We Buy</h2>
            <p className="mt-4 text-muted-foreground">
              We purchase all types of vehicles in any condition at competitive market prices
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Luxury Vehicles */}
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 z-0"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-secondary-foreground mb-1">Luxury Vehicles</h3>
                <p className="text-sm text-secondary-foreground/80">Premium cars, sports cars, and high-end models</p>
              </div>
            </div>

            {/* Family Vehicles */}
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 z-0"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-secondary-foreground mb-1">Family Vehicles</h3>
                <p className="text-sm text-secondary-foreground/80">SUVs, minivans, and family-friendly cars</p>
              </div>
            </div>

            {/* Sports Cars */}
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 z-0"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-secondary-foreground mb-1">Sports Cars</h3>
                <p className="text-sm text-secondary-foreground/80">High-performance and sports vehicles</p>
              </div>
            </div>

            {/* Compact Cars */}
            <div className="relative rounded-xl overflow-hidden h-64 group">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 z-0"></div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-xl font-bold text-secondary-foreground mb-1">Compact Cars</h3>
                <p className="text-sm text-secondary-foreground/80">Sedans, hatchbacks, and compact vehicles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Additional Services</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive support services to make your motor selling experience seamless
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Damage Assessment */}
            <div className="bg-muted rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v2m0 4h.01"/><path d="M5.07 19H19a2 2 0 0 0 1.75-2.97L13.76 4.69a2 2 0 0 0-3.51 0L3.26 16.03a2 2 0 0 0 1.75 2.97"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Damage Assessment</h3>
              <p className="text-muted-foreground">
                Expert evaluation of accident-damaged or problematic vehicles
              </p>
            </div>

            {/* Title & Documentation */}
            <div className="bg-muted rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Title & Documentation</h3>
              <p className="text-muted-foreground">
                Complete handling of paperwork and title transfer processes
              </p>
            </div>

            {/* 24/7 Customer Support */}
            <div className="bg-muted rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance throughout your selling journey
              </p>
            </div>

            {/* Market Analysis */}
            <div className="bg-muted rounded-xl p-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-muted-foreground">
                Detailed market research to ensure competitive pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of professional motor buying services. Get your free
              valuation today and discover why thousands trust SellAnyMotor.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-4 text-base font-semibold shadow-lg hover:bg-primary/90 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              Get Free Valuation
            </Link>
            <Link
              href="tel:+971585552782"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-4 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call +971 58 555 2782
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}