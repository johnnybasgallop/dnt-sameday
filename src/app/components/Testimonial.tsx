'use client';

import { useEffect, useState } from 'react';

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    quote: "DNT Sameday has been our go-to courier for over 5 years. Their speed and reliability are unmatched in the industry.",
    author: "James Wilson",
    company: "Tech Solutions Ltd"
  },
  {
    id: 2,
    quote: "When we need something delivered urgently, DNT Sameday is our first call. Their 45-minute response time has saved our business on several occasions.",
    author: "Sarah Johnson",
    company: "Johnson Manufacturing"
  },
  {
    id: 3,
    quote: "We've tried many courier services in the past, but none compare to the professionalism and efficiency of DNT Sameday.",
    author: "Michael Brown",
    company: "Brown & Associates"
  },
  {
    id: 4,
    quote: "The peace of mind that comes with DNT Sameday's comprehensive insurance coverage is invaluable to our business.",
    author: "Jennifer Davis",
    company: "Davis Retail Group"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-section-grey py-16">
      <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary">What Our Clients Say</h2>
          <p className="text-steel-grey mt-2">Trusted by businesses across the UK</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Content */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>

            <p className="text-lg text-center mb-6 text-primary">{testimonials[currentIndex].quote}</p>

            <div className="text-center">
              <p className="font-bold text-primary">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-steel-grey">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white border border-light-grey hover:bg-section-grey transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="grey">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots navigation */}
            <div className="flex items-center gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-secondary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white border border-light-grey hover:bg-section-grey transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="grey">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
