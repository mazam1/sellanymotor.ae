"use client";

import { useState } from "react";
import Link from "next/link";
import { ActionButtons } from "../../src/components/ui/ActionButtons";
import Image from "next/image";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    carMake: "",
    carModel: "",
    year: "",
    message: "",
    contactMethod: "Phone Call",
    preferredTime: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a server
    alert("Thank you for your inquiry. We will contact you shortly!");
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-[#0a0a0e]">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 relative w-full">
        <div className="w-full px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Contact <span className="text-[#ff8a00]">SellAnyMotor</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Ready to sell your car or have questions about our services? Our expert team is here to help
            you every step of the way. Get in touch today for personalized assistance and fast responses.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-[1400px] mx-auto">
            {/* WhatsApp Card */}
            <div className="bg-[#111116] border border-gray-800 rounded-lg p-6 hover:border-[#ff8a00]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#1e7b5e] flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4539 3.54C18.2166 1.3 15.2097 0 12.0645 0C5.46124 0 0.129026 5.33 0.129026 11.94C0.129026 14.05 0.708387 16.11 1.80645 17.89L0 24L6.25161 22.22C7.96774 23.22 9.99355 23.75 12.0645 23.75C18.6677 23.75 24 18.42 24 11.81C24 8.67 22.6911 5.78 20.4539 3.54ZM12.0645 21.75C10.2911 21.75 8.56774 21.25 7.05806 20.31L6.70968 20.09L2.90323 21.18L4.00645 17.5L3.76129 17.14C2.73548 15.57 2.19355 13.79 2.19355 11.94C2.19355 6.44 6.56774 2.06 12.0645 2.06C14.6911 2.06 17.1548 3.13 19.0323 5.01C20.9097 6.89 21.9355 9.35 21.9355 11.81C21.9355 17.31 17.5613 21.75 12.0645 21.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Quick responses via WhatsApp</p>
              <Link href="https://wa.me/971501234567" className="text-[#ff8a00] hover:underline font-medium">
                +971 50 123 4567
              </Link>
            </div>

            {/* Phone Card */}
            <div className="bg-[#111116] border border-gray-800 rounded-lg p-6 hover:border-[#ff8a00]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#ff8a00] flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
              <p className="text-gray-400 mb-4">Speak directly with our team</p>
              <Link href="tel:+97142123456" className="text-[#ff8a00] hover:underline font-medium">
                +971 4 212 3456
              </Link>
            </div>

            {/* Email Card */}
            <div className="bg-[#111116] border border-gray-800 rounded-lg p-6 hover:border-[#ff8a00]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#3b82f6] flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-400 mb-4">Send us your inquiry</p>
              <Link href="mailto:info@sellanymotor.com" className="text-[#ff8a00] hover:underline font-medium">
                info@sellanymotor.com
              </Link>
            </div>

            {/* Visit Card */}
            <div className="bg-[#111116] border border-gray-800 rounded-lg p-6 hover:border-[#ff8a00]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#10b981] flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Visit Us</h3>
              <p className="text-gray-400 mb-4">Our office location</p>
              <Link href="https://maps.google.com" className="text-[#ff8a00] hover:underline font-medium">
                Dubai, United Arab Emirates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#0f0f14] w-full">
        <div className="w-full px-8">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-[#111116] border border-gray-800 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="carMake" className="block text-sm font-medium text-gray-300 mb-1">
                      Car Make
                    </label>
                    <input
                      type="text"
                      id="carMake"
                      value={formData.carMake}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="carModel" className="block text-sm font-medium text-gray-300 mb-1">
                      Car Model
                    </label>
                    <input
                      type="text"
                      id="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">
                      Year
                    </label>
                    <input
                      type="text"
                      id="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-300 mb-1">
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                    >
                      <option>Phone Call</option>
                      <option>WhatsApp</option>
                      <option>Email</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-1">
                      Preferred Time (Optional)
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="e.g. Afternoons, Evenings"
                      className="w-full px-4 py-3 bg-[#1a1a20] border border-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff8a00] hover:bg-[#ff8a00]/90 text-white font-bold py-3 px-6 rounded-lg transition-all"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Why Choose SellAnyMotor?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ff8a00]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Best Price Guarantee</h3>
                      <p className="text-gray-400">
                        We guarantee to offer you the best market price for your vehicle, backed by our extensive network of buyers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ff8a00]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Quick Process</h3>
                      <p className="text-gray-400">
                        Sell your car in as little as 30 minutes with our streamlined process and immediate payment options.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-[#ff8a00]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#ff8a00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Hassle-Free Experience</h3>
                      <p className="text-gray-400">
                        We handle all the paperwork and administrative tasks, making selling your car a stress-free experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-[#111116] border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Our Performance</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-[#ff8a00] font-bold text-2xl mb-1">98%</div>
                    <div className="text-sm text-gray-400">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#ff8a00] font-bold text-2xl mb-1">15+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#ff8a00] font-bold text-2xl mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background w-full">
        <div className="w-full px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Find answers to common questions about our vehicle selling process.
          </p>

          <div className="max-w-[1400px] mx-auto space-y-4 w-full">
            {/* FAQ Item 1 */}
            <div className="bg-card border border-[color:var(--border)] rounded-xl p-6 hover:shadow-[0_0_20px_rgba(196,154,54,0.25)] transition-shadow">
              <h3 className="text-xl font-bold mb-2">How long does it take to sell my car?</h3>
              <p className="text-muted-foreground">
                Our process is designed to be quick and efficient. In most cases, you can sell your car in as little as 30 minutes once you arrive at our location. This includes vehicle inspection, paperwork processing, and payment.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-card border border-[color:var(--border)] rounded-xl p-6 hover:shadow-[0_0_20px_rgba(196,154,54,0.25)] transition-shadow">
              <h3 className="text-xl font-bold mb-2">What documents do I need to sell my car?</h3>
              <p className="text-muted-foreground">
                You'll need to bring your vehicle registration card, a valid ID (passport or Emirates ID), and any service history documents if available. If there's an outstanding loan on the vehicle, please bring the loan account details as well.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-card border border-[color:var(--border)] rounded-xl p-6 hover:shadow-[0_0_20px_rgba(196,154,54,0.25)] transition-shadow">
              <h3 className="text-xl font-bold mb-2">How is my car's value determined?</h3>
              <p className="text-muted-foreground">
                We evaluate your car based on multiple factors including make, model, year, mileage, condition, service history, market demand, and current market value. Our experienced evaluators conduct a thorough inspection to ensure you get the best possible offer.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-card border border-[color:var(--border)] rounded-xl p-6 hover:shadow-[0_0_20px_rgba(196,154,54,0.25)] transition-shadow">
              <h3 className="text-xl font-bold mb-2">Do you buy cars with existing loans?</h3>
              <p className="text-muted-foreground">
                Yes, we do purchase vehicles with outstanding loans. We'll handle the settlement process with your bank and pay you the difference if your car's value exceeds the loan amount.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-card border border-[color:var(--border)] rounded-xl p-6 hover:shadow-[0_0_20px_rgba(196,154,54,0.25)] transition-shadow">
              <h3 className="text-xl font-bold mb-2">How do I get paid?</h3>
              <p className="text-muted-foreground">
                We offer multiple payment options including bank transfers, manager's checks, or cash (up to a certain amount). The payment is processed immediately once all paperwork is completed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}