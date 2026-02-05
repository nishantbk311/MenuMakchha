
import React from 'react';
import { 
  Store, 
  Coffee, 
  UtensilsCrossed, 
  Beer, 
  Pizza, 
  Zap, 
  IceCream, 
  Network, 
  Croissant, 
  Cloud 
} from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessCard: React.FC<{ title: string; icon: React.ReactNode; index: number }> = ({ title, icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
    className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center space-y-4 transition-all duration-300 group cursor-default"
  >
    <div className="text-primary-500 group-hover:text-mint-500 transition-colors duration-300">
      {icon}
    </div>
    <span className="font-bold text-primary-500 text-sm md:text-base leading-tight">
      {title}
    </span>
  </motion.div>
);

export const BusinessTypesSection: React.FC = () => {
  const types = [
    { name: "Food courts & canteens", icon: <Store className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Cafe", icon: <Coffee className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Fine dine", icon: <UtensilsCrossed className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Bar & brewery", icon: <Beer className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Pizzeria", icon: <Pizza className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "QSR", icon: <Zap className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Desserts", icon: <IceCream className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Large chains", icon: <Network className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Bakery", icon: <Croissant className="w-10 h-10" strokeWidth={1.5} /> },
    { name: "Cloud Kitchens", icon: <Cloud className="w-10 h-10" strokeWidth={1.5} /> }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-500">
            Built for all types of food business
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The all-in-one Restaurant Management System for all types of restaurant formats and food outlets
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-mint-400 mx-auto rounded-full mt-6"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {types.map((type, idx) => (
            <BusinessCard key={idx} title={type.name} icon={type.icon} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
