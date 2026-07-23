'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { galleryImages } from '@/data/testimonials';
import { ArrowRight } from 'lucide-react';

export function GalleryPreview() {
  const featuredImages = galleryImages.slice(0, 6);

  return (
    <section className="section-padding bg-[#333333]">
      <div className="container-custom">
        <SectionHeading
          title="Our Gallery"
          subtitle="See the stunning transformations and beautiful work from our studio"
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredImages.map((image, index) => (
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
              <div className="aspect-square bg-gradient-to-br from-[#C58A73] to-[#D6B25E] flex items-center justify-center">
                <span className="text-white/50 font-semibold">{image.alt}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
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
          <Link href="/gallery">
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
