
import React from 'react';
import { Target, ShieldCheck, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutValues: React.FC = () => {
  const values = [
    { title: "Innovation", icon: <Target className="w-8 h-8" />, desc: "Constantly pushing boundaries to simplify hospitality operations." },
    { title: "Integrity", icon: <ShieldCheck className="w-8 h-8" />, desc: "Building trust through transparency and secure digital solutions." },
    { title: "Hospitality", icon: <Heart className="w-8 h-8" />, desc: "Rooted in the warm, welcoming spirit of Nepali culture." },
    { title: "Community", icon: <Users className="w-8 h-8" />, desc: "Supporting local businesses to grow in a digital economy." }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold text-primary-500">Our Core Values</h2>
          <div className="h-1 w-20 bg-mint-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Transition for the entrance animation only
              transition={{ 
                opacity: { duration: 0.6, delay: idx * 0.1 },
                y: { duration: 0.6, delay: idx * 0.1 }
              }}
              whileHover={{ 
                y: -12, 
                transition: { type: "spring", stiffness: 400, damping: 25 } 
              }}
              className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-mint-50 text-mint-600 rounded-2xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">{value.title}</h3>
              <p className="text-slate-500 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
