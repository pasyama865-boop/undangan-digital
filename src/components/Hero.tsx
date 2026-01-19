"use client"; // Wajib karena kita pakai animasi (Framer Motion)

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ guestName = "Tamu Undangan" }: { guestName?: string }) {
  return (
    // 1. CONTAINER UTAMA: Relatif agar anak-anaknya bisa 'absolute'
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center">
      
      {/* 2. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-hero.jpg" // Pastikan gambar ada di folder public/images
          alt="Wedding Background"
          fill // Fitur Next.js: Otomatis memenuhi layar
          className="object-cover brightness-50" // brightness-50 = Gelapkan gambar agar teks terbaca
          priority // Prioritas loading agar tidak kedip
        />
      </div>

      {/* 3. KONTEN TEKS (Di atas background / z-10) */}
      <div className="relative z-10 px-6 text-white space-y-6">
        
        {/* Animasi Judul Undangan */}
        <motion.p
          initial={{ opacity: 0, y: -20 }} // Keadaan awal: Transparan & agak ke atas
          animate={{ opacity: 1, y: 0 }}   // Keadaan akhir: Muncul normal
          transition={{ duration: 1 }}     // Durasi animasi 1 detik
          className="font-body tracking-[0.2em] text-sm uppercase"
        >
          The Wedding of
        </motion.p>

        {/* Animasi Nama Pengantin */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }} // Delay 0.5 detik biar munculnya gantian
          className="font-heading text-5xl md:text-7xl text-gold drop-shadow-lg"
        >
          Romeo <br /> <span className="text-3xl">&</span> Juliet
        </motion.h1>

        {/* Animasi Nama Tamu (Personalized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
        >
          <p className="font-body text-xs mb-2">Kepada Yth:</p>
          <h2 className="font-heading text-xl font-bold">{guestName}</h2>
        </motion.div>

      </div>

      {/* 4. ANIMASI SCROLL (Panah ke bawah) */}
      <motion.div
        animate={{ y: [0, 10, 0] }} // Bergerak naik turun (bouncing)
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 z-10 text-white"
      >
        <p className="text-xs mb-2">Scroll Down</p>
        {/* Ikon panah sederhana pakai CSS border */}
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 mx-auto">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>

    </section>
  );
}