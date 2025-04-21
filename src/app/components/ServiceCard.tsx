import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  slug: string;
}

export default function ServiceCard({ title, description, icon, features, slug }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-[var(--light-grey)] transition-transform hover:translate-y-[-5px]">
      <div className="text-[var(--secondary)] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{title}</h3>
      <p className="text-[var(--steel-grey)] mb-4">{description}</p>

      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--secondary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${slug}`}
        className="text-[var(--secondary)] font-medium hover:text-[var(--accent-hover)] flex items-center"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
