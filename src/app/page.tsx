import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Testimonials from './components/Testimonial';

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <ServicesOverview />

      <Testimonials />

      <CtaSection />

      <Footer />
    </main>
  );
}
