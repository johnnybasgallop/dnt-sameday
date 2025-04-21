'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 md:px-8 lg:px-10 2xl:px-12   py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
           <Logo/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-light-grey hover:text-secondary font-medium">
              Home
            </Link>
            <Link href="/about" className="text-light-grey hover:text-secondary font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-light-grey hover:text-secondary font-medium">
              Services
            </Link>
            <Link href="/fleet" className="text-light-grey hover:text-secondary font-medium">
              Our Fleet
            </Link>
            <Link href="/contact" className="text-light-grey hover:text-secondary font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="tel:+441234567890"
              className="btn-primary flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground)] hover:text-secondary font-medium px-2">
                Home
              </Link>
              <Link href="/about" className="text-foreground)] hover:text-secondary font-medium px-2">
                About Us
              </Link>
              <Link href="/services" className="text-foreground)] hover:text-secondary font-medium px-2">
                Services
              </Link>
              <Link href="/fleet" className="text-foreground)] hover:text-secondary font-medium px-2">
                Our Fleet
              </Link>
              <Link href="/contact" className="text-foreground)] hover:text-secondary font-medium px-2">
                Contact
              </Link>
              <a
                href="tel:+441234567890"
                className="btn-primary flex items-center w-full justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
