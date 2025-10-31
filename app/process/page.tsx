import Link from "next/link";

export const metadata = {
  title: "Our Process | Car Interior Restoration Services",
  description: "Learn about our streamlined 4-step process for car interior restoration, from consultation to final delivery.",
  keywords: "car interior restoration process, restoration workflow, upholstery repair process",
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-lightGray py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
            <p className="text-lg text-mediumGray mb-8">
              We've streamlined our restoration process to ensure quality results and customer satisfaction at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-6">1</div>
                <h2 className="text-3xl font-semibold mb-6">Consultation & Assessment</h2>
                <p className="text-mediumGray mb-6">
                  Our process begins with a thorough consultation to understand your needs and assess the condition of your car's interior. We'll discuss your goals, preferences, and budget to create a customized restoration plan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed inspection of your vehicle's interior</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Discussion of material options and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transparent pricing and timeline estimates</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Consultation Image</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Planning Image</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-6">2</div>
                <h2 className="text-3xl font-semibold mb-6">Planning & Preparation</h2>
                <p className="text-mediumGray mb-6">
                  Once we've agreed on the scope of work, our team will create a detailed plan for your restoration project. We'll source the highest quality materials and prepare our workspace for your vehicle.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Selection of premium materials matched to your vehicle</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scheduling your restoration appointment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Preparation of specialized tools and equipment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-6">3</div>
                <h2 className="text-3xl font-semibold mb-6">Restoration & Craftsmanship</h2>
                <p className="text-mediumGray mb-6">
                  This is where our expertise truly shines. Our skilled technicians will meticulously restore your car's interior components using proven techniques and premium materials to achieve exceptional results.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Careful disassembly and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Precision repair and restoration work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Regular progress updates throughout the process</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Restoration Image</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Final Delivery Image</p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl mb-6">4</div>
                <h2 className="text-3xl font-semibold mb-6">Quality Check & Delivery</h2>
                <p className="text-mediumGray mb-6">
                  Before returning your vehicle, we conduct a comprehensive quality check to ensure every detail meets our high standards. We'll walk you through the completed work and provide care instructions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thorough inspection of all restored components</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed walkthrough of completed work</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Care instructions and maintenance recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Restoration Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and take the first step toward transforming your car's interior.
          </p>
          <Link href="/contact" className="btn-white">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}