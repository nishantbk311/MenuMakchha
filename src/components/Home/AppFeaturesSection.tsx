
import React from 'react';
import { LayoutList, QrCode, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

 const AppFeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Digital Menu Management",
      desc: "Businesses can add their menu items to the app with real-time updates.",
      icon: <LayoutList className="w-6 h-6" />
    },
    {
      title: "QR Code Access",
      desc: "Customers view the menu instantly by scanning a QR code provided by the establishment.",
      icon: <QrCode className="w-6 h-6" />
    },
    {
      title: "Paperless Solution",
      desc: "Eliminate the need for physical menus, promoting a hygienic and eco-friendly approach.",
      icon: <Leaf className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-500 uppercase tracking-wide leading-snug max-w-4xl mx-auto">
            Menumakchha is an app designed for Cafes, Restaurants, and Hotels to create and manage their menus digitally.
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-mint-400 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-shadow duration-300 hover:shadow-xl cursor-default"
            >
              <div className="w-12 h-12 bg-mint-400/20 text-mint-600 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#" className="transition-transform hover:scale-105 active:scale-95">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14" />
          </a>
          <a href="#" className="transition-transform hover:scale-105 active:scale-95">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-14" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;