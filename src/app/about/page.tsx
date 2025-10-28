import { Shield, Star, Heart, TrendingUp } from "lucide-react";
import Link from "next/link";
import ParallaxParticles from "@/src/components/ParallaxParticles";

export const metadata = {
  title: "About | SellAnyMotor",
  description: "Learn about SellAnyMotor's mission, values, and team.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Header Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 to-slate-900 text-white overflow-hidden">
        <ParallaxParticles />
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h1 className="text-5xl font-bold mb-4">
            About
            <span className="block text-amber-400 mt-2">SellAnyMotor</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            SellAnyMotor has been revolutionizing the car selling experience across the nation. We've built our
            reputation on trust, transparency, and delivering exceptional value to every customer who
            chooses us.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Story</h2>
              <h3 className="text-2xl font-bold text-amber-500 mb-6">Built on Trust</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                SellAnyMotor began with a simple mission: to make car selling as
                seamless and profitable as possible for vehicle owners. What
                started as a small family business has grown into one of the nation's
                most trusted car buying services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our founders, frustrated with the traditional car selling process,
                envisioned a company that would prioritize customer satisfaction,
                fair pricing, and transparent transactions. Today, we're proud to
                have helped over 50,000 customers sell their vehicles with
                confidence.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Every member of our team shares the same commitment to
                excellence that has driven our success. From our certified
                inspectors to our customer service representatives, we're dedicated
                to providing an exceptional experience at every touchpoint.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-slate-800 text-white rounded-lg p-6 text-center">
                <div className="text-amber-400 flex justify-center mb-2">
                  <Star size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-1">50,000+</h4>
                <p className="text-sm text-gray-300">Cars Purchased</p>
              </div>
              <div className="bg-slate-800 text-white rounded-lg p-6 text-center">
                <div className="text-amber-400 flex justify-center mb-2">
                  <Star size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-1">98%</h4>
                <p className="text-sm text-gray-300">Customer Satisfaction</p>
              </div>
              <div className="bg-slate-800 text-white rounded-lg p-6 text-center">
                <div className="text-amber-400 flex justify-center mb-2">
                  <Star size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-1">15+</h4>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="bg-slate-800 text-white rounded-lg p-6 text-center">
                <div className="text-amber-400 flex justify-center mb-2">
                  <Star size={32} />
                </div>
                <h4 className="text-3xl font-bold mb-1">24/7</h4>
                <p className="text-sm text-gray-300">Support Available</p>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-2">Our Core Values</h2>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
                These principles guide every decision we make and every interaction we have
                with our customers
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="text-amber-400 flex justify-center mb-4">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">Trust & Transparency</h3>
                  <p className="text-gray-300 text-center text-sm">
                    We believe in honest, upfront pricing with no hidden fees or surprise deductions.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="text-amber-400 flex justify-center mb-4">
                    <Star size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">Excellence in Service</h3>
                  <p className="text-gray-300 text-center text-sm">
                    Every interaction is designed to exceed expectations and deliver exceptional results.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="text-amber-400 flex justify-center mb-4">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">Customer First</h3>
                  <p className="text-gray-300 text-center text-sm">
                    Our customers are at the heart of everything we do, driving our commitment to satisfaction.
                  </p>
                </div>
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="text-amber-400 flex justify-center mb-4">
                    <TrendingUp size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-3">Continuous Innovation</h3>
                  <p className="text-gray-300 text-center text-sm">
                    We constantly evolve our processes to provide faster, better car buying experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg italic max-w-3xl mx-auto">
                "To revolutionize the car selling experience by providing transparent, fair,
                and efficient services that put our customers first. We're committed to
                building lasting relationships based on trust, delivering exceptional value,
                and making car selling as simple as it should be."
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 text-white px-6 py-4 text-base font-semibold shadow-lg hover:bg-amber-600 transition-all duration-200"
              >
                Ready to experience the SellAnyMotor difference?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}