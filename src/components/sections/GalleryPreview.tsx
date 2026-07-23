'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const BASE_PATH = '/beautyparlor';

// Google Business photo + high quality beauty images
const galleryImages = [
  { id: 1, src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljAS6XzzEkNbjtdBuhAATkHrnfLzEiX1yvbRBn6kECDueSx_nPz9dQGG85vIv6HIAOuJkpKbCQMHSfsydrsbIoulDTK2OvFTBYHbw8Jc-HeM9MlFMRUpw-OktLXzGUh-xL74UZmkJ7jzwH=w600-h800-k-no', alt: 'Dazzle Beauty Parlour', isGoogle: true },
  { id: 2, src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80', alt: 'Professional Makeup' },
  { id: 3, src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Bridal Makeup' },
  { id: 4, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80', alt: 'Hair Styling' },
  { id: 5, src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80', alt: 'Nail Art Design' },
  { id: 6, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Facial Treatment' },
];

export function GalleryPreview() {
  return (
    <section className="section-padding bg-[#333333]">
      <div className="container-custom">
        <SectionHeading
          title="Our Gallery"
          subtitle="See the stunning transformations and beautiful work from our studio"
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: index === 0 || index === 3 ? '1/2' : '1/1' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href={`${BASE_PATH}/gallery`}>
            <Button variant="secondary" size="lg">
              <span className="flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
