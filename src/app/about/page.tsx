import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'About Us | DNT Sameday Courier & Delivery Services',
  description: 'Family-run courier service with 30+ years experience. Learn about our operational approach, insurance coverage, and UK-wide delivery services.',
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About DNT Sameday</h1>
            <p className="text-xl">Your trusted logistics partner for over 30 years.</p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 bg-white">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Family-Run Excellence Since 1990</h2>
              <p className="text-[var(--steel-grey)] mb-4">
                DNT Sameday has been providing exceptional courier and delivery services across the UK for over 30 years. As a family-run business based in Bracknell, we combine the reliability and personal touch of a local company with the capabilities of a national logistics provider.
              </p>
              <p className="text-[var(--steel-grey)] mb-4">
                Our journey began with a single van and a commitment to reliable, timely deliveries. Today, we operate a diverse fleet of vehicles and serve clients throughout the entire UK, but our founding principles remain unchanged: reliability, professionalism, and customer satisfaction.
              </p>
              <p className="text-[var(--steel-grey)]">
                What sets us apart is our dedication to understanding each client's unique needs and tailoring our services accordingly, whether you require urgent same-day delivery or scheduled contract runs.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Delivery personnel discussing route"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Approach */}
      <section className="py-16 bg-[var(--section-grey)]">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary)]">Our Operational Approach</h2>
            <p className="text-[var(--steel-grey)] mt-2 max-w-2xl mx-auto">
              Efficiency and reliability are at the core of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--secondary)]/10 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Swift Response</h3>
              <p className="text-[var(--steel-grey)]">
                We guarantee collection within 45 minutes of your call, ensuring your time-critical deliveries are handled promptly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--secondary)]/10 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Rapid POD Delivery</h3>
              <p className="text-[var(--steel-grey)]">
                Proof of delivery is provided within 5-15 minutes of completed delivery, giving you immediate confirmation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-[var(--secondary)]/10 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">GPS Tracking</h3>
              <p className="text-[var(--steel-grey)]">
                All vehicles are equipped with live GPS tracking, allowing you to monitor your deliveries in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Coverage */}
      <section className="py-16 bg-white">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1606170033648-5d55a3edf314?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Delivery van on the road"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Insurance & Coverage</h2>
              <p className="text-[var(--steel-grey)] mb-6">
                We understand the importance of security and peace of mind when entrusting your goods to a courier service. That's why we offer comprehensive insurance coverage:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[var(--secondary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--primary)]">£50,000 Goods-in-Transit Insurance</span>
                    <p className="text-[var(--steel-grey)]">Protecting your valuable items during transport.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[var(--secondary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-[var(--primary)]">£5 Million Public Liability Insurance</span>
                    <p className="text-[var(--steel-grey)]">Comprehensive coverage for all operations.</p>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Service Coverage</h3>
              <p className="text-[var(--steel-grey)] mb-4">
                Our services extend throughout the entire United Kingdom and into Europe, providing you with extensive geographical coverage for all your delivery needs.
              </p>
              <p className="text-[var(--steel-grey)]">
                Whether you need a local delivery within Bracknell, a nationwide service across the UK, or international shipments to Europe, we have the resources and experience to deliver successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[var(--secondary)]">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30  text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can tailor our courier and delivery services to meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+441234567890" className="bg-white text-[var(--secondary)] font-semibold px-6 py-2.5 rounded-md hover:bg-[var(--light-grey)] transition-colors">
              Call Us
            </a>
            <Link href="/contact" className="bg-[var(--primary)] text-white font-semibold px-6 py-2.5 rounded-md hover:bg-[var(--primary)]/80 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
