
import React from 'react';
import { motion } from 'framer-motion';

export const ServicesHero: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 text-center relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-mint-400 rounded-full blur-[100px] -mr-48 -mt-48"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-primary-500 tracking-tight">
          What We <span className="text-mint-500">Do</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Save time managing advertising & content for your business with our specialized hospitality solutions.
        </p>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1.5 bg-mint-400 mx-auto rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
};
