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
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^(\+|00)?[0-9\s\-\(\)]{7,}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.message.trim()) errors.message = "Message is required";
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user types
    if (formErrors[id]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // In a real implementation, this would send data to a server
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
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
    }, 5000);
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-gradient-to-b from-secondary to-secondary/90 text-secondary-foreground">
      {/* Hero Section with Dubai Skyline */}
      <section className="py-16 lg:py-24 relative w-full overflow-hidden">
        {/* Dubai Skyline SVG Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,200 L0,110 L50,110 L60,90 L70,110 L80,100 L100,100 L110,80 L120,100 L140,100 L150,70 L160,100 L180,100 L190,60 L200,100 L220,100 L230,50 L240,100 L260,100 L270,40 L280,100 L300,100 L310,30 L320,100 L340,100 L350,20 L360,100 L380,100 L390,10 L400,100 L420,100 L430,0 L440,100 L460,100 L470,10 L480,100 L500,100 L510,20 L520,100 L540,100 L550,30 L560,100 L580,100 L590,40 L600,100 L620,100 L630,50 L640,100 L660,100 L670,60 L680,100 L700,100 L710,70 L720,100 L740,100 L750,80 L760,100 L780,100 L790,90 L800,100 L820,100 L830,110 L840,100 L860,100 L870,110 L880,100 L900,100 L910,110 L920,100 L940,100 L950,110 L960,100 L980,100 L990,110 L1000,100 L1020,100 L1030,110 L1040,100 L1060,100 L1070,110 L1080,100 L1100,100 L1110,110 L1120,100 L1140,100 L1150,110 L1160,100 L1180,100 L1190,110 L1200,100 L1200,200 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="w-full px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary-foreground">
            Contact <span className="text-primary">SellAnyMotor</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
            Ready to sell your car in Dubai? Our expert team is here to help you every step of the way.
            Get in touch today for personalized assistance and the best market value for your vehicle.
          </p>

          {/* Contact Cards with Dubai-specific details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full max-w-[1400px] mx-auto">
            {/* WhatsApp Card */}
            <div className="bg-card/80 backdrop-blur-sm ring-1 ring-border rounded-lg p-6 hover:ring-primary/60 transition-all shadow-lg hover:shadow-primary/10">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 mx-auto shadow-md">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4539 3.54C18.2166 1.3 15.2097 0 12.0645 0C5.46124 0 0.129026 5.33 0.129026 11.94C0.129026 14.05 0.708387 16.11 1.80645 17.89L0 24L6.25161 22.22C7.96774 23.22 9.99355 23.75 12.0645 23.75C18.6677 23.75 24 18.42 24 11.81C24 8.67 22.6911 5.78 20.4539 3.54ZM12.0645 21.75C10.2911 21.75 8.56774 21.25 7.05806 20.31L6.70968 20.09L2.90323 21.18L4.00645 17.5L3.76129 17.14C2.73548 15.57 2.19355 13.79 2.19355 11.94C2.19355 6.44 6.56774 2.06 12.0645 2.06C14.6911 2.06 17.1548 3.13 19.0323 5.01C20.9097 6.89 21.9355 9.35 21.9355 11.81C21.9355 17.31 17.5613 21.75 12.0645 21.75Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Quick responses via WhatsApp</p>
              <Link href="https://wa.me/971568559762" className="text-primary hover:underline font-medium">
                +971 56 855 9762
              </Link>
            </div>

            {/* Phone Card */}
            <div className="bg-card/80 backdrop-blur-sm ring-1 ring-border rounded-lg p-6 hover:ring-primary/60 transition-all shadow-lg hover:shadow-primary/10">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 mx-auto shadow-md">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our team</p>
              <Link href="tel:+97145855876" className="text-primary hover:underline font-medium">
                +971 4 585 5876
              </Link>
            </div>

            {/* Email Card */}
            <div className="bg-card/80 backdrop-blur-sm ring-1 ring-border rounded-lg p-6 hover:ring-primary/60 transition-all shadow-lg hover:shadow-primary/10">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 mx-auto shadow-md">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Send us your inquiry</p>
              <Link href="mailto:info@sellanymotor.com" className="text-primary hover:underline font-medium">
                info@sellanymotor.com
              </Link>
            </div>

            {/* Visit Card */}
            <div className="bg-card/80 backdrop-blur-sm ring-1 ring-border rounded-lg p-6 hover:ring-primary/60 transition-all shadow-lg hover:shadow-primary/10">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 mx-auto shadow-md">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Our office location</p>
              <Link href="https://maps.google.com/?q=25.1972,55.2744" className="text-primary hover:underline font-medium">
                Business Bay, Dubai, UAE
              </Link>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="max-w-md mx-auto">
            <ActionButtons 
              whatsappNumber="971568559762"
              phoneNumber="00971568558762"
              className="mt-4"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section with Dubai-themed design */}
      <section className="py-16 bg-background/95 backdrop-blur-sm w-full relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="w-full px-8 relative z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive Form with validation */}
            <div className="bg-card/90 backdrop-blur-sm ring-1 ring-border rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-6 flex flex-col items-center justify-center min-h-[300px]">
                  <svg className="w-16 h-16 text-green-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-center">Your message has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border ${formErrors.name ? 'border-red-500' : 'border-border'} rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        required
                      />
                      {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border ${formErrors.email ? 'border-red-500' : 'border-border'} rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        required
                      />
                      {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border ${formErrors.phone ? 'border-red-500' : 'border-border'} rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        required
                      />
                      {formErrors.phone && <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="carMake" className="block text-sm font-medium text-muted-foreground mb-1">
                        Car Make
                      </label>
                      <input
                        type="text"
                        id="carMake"
                        value={formData.carMake}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="carModel" className="block text-sm font-medium text-muted-foreground mb-1">
                        Car Model
                      </label>
                      <input
                        type="text"
                        id="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-muted-foreground mb-1">
                        Year
                      </label>
                      <input
                        type="text"
                        id="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border ${formErrors.message ? 'border-red-500' : 'border-border'} rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      required
                    ></textarea>
                    {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactMethod" className="block text-sm font-medium text-muted-foreground mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option>Phone Call</option>
                        <option>WhatsApp</option>
                        <option>Email</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-muted-foreground mb-1">
                        Preferred Time (Dubai Time)
                      </label>
                      <input
                        type="text"
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        placeholder="e.g. Afternoons, Evenings"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:brightness-95 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Fields marked with * are required
                  </p>
                </form>
              )}
            </div>

            {/* Dubai-specific Info Section */}
            <div className="flex flex-col justify-between space-y-8">
              {/* Map showing Dubai headquarters */}
              <div className="bg-card/90 backdrop-blur-sm ring-1 ring-border rounded-xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative">
                  {/* SVG Map of Dubai Business Bay area */}
                  <div className="absolute inset-0 bg-gray-200">
                    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect width="800" height="450" fill="#e6e6e6" />
                      {/* Water */}
                      <path d="M0,200 Q400,250 800,200 L800,450 L0,450 Z" fill="#a5d7f7" />
                      {/* Roads */}
                      <path d="M0,150 L800,150" stroke="#ffffff" strokeWidth="8" />
                      <path d="M0,300 L800,300" stroke="#ffffff" strokeWidth="6" />
                      <path d="M200,0 L200,450" stroke="#ffffff" strokeWidth="6" />
                      <path d="M600,0 L600,450" stroke="#ffffff" strokeWidth="6" />
                      {/* Buildings */}
                      <rect x="380" y="100" width="40" height="100" fill="#555555" />
                      <rect x="350" y="120" width="20" height="80" fill="#777777" />
                      <rect x="430" y="110" width="30" height="90" fill="#666666" />
                      <rect x="480" y="90" width="25" height="110" fill="#555555" />
                      <rect x="520" y="80" width="35" height="120" fill="#444444" />
                      <rect x="300" y="130" width="30" height="70" fill="#666666" />
                      <rect x="250" y="110" width="35" height="90" fill="#555555" />
                      {/* Location Pin */}
                      <circle cx="400" cy="225" r="15" fill="#ff0000" />
                      <path d="M400,225 L400,180" stroke="#ff0000" strokeWidth="5" />
                      <circle cx="400" cy="180" r="10" fill="#ff0000" />
                      <text x="420" y="225" fontSize="20" fill="#000000" fontWeight="bold">SellAnyMotor HQ</text>
                    </svg>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-medium">SellAnyMotor Headquarters</p>
                  <p className="text-muted-foreground">Business Bay, Downtown Dubai</p>
                  <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
                  <Link href="https://maps.google.com/?q=25.1972,55.2744" className="text-primary hover:underline text-sm mt-2 inline-block">
                    Get Directions →
                  </Link>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="bg-card/90 backdrop-blur-sm ring-1 ring-border rounded-xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <p className="text-muted-foreground mb-4">Dubai Time Zone (GMT+4)</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday - Thursday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday</span>
                    <span>2:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="h-px bg-border my-4"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Customer Support</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Available 24/7</span>
                  </div>
                </div>
              </div>
              
              {/* Dubai Automotive Market */}
              <div className="bg-card/90 backdrop-blur-sm ring-1 ring-border rounded-xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Dubai's Premier Car Market</h3>
                <p className="text-muted-foreground">
                  Dubai is home to one of the world's most dynamic automotive markets, with a unique blend of luxury, sports, and everyday vehicles. At SellAnyMotor, we specialize in providing the best value for all types of cars in the UAE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Why Choose SellAnyMotor?</h2>
                <div className="space-y-6">
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