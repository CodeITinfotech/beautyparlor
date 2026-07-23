export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  duration?: string;
  category: string;
  suitableFor?: string;
  benefits?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface BridalPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: {
    [key: string]: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  mapEmbed: string;
  googleMapsUrl?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
