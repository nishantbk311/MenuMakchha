
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

 const ElevateSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 w-full border-t border-slate-100 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary-500 tracking-tight">
          Elevate Your Restaurant's Profile!
        </h2>

        <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
          <span className="font-bold text-primary-500">Menumakchha.com</span>, an innovative QR menu service designed to redefine the dining experience for both restaurants and customers. In an era where convenience, safety, and efficiency are paramount, Menumakchha.com offers a comprehensive solution to digitize menus, streamline operations, and elevate customer satisfaction.
        </p>

        <div className="pt-4">
        <Link to="/register">
          <motion.button 
            // Fixed: changed 'shadow' to 'boxShadow' as 'shadow' is not a valid Framer Motion property
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            className="bg-mint-400 cursor-pointer hover:bg-mint-500 text-primary-900 font-bold py-4 px-10 rounded-xl shadow-lg shadow-mint-400/20 transform transition-all duration-300 text-lg"
          >
            Register Your Restaurant
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ElevateSection;