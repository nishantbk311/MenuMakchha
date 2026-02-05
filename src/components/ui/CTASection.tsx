
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  path: string;
  onAction?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ title, description, buttonText, onAction, path }) => {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-20 bg-primary-900 overflow-hidden relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
      >
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-primary-200 text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link to={path}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAction}
            className="bg-mint-400 cursor-pointer hover:bg-mint-500 text-primary-900 font-bold py-5 px-12 rounded-2xl transition-all flex items-center gap-3 text-xl group active:scale-95 shadow-none ring-0"
            >
            {buttonText}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
            </Link>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        animate={{ opacity: [0.03, 0.08, 0.03], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"
      ></motion.div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint-400/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-700/50 to-transparent -translate-y-1/2"></div>
    </section>
  );
};
