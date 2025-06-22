"use client";

import { FC, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";

const VideoDemoSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.error("Playback error:", err);
    }
  };

  return (
    <section className="bg-white py-24 px-6" id="demo">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          See it in action
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-10 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A quick walkthrough of how you can generate report in just seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          
          className="relative w-full max-w-3xl mx-auto rounded-lg shadow-xl overflow-hidden aspect-video cursor-pointer transition-transform"
          onClick={togglePlayback}
        >
          <video
            ref={videoRef}
            src="/demo_comp.mp4"
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <PlayIcon className="w-20 h-20 text-white opacity-90" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
