"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Couple() {
  return (
    <section className="py-20 px-6 bg-white text-dark text-center overflow-hidden">
      
      {/* Judul Seksi */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
        className="mb-12"
      >
        <p className="font-heading text-gold text-xl mb-2">Mempelai</p>
        <h2 className="font-heading text-3xl font-bold">Groom & Bride</h2>
        <p className="font-body text-gray-600 mt-4 max-w-lg mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
        </p>
      </motion.div>

      {/* Grid Foto Mempelai */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        
        {/* Pria */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gold p-1 overflow-hidden shadow-xl">
            <Image
              src="/images/cowok.jpg" 
              alt="Mempelai Pria"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="font-heading text-2xl font-bold mt-6">Romeo Montague</h3>
          <p className="font-body text-gray-500">Putra Bpk. Montague & Ibu Montague</p>
        </motion.div>

        {/* Simbol '&' di tengah */}
        <div className="font-heading text-gold text-4xl">&</div>

        {/* Wanita */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gold p-1 overflow-hidden shadow-xl">
            <Image
              src="/images/cewek.jpg" 
              alt="Mempelai Wanita"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h3 className="font-heading text-2xl font-bold mt-6">Juliet Capulet</h3>
          <p className="font-body text-gray-500">Putri Bpk. Capulet & Ibu Capulet</p>
        </motion.div>

      </div>
    </section>
  );
}