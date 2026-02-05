
import React from 'react';
import { motion } from 'framer-motion';

export const AboutEssence: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight tracking-tight">
              Discover the Essence of <br />
              MenuMakchha
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                At <span className="font-bold text-primary-500">MenuMakchha</span>, we take immense pride in being Nepal's top restaurant, cafe, and hotel chain partner, renowned for offering an exquisite blend of authentic Nepali and international cuisine.
              </p>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                Our mission is to provide an unparalleled dining and hospitality experience that showcases the rich culinary heritage and vibrant flavors of Nepal. We bridge the gap between tradition and technology to create a safer, more efficient dining environment for everyone.
              </p>
            </div>

            <div className="pt-6 flex items-center space-x-4">
              <span className="text-mint-500 font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                Authentic Nepali Hospitality
              </span>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-mint-400"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] flex items-center justify-center lg:justify-end">
              {/* Back Image (Top Left) */}
              <motion.div 
                whileInView={{ rotate: -2, y: 0 }}
                initial={{ rotate: 0, y: 20 }}
                whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  scale: { type: 'spring', stiffness: 300, damping: 20 },
                  zIndex: { duration: 0 }
                }}
                className="absolute top-0 left-0 w-[70%] h-[85%] rounded-[2rem] overflow-hidden shadow-xl z-0 transform cursor-pointer transition-shadow hover:shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Restaurant Interior" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Front Image (Bottom Right) */}
              <motion.div 
                whileInView={{ rotate: 2, y: 0 }}
                initial={{ rotate: 0, y: 40 }}
                whileHover={{ scale: 1.05, zIndex: 30, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0, // No delay on hover transition
                  scale: { type: 'spring', stiffness: 300, damping: 20 },
                  zIndex: { duration: 0 }
                }}
                className="absolute bottom-0 right-0 w-[70%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10 transform cursor-pointer transition-shadow hover:shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200" alt="Dining Experience" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
