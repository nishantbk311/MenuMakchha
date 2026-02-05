
import React from 'react';
import { motion } from 'framer-motion';

export const ContactHero: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <motion.div 
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-mint-100 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-100 rounded-full blur-[120px]"
        ></motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <div className="flex items-center justify-center gap-3">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-mint-400"
          ></motion.div>
          <span className="text-mint-600 font-bold tracking-[0.3em] uppercase text-sm">Get in Touch</span>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-mint-400"
          ></motion.div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-primary-500 tracking-tight">
          We're here to <span className="text-mint-500">help!</span>
        </h1>
      </motion.div>
    </section>
  );
};
