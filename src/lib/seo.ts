import { businessInfo } from '@/data/business';

export const siteConfig = {
  name: businessInfo.name,
  description: businessInfo.description,
  url: 'https://codeitinfotech.io/beautyparlor',
  ogImage: '/og-image.jpg',
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: businessInfo.name,
  image: 'https://codeitinfotech.io/beautyparlor/og-image.jpg',
  description: businessInfo.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Beauty Lane',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.076,
    longitude: 72.8777,
  },
  telephone: businessInfo.phone,
  email: businessInfo.email,
  url: 'https://codeitinfotech.io/beautyparlor',
  priceRange: '₹₹',
  openingHoursSpecification: Object.entries(businessInfo.hours).map(([day, hours]) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
    opens: hours.split(' - ')[0],
    closes: hours.split(' - ')[1],
  })),
  sameAs: [
    businessInfo.social.instagram,
    businessInfo.social.facebook,
  ].filter(Boolean),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to book an appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we recommend booking an appointment in advance to ensure availability, especially during wedding season and weekends.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book for bridal makeup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For bridal makeup, we recommend booking at least 2-3 months in advance to secure your date and schedule trial sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are trial sessions included?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trial sessions are included in our Gold, Diamond, and Platinum bridal packages. They can be added to any service for an additional fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What brands do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use premium international brands including MAC, Huda Beauty, Charlotte Tilbury, Bobbi Brown, and many more for makeup. For skincare, we use Dermalogica, VLCC, and L\'Oreal Professionnel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide home services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer home services for bridal makeup and parties with a nominal travel charge. Contact us for details.',
      },
    },
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Bridal Makeup Package',
  description: 'Professional bridal makeup services with premium products',
  brand: {
    '@type': 'Brand',
    name: businessInfo.name,
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '25000',
    highPrice: '125000',
    priceCurrency: 'INR',
  },
};
