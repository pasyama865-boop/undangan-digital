"use client";
import { useState, useRef, useEffect } from "react";
import { Disc, Music } from "lucide-react"; // Ikon
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Play music automatically when component mounts
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      const playPromise = audioRef.current.play();
      // Handle autoplay rejection in some browsers
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay failed, user interaction required:", error);
          // Optionally reset state to paused if autoplay fails
          setIsPlaying(false);
        });
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="images/musik.mp3" loop />
      <motion.button
        onClick={togglePlay}
        whileTap={{ scale: 0.9 }}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white transition-all duration-500 ${
          isPlaying ? "bg-green-800 animate-spin-slow" : "bg-gray-800"
        }`}
        style={{ animationDuration: "3s" }}
      >
        {isPlaying ? (
          <Disc className="text-white w-6 h-6 animate-spin" />
        ) : (
          <Music className="text-white w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
}