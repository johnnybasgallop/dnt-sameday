'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // In a real application, you would send the form data to your server or a form handling service

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general'
      });
    }, 1500);
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Available 24/7 to handle your delivery needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              <p className="text-steel-grey mb-8">
                Have a question or need a quote? Our team is available 24/7, 365 days a year to assist you with all your courier and delivery needs.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-steel-grey">
                      <a href="tel:+441234567890" className="hover:text-secondary">+44 (0) 1234 567890</a>
                    </p>
                    <p className="text-sm text-steel-grey mt-1">Available 24/7 for urgent deliveries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-steel-grey">
                      <a href="mailto:info@dntsameday.co.uk" className="hover:text-secondary">info@dntsameday.co.uk</a>
                    </p>
                    <p className="text-sm text-steel-grey mt-1">For quotes and general inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Address</h3>
                    <p className="text-steel-grey">
                      DNT Sameday<br />
                      123 Delivery Road<br />
                      Bracknell<br />
                      Berkshire, RG12 1AB
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden h-[300px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19996.94030867304!2d-0.7751522866640696!3d51.41328221327028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767b048553b8b1%3A0xb49e57625fab0907!2sBracknell%2C%20UK!5e0!3m2!1sen!2sus!4v1685542267857!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DNT Sameday Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-section-grey p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-md p-4 mb-6">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium">Message Sent Successfully!</p>
                        <p className="text-sm mt-1">Thank you for contacting us. We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-primary font-medium mb-1">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-primary font-medium mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-primary font-medium mb-1">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-primary font-medium mb-1">Company</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="service" className="block text-primary font-medium mb-1">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sameday">Same-Day Delivery</option>
                        <option value="nextday">Next-Day Delivery</option>
                        <option value="urgent">Urgent Freight</option>
                        <option value="contract">Contract Runs</option>
                        <option value="international">International Deliveries</option>
                        <option value="specialized">Specialized Deliveries</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="block text-primary font-medium mb-1">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-light-grey rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        required
                      ></textarea>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-3 mb-4">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full flex justify-center items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-section-grey">
        <div className="px-4 md:px-8 lg:px-10 2xl:px-12  ">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Business Hours</h2>
            <p className="text-steel-grey mt-2">
              We're available when you need us.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-4">Standard Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed (On Call)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-4">Urgent Deliveries</h3>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7, 365 days a year</span>
                </div>
                <p className="text-steel-grey">
                  For urgent same-day deliveries outside of office hours, please call our 24/7 hotline. We're always ready to respond to your time-critical needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
