
import React from 'react';
import {motion} from 'framer-motion';
import whyus from "../../assets/whyus.png"

 const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content Side */}
           <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col z-10"
          >

         
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-mint-600 font-bold tracking-widest uppercase text-sm">
                Why Choose Us?
              </span>
              <div className="h-[2px] w-12 bg-mint-400 rounded-full"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-500 leading-tight">
              We make you <br />
              to look <br />
              <span className="text-mint-400 relative inline-block">
                different
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 7C30 2 70 2 100 7" stroke="#3AE39E" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                <span className="font-bold text-primary-500">Menumakchha.com</span> aims to provide restaurants with a seamless platform to digitally create, manage, and distribute their menus via QR codes.
              </p>
              
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                By eliminating the need for traditional paper menus, our service enhances safety measures, reduces operational costs, and delivers a modern dining experience tailored to the needs of today's consumers.
              </p>
            </div>
          </div>
           </motion.div>

          {/* Right Image Side */}
          {/* Right Image Side - Perfectly fitted leaf shape */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center "
          >
            <div className="relative w-full max-w-[550px] aspect-square md:aspect-[4/3] overflow-hidden rounded-tr-[80px] rounded-bl-[80px] ">
              <img 
                src={whyus}
                alt="Professional Restaurant Setting" 
                className="w-full h-full object-cover"
              />
              {/* Subtle inner shadow for depth */}
              {/* <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-tr-[80px] rounded-bl-[80px]"></div> */}
            </div>
            
            {/* Abstract Decorative Element (Optional, matches second image vibe) */}
            {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mint-400/10 rounded-full blur-3xl -z-10"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;