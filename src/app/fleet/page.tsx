import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Our Fleet | DNT Sameday Courier Services',
  description: 'Explore our diverse fleet of delivery vehicles including small vans, transits, Sprinters, and Luton vans equipped for all your logistics needs.',
};

// Vehicle data with specifications
const vehicles = [
  {
    id: 'small-van',
    name: 'Small Van (Mercedes Citan)',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
    specs: [
      'Load Space: 2.4m³',
      'Payload: Up to 600kg',
      'Length: 1.7m',
      'Width: 1.2m',
      'Height: 1.1m'
    ],
    description: 'Perfect for small packages, documents, and urban deliveries. Ideal for navigating city centers and tight spaces.',
    services: ['Same-day deliveries', 'Small parcel deliveries', 'Urban logistics', 'Medical deliveries']
  },
  {
    id: 'transit-swb',
    name: 'Transit SWB (Short Wheelbase)',
    image: 'https://images.unsplash.com/photo-1606591318447-c8a792a81e5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    specs: [
      'Load Space: 5.9m³',
      'Payload: Up to 1,100kg',
      'Length: 2.5m',
      'Width: 1.7m',
      'Height: 1.4m'
    ],
    description: 'Versatile vans suitable for medium-sized deliveries and multiple packages. Combines good cargo capacity with maneuverability.',
    services: ['Multi-drop deliveries', 'Medium-sized freight', 'Contract runs', 'Scheduled deliveries']
  },
  {
    id: 'transit-lwb',
    name: 'Transit LWB (Long Wheelbase) High Roof',
    image: 'https://images.unsplash.com/photo-1604141032257-b5a28e7f5bf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    specs: [
      'Load Space: 10.7m³',
      'Payload: Up to 1,400kg',
      'Length: 3.5m',
      'Width: 1.7m',
      'Height: 1.9m'
    ],
    description: 'Spacious vans with excellent loading capacity for larger consignments. High roof allows for taller items.',
    services: ['Larger freight', 'Multiple pallet deliveries', 'Bulky item transport', 'Full load deliveries']
  },
  {
    id: 'sprinter',
    name: 'Mercedes Sprinter',
    image: 'https://images.unsplash.com/photo-1624365169197-834e5ba56708?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3',
    specs: [
      'Load Space: 14m³',
      'Payload: Up to 1,500kg',
      'Length: 4.3m',
      'Width: 1.8m',
      'Height: 1.9m'
    ],
    description: 'Premium large vans offering excellent capacity and reliability. Ideal for significant volume and longer distances.',
    services: ['Urgent freight', 'Long-distance deliveries', 'High-value item transport', 'Express services']
  },
  {
    id: 'luton-box',
    name: 'Luton Box Van',
    image: 'https://images.unsplash.com/photo-1619642356040-6d841d26a914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    specs: [
      'Load Space: 18m³',
      'Payload: Up to 1,200kg',
      'Length: 4.2m',
      'Width: 2.1m',
      'Height: 2.2m'
    ],
    description: 'Specialized vans with large enclosed cargo area. Perfect for furniture, large items, and volume shipping.',
    services: ['Furniture deliveries', 'Home removals', 'Large volume shipments', 'Business relocations']
  },
  {
    id: 'luton-tail',
    name: 'Luton Van with Tail Lift',
    image: 'https://images.unsplash.com/photo-1617282117090-6e775fe24095?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    specs: [
      'Load Space: 18m³',
      'Payload: Up to 1,100kg',
      'Length: 4.2m',
      'Width: 2.1m',
      'Height: 2.2m',
      'Tail Lift Capacity: 500kg'
    ],
    description: 'Equipped with hydraulic tail lift for easy loading and unloading of heavy items without requiring a loading dock.',
    services: ['Heavy item deliveries', 'Pallet deliveries', 'Equipment transport', 'Machinery logistics']
  }
];

export default function FleetPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
            <p className="text-xl">The right vehicle for every delivery requirement.</p>
          </div>
        </div>
      </section>

      {/* Fleet Introduction */}
      <section className="py-16 bg-white">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Diverse Fleet for Your Logistics Needs</h2>
            <p className="text-steel-grey mt-2 max-w-2xl mx-auto">
              DNT Sameday operates a modern, well-maintained fleet of vehicles capable of handling everything from small parcels to large freight.
            </p>
          </div>

          <div className="grid grid-cols-1 mb-12">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Fleet of delivery vans"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white max-w-2xl">
                  <h3 className="text-2xl font-bold mb-2">GPS-Tracked for Real-Time Updates</h3>
                  <p>Every vehicle in our fleet is equipped with GPS tracking technology, allowing you to monitor your delivery in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Showcase */}
      <section className="py-16 bg-section-grey">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Vehicle Types</h2>

          <div className="space-y-16">
            {vehicles.map((vehicle, index) => (
              <div key={vehicle.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} courier van`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3 className="text-2xl font-bold text-primary mb-4">{vehicle.name}</h3>
                  <p className="text-steel-grey mb-6">{vehicle.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Specifications</h4>
                      <ul className="space-y-1">
                        {vehicle.specs.map((spec, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Ideal For</h4>
                      <ul className="space-y-1">
                        {vehicle.services.map((service, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 bg-white">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Fleet Features</h2>
            <p className="text-steel-grey mt-2 max-w-2xl mx-auto">
              All our vehicles are equipped with the latest technology and features to ensure safe, efficient delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-section-grey rounded-lg">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">GPS Tracking</h3>
              <p className="text-steel-grey">
                Real-time location tracking allows for precise monitoring of deliveries and accurate ETAs.
              </p>
            </div>

            <div className="p-6 bg-section-grey rounded-lg">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Comprehensive Insurance</h3>
              <p className="text-steel-grey">
                All vehicles are covered by our £50k goods-in-transit and £5M public liability insurance.
              </p>
            </div>

            <div className="p-6 bg-section-grey rounded-lg">
              <div className="bg-secondary/10 p-4 rounded-full inline-flex mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Regular Maintenance</h3>
              <p className="text-steel-grey">
                Strict maintenance schedules ensure our fleet is reliable, safe, and always ready for service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-secondary">
        <div className="px-6 md:px-15 lg:px-20 2xl:px-30  text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Specific Vehicle Type?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Contact us to discuss your delivery requirements and we'll recommend the best vehicle for your needs.
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
