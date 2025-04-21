import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661698596668-cd95950d794c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delivery logistics"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-70"></div>
      </div>

      <div className="px-6 md:px-15 lg:px-20 2xl:px-30  relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Need a Delivery Solution?</h2>
            <p className="text-steel-grey max-w-2xl mx-auto">
              Whether you have an urgent same-day delivery or require a tailored logistics solution for your business,
              our team is ready to help 24/7, 365 days a year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-section-grey rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Call Us Directly</h3>
              <p className="text-steel-grey mb-4">Our team is available 24/7 to assist with your delivery needs.</p>
              <a href="tel:+441234567890" className="btn-primary block">
                +44 (0) 1234 567890
              </a>
            </div>

            <div className="bg-section-grey rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Request a Quote</h3>
              <p className="text-steel-grey mb-4">Fill out our simple form and we'll get back to you promptly.</p>
              <Link href="/contact" className="btn-primary block">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-steel-grey">
              We offer £50k goods-in-transit insurance and £5M public liability coverage for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
