'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// High-quality beauty parlour images representing the studio services
const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', alt: 'Dazzle Beauty Parlour Reception', category: 'Studio' },
  { id: 2, src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80', alt: 'Professional Bridal Makeup', category: 'Bridal' },
  { id: 3, src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80', alt: 'HD Makeup Look', category: 'Makeup' },
  { id: 4, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80', alt: 'Eye Makeup Detail', category: 'Makeup' },
  { id: 5, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80', alt: 'Hair Styling Service', category: 'Hair' },
  { id: 6, src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80', alt: 'Hair Color Treatment', category: 'Hair' },
  { id: 7, src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80', alt: 'Luxury Manicure', category: 'Nails' },
  { id: 8, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', alt: 'Gel Nail Art', category: 'Nails' },
  { id: 9, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Facial Treatment', category: 'Skin' },
  { id: 10, src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80', alt: 'Bridal Updo Hairstyle', category: 'Bridal' },
  { id: 11, src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=800&q=80', alt: 'Party Makeup Look', category: 'Makeup' },
  { id: 12, src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80', alt: 'Salon Interior', category: 'Studio' },
];

const categories = ['All', 'Bridal', 'Hair', 'Makeup', 'Nails', 'Studio'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#C58A73] to-[#D6B25E]">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Explore our work and get inspired for your next look
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#C58A73] to-[#D6B25E] text-white'
                    : 'bg-[#F8E8EA] text-[#C58A73] hover:bg-[#C58A73] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div
                    className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white">
                        <span className="px-2 py-1 bg-[#C58A73] rounded text-xs mb-2 inline-block">
                          {image.category}
                        </span>
                        <h4 className="font-semibold text-sm">{image.alt}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#D6B25E] transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full rounded-xl"
              />
              <div className="mt-4 text-center text-white">
                <span className="px-3 py-1 bg-[#C58A73] rounded-full text-sm mb-2 inline-block">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
