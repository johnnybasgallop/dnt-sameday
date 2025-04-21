import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white w-full">
      {/* Main Footer Content */}
      <div className="px-4 md:px-8 lg:px-10 2xl:px-12 py-12">
        <div className="container mx-auto">
          {/* Footer top section with logo, about and navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Company Info */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">DNT Sameday</h3>
              <p className="mb-4 text-white/80 max-w-2/3">Your trusted logistics partner for over 30 years. Family-run courier service based in Bracknell, serving the entire UK.</p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/fleet" className="text-white/80 hover:text-white transition-colors">Our Fleet</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services#sameday" className="text-white/80 hover:text-white transition-colors">Same-Day Delivery</Link></li>
                <li><Link href="/services#nextday" className="text-white/80 hover:text-white transition-colors">Next-Day Delivery</Link></li>
                <li><Link href="/services#urgent-freight" className="text-white/80 hover:text-white transition-colors">Urgent Freight</Link></li>
                <li><Link href="/services#contract" className="text-white/80 hover:text-white transition-colors">Contract Runs</Link></li>
                <li><Link href="/services#multi-drop" className="text-white/80 hover:text-white transition-colors">Multi-Drop Deliveries</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+441234567890" className="text-white/80 hover:text-white transition-colors">+44 (0) 1234 567890</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@dntsameday.co.uk" className="text-white/80 hover:text-white transition-colors">info@dntsameday.co.uk</a>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80">Bracknell, Berkshire</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights section */}
          <div className="mt-10 py-6 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center">
                <span className="text-secondary font-bold">24/7</span>
                <span className="text-white/80 text-sm">Always Available</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-secondary font-bold">45 min</span>
                <span className="text-white/80 text-sm">Collection Response</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-secondary font-bold">5-15 min</span>
                <span className="text-white/80 text-sm">POD Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-secondary font-bold">£50k</span>
                <span className="text-white/80 text-sm">Goods-in-Transit Cover</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-secondary font-bold">£5M</span>
                <span className="text-white/80 text-sm">Public Liability</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-primary border-t border-white/10 py-4 w-full">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">&copy; {new Date().getFullYear()} DNT Sameday. All rights reserved.</p>
            <div className="mt-2 md:mt-0 flex gap-6">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
