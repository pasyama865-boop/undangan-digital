"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Event() {
  return (
    <section className="py-20 px-6 bg-dark text-white relative">
      {/* Background Pattern Tipis */}
      <div className="absolute inset-0 bg-[url('/images/bg-hero.jpg')] bg-fixed bg-cover opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-3xl text-gold"
        >
          Waktu & Tempat
        </motion.h2>

        {/* Container Kartu Acara */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kartu Akad */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-gold/50 transition-colors"
          >
            <h3 className="font-heading text-2xl mb-4">Akad Nikah</h3>
            <div className="space-y-4 font-body text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                <span>Sabtu, 20 Februari 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span>08:00 WIB - Selesai</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Masjid Agung Verona</span>
              </div>
            </div>
          </motion.div>

          {/* Kartu Resepsi */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-gold/50 transition-colors"
          >
            <h3 className="font-heading text-2xl mb-4">Resepsi</h3>
            <div className="space-y-4 font-body text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                <span>Minggu, 21 Februari 2026</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span>11:00 - 13:00 WIB</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Ballroom Hotel Verona</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- AREA MAPS GOOGLE (YANG BARU KITA PASANG) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative z-20 w-70 max-w-4xl mx-auto mt-12"
        >
          {/* Container Responsif */}
          <div className="relative w-70 h-64 md:h-96 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.500147883807!2d107.29204030000001!3d-6.3291789000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69762a188e475f%3A0x4b0d4144be30e5fd!2sMercure%20Hotel%20Karawang!5e0!3m2!1sid!2sid!4v1768845709334!5m2!1sid!2sid" /* URL DARI KAMU */
              width="100%"
              height="100%"
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </motion.div>

        {/* Tombol Buka Rute */}
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="mt-8"
        >
          <a 
            href="https://maps.app.goo.gl/8E7xHbCiSqAmJj16A" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold text-dark font-bold py-3 px-8 rounded-full hover:bg-white transition-colors shadow-lg shadow-gold/20"
          >
            Buka Rute 
          </a>
        </motion.div>

      </div>
    </section>
  );
}