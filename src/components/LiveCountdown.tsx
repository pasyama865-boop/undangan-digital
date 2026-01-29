"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl sm:text-4xl mb-8 text-gold"
        >
          Hitung Mundur Menuju Hari Bahagia Kami
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.days}</div>
            <div className="text-sm sm:text-base text-gray-300">Hari</div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.hours}</div>
            <div className="text-sm sm:text-base text-gray-300">Jam</div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.minutes}</div>
            <div className="text-sm sm:text-base text-gray-300">Menit</div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{timeLeft.seconds}</div>
            <div className="text-sm sm:text-base text-gray-300">Detik</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}