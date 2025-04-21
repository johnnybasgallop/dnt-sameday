import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';

export const metadata = {
  title: 'Services | DNT Sameday Courier & Delivery Solutions',
  description: 'Explore our comprehensive range of courier services including same-day, next-day, urgent freight, contract runs, and specialized delivery solutions.',
};

export default function ServicesPage() {
  // Service data with icons, descriptions, and features
  const services = [
    {
      id: 'sameday',
      title: 'Same-Day Delivery',
      description: 'Urgent deliveries collected within 45 minutes and delivered directly to their destination.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        '45-minute collection response',
        'Direct, non-stop delivery',
        'POD within 5-15 minutes',
        'Live GPS tracking',
        'Available 24/7, 365 days a year'
      ]
    },
    {
      id: 'nextday',
      title: 'Next-Day Delivery',
      description: 'Cost-effective solution for less time-sensitive items with nationwide coverage.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'UK-wide coverage',
        'Cost-effective for larger shipments',
        'Reliable delivery time windows',
        'Full electronic tracking',
        'Competitive pricing'
      ]
    },
    {
      id: 'urgent-freight',
      title: 'Urgent Freight',
      description: 'Specialized service for time-critical, high-value, or oversized items requiring immediate transport.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'Suitable for oversized items',
        'High-value goods transport',
        'Priority handling',
        'Specialized vehicles available',
        'Expedited service'
      ]
    },
    {
      id: 'contract',
      title: 'Contract Runs',
      description: 'Regular scheduled delivery routes tailored to your business needs with dedicated vehicles.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      features: [
        'Fixed daily/weekly schedules',
        'Dedicated vehicles',
        'Consistent driver assignment',
        'Volume discounts available',
        'Tailored to your business needs'
      ]
    },
    {
      id: 'multi-drop',
      title: 'Multi-Drop Deliveries',
      description: 'Efficient delivery of multiple packages to different locations along optimized routes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        'Route optimization',
        'Cost-effective distribution',
        'Individual PODs for each delivery',
        'Real-time delivery updates',
        'Nationwide service'
      ]
    },
    {
      id: 'international',
      title: 'International Deliveries',
      description: 'Reliable shipping services to Europe and beyond for businesses requiring cross-border logistics.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'European coverage',
        'Customs documentation assistance',
        'Express and economy options',
        'International tracking',
        'Secure handling'
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Deliveries',
      description: 'Custom solutions for unique delivery requirements, including temperature-controlled and high-security transportation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        'Temperature-controlled options',
        'Fragile item handling',
        'High-security transport',
        'Hazardous materials transport',
        'Bespoke logistics solutions'
      ]
    },
    {
      id: 'storage',
      title: 'Storage Solutions',
      description: 'Secure warehousing and storage facilities with flexible short and long-term options.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
      features: [
        'Short and long-term options',
        'Secure facilities',
        'Inventory management',
        'Easy collection and delivery integration',
        '24/7 access available'
      ]
    }
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive delivery solutions tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Delivery Solutions for Every Need</h2>
            <p className="text-steel-grey mt-2 max-w-2xl mx-auto">
              From urgent same-day deliveries to scheduled contract runs, we offer a comprehensive range of courier and logistics services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                slug={service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Information */}
      <section className="py-16 bg-section-grey">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Tailored to Your Business</h2>
              <p className="text-steel-grey mb-4">
                At DNT Sameday, we understand that every business has unique delivery requirements. That's why we work closely with you to understand your specific needs and develop customized logistics solutions.
              </p>
              <p className="text-steel-grey mb-4">
                Whether you're a small business needing occasional deliveries or a large enterprise requiring complex logistics management, our team has the expertise and resources to support you.
              </p>
              <p className="text-steel-grey">
                With our comprehensive service coverage and flexible approach, we can adapt to changing demands and provide the right delivery solution at the right time.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1566576950547-6eae3a62062f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Warehouse logistics operation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-secondary">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12   text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Customized Solution?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your specific delivery requirements and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+441234567890" className="bg-white text-secondary font-semibold px-6 py-2.5 rounded-md hover:bg-light-grey transition-colors">
              Call Us
            </a>
            <a href="mailto:info@dntsameday.co.uk" className="bg-primary text-white font-semibold px-6 py-2.5 rounded-md hover:bg-primary/80 transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
