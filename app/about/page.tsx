"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxParticles from "../../src/components/ParallaxParticles";
import ImageWithFallback from "../../src/components/ImageWithFallback";
import { MapPin, Shield, ThumbsUp, TrendingUp, Handshake, Award, Clock, Star, Check, Building, Verified, MessageSquare } from "lucide-react";
import Head from "next/head";

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

// Staggered animation for lists
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About SellAnyMotor | Dubai's Premier Car Selling Service</title>
        <meta
          name="description"
          content="SellAnyMotor is Dubai's trusted automotive marketplace offering premium car selling services with transparent valuations, certified inspections, and instant payments across the UAE."
        />
      </Head>

      {/* Hero Section: Dubai-inspired luxury automotive imagery */}
      <section className="relative bg-gradient-to-b from-secondary via-secondary to-background text-secondary-foreground overflow-hidden">
        <ParallaxParticles />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582639510494-c80b5de9f148?q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={fadeIn.transition}
            className="min-h-[80vh] grid place-items-center py-16"
          >
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="inline-block mb-6 p-2 bg-accent/10 rounded-full">
                <img src="/icon.svg" alt="SellAnyMotor Logo" className="w-16 h-16" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                The Premier Car Selling Experience
                <span className="block text-accent mt-2">In Dubai & Across UAE</span>
              </h1>
              <p className="mt-6 text-lg text-accent-foreground/80 max-w-2xl">
                SellAnyMotor delivers a luxury automotive selling experience with market-leading valuations, certified inspections, and instant payments — the gold standard in Dubai's premium car market.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/process" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Our Process
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-secondary text-secondary-foreground border border-accent/30 px-6 py-3 text-base font-semibold hover:bg-accent/10 transition-all duration-200">
                  Get a Valuation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center">Company Overview</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="text-lg text-center text-muted-foreground">
              Founded in Dubai, SellAnyMotor has established itself as the UAE's most trusted automotive marketplace, specializing in premium car selling services tailored to the unique demands of the region's luxury vehicle market.
            </p>
          </motion.div>
          
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1200" 
                alt="SellAnyMotor Dubai headquarters" 
                width={600} 
                height={400} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Dubai's Automotive Excellence</h3>
              <p className="text-muted-foreground mb-6">
                Operating from our state-of-the-art facility in Business Bay, SellAnyMotor combines deep local market knowledge with international automotive expertise to deliver unmatched service across the Emirates.
              </p>
              
              <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={fadeIn.viewport} className="space-y-4">
                {[
                  { icon: <Building className="w-5 h-5" />, text: "Established in 2015 in the heart of Dubai" },
                  { icon: <Award className="w-5 h-5" />, text: "RTA-certified and fully compliant with UAE regulations" },
                  { icon: <Star className="w-5 h-5" />, text: "Over 10,000 successful transactions completed" },
                  { icon: <Verified className="w-5 h-5" />, text: "ISO 9001 certified for quality management" }
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Our Mission & Values</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="text-lg text-muted-foreground">
              We're committed to transforming the car selling experience in the UAE through transparency, efficiency, and exceptional service tailored to the region's unique automotive market.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide UAE residents with the most transparent, efficient, and rewarding way to sell their vehicles, setting new standards for the automotive industry in the region.
              </p>
              <div className="flex items-center gap-4 text-accent">
                <Clock className="w-8 h-8" />
                <span className="font-medium">Same-day service, instant payments</span>
              </div>
            </motion.div>
            
            <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be recognized as the most trusted automotive marketplace in the Middle East, known for our integrity, expertise, and customer-centric approach.
              </p>
              <div className="flex items-center gap-4 text-accent">
                <Star className="w-8 h-8" />
                <span className="font-medium">5-star rated across all platforms</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-labelledby="values-heading">
            <div className="bg-card rounded-xl p-6 ring-1 ring-border shadow-md">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Integrity</h3>
              <p className="mt-2 text-muted-foreground">Transparent processes and fair valuations, always backed by market data.</p>
            </div>
            <div className="bg-card rounded-xl p-6 ring-1 ring-border shadow-md">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Customer First</h3>
              <p className="mt-2 text-muted-foreground">Personalized support with multilingual staff and VIP service options.</p>
            </div>
            <div className="bg-card rounded-xl p-6 ring-1 ring-border shadow-md">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="mt-2 text-muted-foreground">Fast inspections and instant payment turnaround, respecting your valuable time.</p>
            </div>
            <div className="bg-card rounded-xl p-6 ring-1 ring-border shadow-md">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <ThumbsUp className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Quality</h3>
              <p className="mt-2 text-muted-foreground">Certified inspections and verified documentation by UAE-trained specialists.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Differentiators */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">Why Choose SellAnyMotor</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="text-lg text-muted-foreground">
              Our unique approach to car selling in Dubai sets us apart from traditional dealerships and online marketplaces.
            </p>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={fadeIn.viewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Valuation",
                description: "Market-leading offers based on real-time UAE market data and luxury vehicle expertise.",
                icon: <Award className="w-8 h-8" />
              },
              {
                title: "Instant Payment",
                description: "Same-day bank transfers or cash payments in AED with no hidden fees or delays.",
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: "Multilingual Support",
                description: "Staff fluent in Arabic, English, Hindi, Urdu, and Filipino for seamless communication.",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                title: "Complimentary Services",
                description: "Free vehicle collection, RTA transfer assistance, and outstanding loan settlement.",
                icon: <Check className="w-8 h-8" />
              },
              {
                title: "Dubai Expertise",
                description: "Specialized knowledge of Dubai's unique automotive market and regulations.",
                icon: <Building className="w-8 h-8" />
              },
              {
                title: "Luxury Experience",
                description: "VIP service options including private appointments and concierge assistance.",
                icon: <Star className="w-8 h-8" />
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-card rounded-xl p-8 shadow-md border border-border hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <p className="mt-4 text-muted-foreground">
              Built for Dubai’s dynamic market — we uphold industry-leading standards of ethics, transparency, and service excellence.
            </p>
          </motion.div>
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-labelledby="values-heading">
            <div className="bg-card rounded-xl p-6 ring-1 ring-border">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Integrity</h3>
              <p className="mt-2 text-muted-foreground">Transparent processes and fair valuations, always.</p>
            </div>
            <div className="bg-card rounded-xl p-6 ring-1 ring-border">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Customer First</h3>
              <p className="mt-2 text-muted-foreground">Personalized support with swift, reliable outcomes.</p>
            </div>
            <div className="bg-card rounded-xl p-6 ring-1 ring-border">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Performance</h3>
              <p className="mt-2 text-muted-foreground">Fast inspections and instant payment turnaround.</p>
            </div>
            <div className="bg-card rounded-xl p-6 ring-1 ring-border">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                <ThumbsUp className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">Quality</h3>
              <p className="mt-2 text-muted-foreground">Certified inspections and verified documentation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">Leadership Team</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="mt-4 text-muted-foreground">Meet our team of automotive experts with extensive experience in Dubai's premium car market.</p>
          </motion.div>
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Rashid Al Mansoori", title: "Chief Executive Officer", src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=640&q=80&auto=format&fit=crop", bio: "15+ years leading automotive marketplaces across the GCC with expertise in luxury vehicle acquisitions and UAE market dynamics." },
              { name: "Leila Khan", title: "Director of Operations", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=640&q=80&auto=format&fit=crop", bio: "Former RTA consultant optimizing inspection workflows and customer experience across our Dubai operations with a focus on service excellence." },
              { name: "Omar Haddad", title: "Head of Inspections", src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=640&q=80&auto=format&fit=crop", bio: "ASE-certified expert with specialized training in European luxury vehicles, overseeing our team of UAE-certified vehicle inspectors." },
              { name: "Fatima Al Zaabi", title: "Customer Experience Director", src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&q=80&auto=format&fit=crop", bio: "Customer service specialist ensuring premium experiences for all clients with expertise in VIP client relations across the Emirates." },
              { name: "Sanjay Patel", title: "Chief Technology Officer", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=640&q=80&auto=format&fit=crop", bio: "Tech innovator behind our proprietary valuation algorithms and digital platforms optimized for the UAE automotive market." },
              { name: "Noor Al Qasimi", title: "Marketing Director", src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=640&q=80&auto=format&fit=crop", bio: "Digital marketing strategist with deep understanding of UAE consumer behavior and luxury automotive trends in the region." }
            ].map((m) => (
              <article key={m.name} className="group bg-card rounded-2xl overflow-hidden ring-1 ring-border hover:shadow-lg transition-all duration-300" aria-label={`${m.name}, ${m.title}`}>
                <div className="relative aspect-[4/3]">
                  <ImageWithFallback src={m.src} alt={`${m.name} headshot`} width={640} height={480} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.title}</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="bg-muted rounded-lg p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden>
                    {m.bio}
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dubai Market Expertise */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">Dubai Market Expertise</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="mt-4 text-muted-foreground">
              Our deep understanding of Dubai's unique automotive landscape ensures you receive the best possible value for your vehicle.
            </p>
          </motion.div>
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Local Knowledge, Global Standards</h3>
              <p className="text-muted-foreground mb-8">
                Dubai's automotive market has unique characteristics that require specialized expertise. Our team combines local insights with international best practices to deliver exceptional service across the Emirates.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">RTA Compliance Experts</h4>
                    <p className="text-sm text-muted-foreground">Our team navigates all RTA requirements for seamless ownership transfers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Luxury Vehicle Specialists</h4>
                    <p className="text-sm text-muted-foreground">Dedicated experts for premium brands including Rolls-Royce, Bentley, and Ferrari.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">UAE Market Valuation</h4>
                    <p className="text-sm text-muted-foreground">Real-time pricing data specific to Dubai and UAE market conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video">
                <iframe 
                  title="Dubai service areas map" 
                  aria-label="Interactive map showing SellAnyMotor service coverage in Dubai" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  src="https://www.google.com/maps?q=Dubai+Business+Bay&output=embed" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Service Coverage</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our premium car selling service is available throughout Dubai and neighboring Emirates.
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-accent" aria-hidden />
                  <span className="text-sm font-medium">Headquarters: Business Bay, Dubai</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="text-sm text-muted-foreground">• Downtown Dubai</div>
                  <div className="text-sm text-muted-foreground">• Dubai Marina</div>
                  <div className="text-sm text-muted-foreground">• Palm Jumeirah</div>
                  <div className="text-sm text-muted-foreground">• Jumeirah Lakes Towers</div>
                  <div className="text-sm text-muted-foreground">• Dubai Hills</div>
                  <div className="text-sm text-muted-foreground">• Arabian Ranches</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Customer Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="mt-4 text-muted-foreground">
              Hear from satisfied customers across Dubai who have experienced our premium car selling service.
            </p>
          </motion.div>
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                quote: "The entire process was seamless from start to finish. I received an excellent offer for my Range Rover and the payment was in my account within hours. Truly a premium service.", 
                name: "Mohammed Al Farsi", 
                area: "Downtown Dubai",
                rating: 5,
                vehicle: "Range Rover Sport"
              },
              { 
                quote: "As an expat, I was concerned about the paperwork involved in selling my car. SellAnyMotor handled everything professionally and made the process incredibly easy.", 
                name: "Sarah Thompson", 
                area: "Dubai Marina",
                rating: 5,
                vehicle: "BMW X5"
              },
              { 
                quote: "I received offers from several dealers in Dubai, but SellAnyMotor provided the highest valuation and most professional service by far. Highly recommended!", 
                name: "Ahmed Khalid", 
                area: "Palm Jumeirah",
                rating: 5,
                vehicle: "Mercedes S-Class"
              }
            ].map((testimonial, i) => (
              <blockquote key={i} className="bg-card rounded-2xl p-8 ring-1 ring-border shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex justify-between items-end">
                  <footer className="text-sm">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.area}</div>
                  </footer>
                  <div className="text-xs text-muted-foreground italic">{testimonial.vehicle}</div>
                </div>
              </blockquote>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-4 p-4 bg-card rounded-xl shadow-md mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div className="text-xl font-semibold">4.9/5 average rating</div>
              <div className="text-muted-foreground">Based on 500+ reviews</div>
            </div>
            
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
              Get Your Free Valuation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trust Signals & CTA */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">Our Certifications & Partnerships</h2>
            <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
            <p className="text-lg text-muted-foreground">
              SellAnyMotor maintains the highest standards through official certifications and strategic partnerships.
            </p>
          </motion.div>
          
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-card rounded-xl p-6 flex items-center justify-center h-32">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Roads_%26_Transport_Authority_logo.svg/1200px-Roads_%26_Transport_Authority_logo.svg.png" alt="RTA Certified" className="max-h-16 w-auto" />
            </div>
            <div className="bg-card rounded-xl p-6 flex items-center justify-center h-32">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="ISO 9001 Certified" className="max-h-16 w-auto" />
            </div>
            <div className="bg-card rounded-xl p-6 flex items-center justify-center h-32">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Dubai_Chamber_of_Commerce_logo.svg/2560px-Dubai_Chamber_of_Commerce_logo.svg.png" alt="Dubai Chamber of Commerce" className="max-h-16 w-auto" />
            </div>
            <div className="bg-card rounded-xl p-6 flex items-center justify-center h-32">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Department_of_Economic_Development_%28Dubai%29_logo.svg/1200px-Department_of_Economic_Development_%28Dubai%29_logo.svg.png" alt="Department of Economic Development" className="max-h-16 w-auto" />
            </div>
          </motion.div>
          
          <motion.div initial={fadeIn.initial} whileInView={fadeIn.whileInView} viewport={fadeIn.viewport} transition={fadeIn.transition} className="bg-gradient-to-r from-primary/90 to-primary rounded-3xl p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Ready to Sell Your Car?</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Experience Dubai's premier car selling service with market-leading valuations and same-day payments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-white text-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                Get a Free Valuation
              </Link>
              <Link href="/process" className="inline-flex items-center justify-center rounded-md bg-transparent text-white border border-white px-8 py-4 text-lg font-semibold hover:bg-white/10 transition-all duration-200">
                Learn About Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO: Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            name: "SellAnyMotor",
            areaServed: "Dubai, UAE",
            url: "https://sellanymotor.ae",
            logo: "/icon.svg",
            address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
          }),
        }}
      />
    </>
  );
}