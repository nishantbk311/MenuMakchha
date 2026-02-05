import React from "react";
// import {
//   BookOpen,
//   Users2,
//   ChefHat,
//   Smile,
//   Smartphone,
//   QrCode,
// } from "lucide-react";
import { motion } from "framer-motion";
import Gifs from "../ui/Gifs";
import cuisine from "../../assets/Gifs/cuisine.lottie?url";
import foodApp from "../../assets/Gifs/foodApp.lottie?url";
import menu from "../../assets/Gifs/menu.lottie?url";
import order from "../../assets/Gifs/order.lottie?url";
import scanMenu from "../../assets/Gifs/scanMenu.lottie?url";
import scanMenuYellow from "../../assets/Gifs/scanMenuYellow.lottie?url";
import social from "../../assets/Gifs/social.lottie?url";
import taste from "../../assets/Gifs/taste.lottie?url";



export const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: "Menu Discovery",
      description:
        "Explore a variety of restaurant menus effortlessly with our intuitive discovery engine.",
      //   icon: <BookOpen className="w-8 h-8" />,
      icon: (
        <Gifs
          src={menu}
        />
      ),
      
    },
    {
      title: "Social Dining",
      description:
        "Connect with other food enthusiasts and share your unique dining experiences and reviews.",
      //   icon: <Users2 className="w-8 h-8" />,
      icon: (
        <Gifs
          src={social}
        />
      ),
      
    },
    {
      title: "Creative Cuisine",
      description:
        "Indulge in visually captivating dishes and discover the latest culinary innovations.",
      //   icon: <ChefHat className="w-8 h-8" />,
      icon: (
        <Gifs
          src={cuisine}
          className="-translate-y-6"
        />
      ),
      
    },
    {
      title: "Taste Identity",
      description:
        "Discover the unique flavors and signature styles that define each restaurant's individual identity.",
      //   icon: <Smile className="w-8 h-8" />,
      icon: (
        <Gifs
          src={taste}
        />
      ),
      
    },
    {
      title: "User-Friendly Ordering",
      description:
        "Empower users to self-order with ease, enhancing their control and dining experience.",
      //   icon: <Smartphone className="w-8 h-8" />,
      icon: (
        <Gifs
          src={order}
        />
      ),
      
    },
    {
      title: "QR Stand Integration",
      description:
        "Easily access menus with our QR Stand feature, enabling quick scanning for instant viewing.",
      //   icon: <QrCode className="w-8 h-8" />,
      icon: (
        <Gifs
          src={scanMenu}
        />
      ),
      
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Split entrance transition from hover transition
              transition={{
                opacity: { duration: 0.6, delay: idx * 0.1 },
                y: { duration: 0.6, delay: idx * 0.1 },
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                zIndex: 10,
                boxShadow: "0 10px 20px -5px rgba(5,15,51,0.15)",
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              // Removed transition-all to fix slow hover
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-mint-400/30 flex flex-col items-center text-center space-y-6 relative"
            >
              <div
                className={`w-auto h-auto rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 `}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-500 tracking-tight transition-colors group-hover:text-primary-900">
                {service.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-600 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
