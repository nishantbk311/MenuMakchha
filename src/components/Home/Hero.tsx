import React from "react";
import { motion } from "framer-motion";
import tablet from "../../assets/tablet.png";
import mobile from "../../assets/mobile.png";
import dish from "../../assets/dish.png";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero-gradient pt-8 pb-0 md:pb-28 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-primary-400/10 blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 rounded-full bg-mint-400/5 blur-3xl"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center relative z-10">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-[2.5rem] md:text-7xl font-black text-white leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Welcome to <br />
            <span className="text-white">MenuMakchha!</span>
          </motion.h1>
          <motion.p
            className="text-xl text-primary-100 leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We're dedicated to bringing you the finest dining experiences from a
            variety of restaurants. Dive into our curated menus and uncover your
            next culinary delight!
          </motion.p>
          <Link to="/register">
          <motion.button
            className="bg-mint-400 hover:bg-white text-primary-500 text-xl font-black px-10 py-5 cursor-pointer rounded-full shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Register Your Restaurant
          </motion.button>
            </Link>
        </motion.div>

        <div className="relative lg:py-0 h-full flex items-center justify-center">
          {/* Main Hero Image Cluster Container */}
          <div className="relative w-full max-w-3xl h-[400px] md:h-[500px] flex justify-center items-center">
            {/* 1. Phone Mockup (Left) */}
            <motion.img
              src={mobile}
              alt="Mobile Mockup"
              className="absolute left-4 md:left-28 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-[80px] md:w-[120px] lg:w-[150px] hover:rotate-3 transition-all duration-300 hover:z-50 hover:scale-105"
              initial={{ opacity: 1, scale: 1, x: -40, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: -3 }}
              transition={{ duration: 0.3,ease: "easeOut" }}
            />

            {/* 2. Plate of food (Center) */}
            <motion.img
              src={dish}
              alt="Salmon Dish"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-[150px] md:w-[280px] lg:w-[360px] hover:rotate-12 transition-all duration-500 hover:z-50 hover:scale-105 rounded-full"
              initial={{ opacity: 1, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.3,ease: "easeOut" }}
            />

            {/* 3. Tablet Mockup (Right) */}
            <motion.img
              src={tablet}
              alt="Tablet Mockup"
              className="absolute right-0 md:right-22 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-[100px] md:w-[150px] lg:w-[200px] hover:-rotate-3 transition-all duration-300 hover:z-50 hover:scale-105"
              initial={{ opacity: 1, scale: 0.9, x: 40, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotate: 3 }}
              transition={{ duration: 0.3,ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
