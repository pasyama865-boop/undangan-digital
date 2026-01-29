"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Target date for the countdown (change this to your wedding date)
const targetDate = new Date("February 21, 2026 00:00:00").getTime();

export default function LiveCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-6 bg-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl mb-8 text-gold"
        >
          Hitung Mundur Menuju Hari Bahagia Kami
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.days}</div>
            <div className="text-sm sm:text-base text-gray-300">Hari</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.hours}</div>
            <div className="text-sm sm:text-base text-gray-300">Jam</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.minutes}</div>
            <div className="text-sm sm:text-base text-gray-300">Menit</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.seconds}</div>
            <div className="text-sm sm:text-base text-gray-300">Detik</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}