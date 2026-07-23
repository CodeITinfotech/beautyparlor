'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export function ServicesPreview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Discover our comprehensive range of beauty treatments and services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
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
          <Link href="/services">
            <Button variant="outline" size="lg">
              <span className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
