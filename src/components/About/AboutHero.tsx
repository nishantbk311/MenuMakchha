
import React from 'react';
import { motion } from 'framer-motion';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-primary-500 overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-mint-400 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -45, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"
        ></motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto space-y-6"
      >
        <span className="text-mint-400 font-bold tracking-[0.3em] uppercase text-sm">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Pioneering the Future of <span className="text-mint-400">Hospitality</span>
        </h1>
        <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We are more than just a menu app. We are a team of dreamers and doers dedicated to enhancing how the world dines.
        </p>
      </motion.div>
    </section>
  );
};
