"use client";

import { useState } from "react";
import { submitRsvp } from "@/app/actions"; // Import fungsi server tadi
import { motion } from "framer-motion";

export default function Rsvp() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    
    const result = await submitRsvp(formData);
    
    if (result.success) {
      setStatus("success");
      setFeedback(result.message);
    } else {
      setStatus("error");
      setFeedback(result.message || "Terjadi kesalahan");
    }
  }

  return (
    <section className="py-20 px-6 bg-white text-dark mb-20">
      <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
        
        <h2 className="font-heading text-3xl text-center mb-8 text-gold">RSVP & Doa</h2>

        {status === "success" ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-6 bg-green-100 text-green-800 rounded-xl"
          >
            <p className="font-bold">✨ {feedback}</p>
            <p className="text-sm mt-2">Sampai jumpa di hari bahagia kami!</p>
            <button 
              onClick={() => setStatus("idle")} 
              className="mt-4 text-xs underline text-green-600"
            >
              Kirim lagi
            </button>
          </motion.div>
        ) : (
          <form action={handleSubmit} className="space-y-4">
            {/* Input Nama */}
            <div>
              <label className="block text-sm font-bold mb-2">Nama Anda</label>
              <input 
                name="nama"
                type="text" 
                required
                placeholder="Masukkan nama..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            {/* Input Kehadiran */}
            <div>
              <label className="block text-sm font-bold mb-2">Konfirmasi Kehadiran</label>
              <select 
                name="attendance"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold bg-white"
              >
                <option value="Hadir">Saya akan hadir</option>
                <option value="Tidak Hadir">Maaf, tidak bisa hadir</option>
                <option value="Ragu-ragu">Masih ragu-ragu</option>
              </select>
            </div>

            {/* Input Pesan */}
            <div>
              <label className="block text-sm font-bold mb-2">Ucapan & Doa</label>
              <textarea 
                name="message"
                rows={3}
                placeholder="Tulis ucapan selamat..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
              ></textarea>
            </div>

            {/* Tombol Submit */}
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full py-3 bg-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Konfirmasi"}
            </button>
            
            {status === "error" && (
              <p className="text-red-500 text-center text-sm">{feedback}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}