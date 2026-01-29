"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Array of photo objects (you can fetch this from an API or CMS in the future)
const photos = [
  { id: 1, src: "/images/prewedding1.jpg", alt: "Foto Pre-Wedding 1" },
  { id: 2, src: "/images/prewedding2.jpg", alt: "Foto Pre-Wedding 2" },
  { id: 3, src: "/images/prewedding3.jpg", alt: "Foto Pre-Wedding 3" },
  { id: 4, src: "/images/prewedding4.jpg", alt: "Foto Pre-Wedding 4" },
  { id: 5, src: "/images/prewedding5.jpg", alt: "Foto Pre-Wedding 5" },
  { id: 6, src: "/images/prewedding6.jpg", alt: "Foto Pre-Wedding 6" },
];

export default function PhotoAlbum() {
  return (
    <section className="py-20 px-6 bg-white text-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl text-center mb-12 text-gold"
        >
          Galeri Foto
        </motion.h2>

        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-lg aspect-square"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500} // Placeholder width, will be overridden by fill
                  height={500} // Placeholder height, will be overridden by fill
                  className="object-cover w-full h-full"
                  priority={index < 3} // Load first 3 images with priority
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 italic py-12"
          >
            Galeri foto akan segera ditambahkan...
          </motion.p>
        )}
      </div>
    </section>
  );
}