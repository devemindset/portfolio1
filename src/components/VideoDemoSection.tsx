"use client";

import { FC, useRef } from "react";
import { motion } from "framer-motion";

const VideoDemoSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlayback = async () => {
  const video = videoRef.current;
  if (!video) return;
  try {
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  } catch (err) {
    console.error("Playback error:", err);
  }
};
  return (
    <section className="bg-white py-24 px-6" id="demo">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title with fade-in */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          See it in action
        </motion.h2>

        {/* Subtitle with delay */}
        <motion.p
          className="text-gray-600 mb-10 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          A quick walkthrough of how you can validate anything in just seconds.
        </motion.p>

        {/* Animated video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="relative w-full max-w-3xl mx-auto rounded-lg shadow-xl overflow-hidden aspect-video cursor-pointer transition-transform"
        >
          <video
            ref={videoRef}
            src="/demo_comp.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onClick={togglePlayback}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
