import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-primary text-white md:py-15 lg:py-20 xl:py-25">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1614976523626-d598aafd4fda?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delivery van on the road"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      <div className="px-4 md:px-8 lg:px-10 2xl:px-12   relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Courier & Delivery Services</h1>
            <p className="text-xl mb-8">Fast, reliable, and professional courier services across the UK. Serving businesses and private clients for over 30 years.</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+441234567890" className="btn-primary text-center">
                <span className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </span>
              </a>
              <Link href="/contact" className="bg-white text-primary font-semibold px-6 py-2.5 rounded-md hover:bg-light-grey transition-colors text-center">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Hero Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose DNT Sameday?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <li className="flex">
                <div className="mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">24/7 Service, 365 Days a Year</h3>
                  <p className="text-white/80">We're always available when you need us.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Comprehensive Insurance</h3>
                  <p className="text-white/80">£50k goods-in-transit and £5M public liability.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Quick Response Times</h3>
                  <p className="text-white/80">45 minute collection and rapid POD delivery.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">UK-Wide Coverage</h3>
                  <p className="text-white/80">Servicing the entire UK and Europe.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
