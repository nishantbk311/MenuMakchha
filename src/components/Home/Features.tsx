import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Clock, ArrowDownUp, Tag, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, index }) => (
  <motion.div
    className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    <div className="mb-6 h-16 w-16 flex items-center justify-center text-primary-500 group-hover:text-mint-400 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-[#102359] font-bold text-base md:text-lg leading-tight px-2">
      {title}
    </h3>
  </motion.div>
);

const Features: React.FC = () => {
  const iconSize = 48;
  const strokeWidth = 2;

  const features = [
    {
      title: "Digital Presence",
      icon: <Monitor size={iconSize} strokeWidth={strokeWidth} />
    },
    {
      title: "Conditional Recommendations",
      icon: <Clock size={iconSize} strokeWidth={strokeWidth} />
    },
    {
      title: "Intelligent Sorting",
      icon: <ArrowDownUp size={iconSize} strokeWidth={strokeWidth} />
    },
    {
      title: "Promo Code",
      icon: <Tag size={iconSize} strokeWidth={strokeWidth} />
    },
    {
      title: "Brand Enhancement",
      icon: <Award size={iconSize} strokeWidth={strokeWidth} />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} index={index} />
      ))}
    </div>
  );
};

export default Features;