
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactItem = ({ icon: Icon, title, content, isMint = false, index }: { icon: any, title: string, content: React.ReactNode, isMint?: boolean, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex gap-6 items-start group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
      isMint 
        ? 'bg-mint-400 text-primary-900 shadow-mint-400/20' 
        : 'bg-primary-500 text-white '
    }`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="space-y-1">
      <h3 className="text-xl font-bold text-primary-500 group-hover:text-primary-900 transition-colors">{title}</h3>
      <div className="text-slate-500 text-lg leading-snug">
        {content}
      </div>
    </div>
  </motion.div>
);

export const ContactInfo: React.FC = () => {
  return (
    <div className="lg:col-span-5 space-y-12 overflow-visible pl-2">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-slate-600 text-lg md:text-xl leading-relaxed"
      >
        Whether you're a restaurant owner interested in joining <span className="text-primary-500 font-bold">Menumakchha</span> or a customer with questions, our team is ready to assist you.
      </motion.p>

      <div className="space-y-10">
        <ContactItem 
          index={0}
          icon={MapPin} 
          title="Our Address" 
          content={<p>Golpark-3<br />Butwal, Nepal</p>} 
        />
        
        <ContactItem 
          index={1}
          icon={Phone} 
          title="Contact Info" 
          content={
            <div className="space-y-1">
              <p className="hover:text-mint-600 transition-colors cursor-pointer">+977 71 537167</p>
              <p className="hover:text-mint-600 transition-colors cursor-pointer">contact@nctbutwal.com.np</p>
            </div>
          } 
        />
        
        <ContactItem 
          index={2}
          icon={Mail} 
          title="Customer Support" 
          content={<p>Available 24/7 for our registered hospitality partners.</p>}
        />
      </div>
    </div>
  );
};
