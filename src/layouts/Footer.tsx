import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { GrAppleAppStore } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-8 pb-4 ">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="MenuMakchha Logo"
              className="h-10 md:h-12 object-contain"
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Discover MenuMakchha: Nepal's top restaurant, cafe, and hotel
              chain offering authentic Nepali and international cuisine. Explore
              our diverse menu and locations nationwide for unparalleled dining
              and hospitality. Elevate your experience with MenuMakchha today!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#F1F4FD] rounded-2xl flex items-center justify-center text-primary-500 shadow-sm border border-white hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#F1F4FD] rounded-2xl flex items-center justify-center text-primary-500 shadow-sm border border-white hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary-500 uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="mt-0.5 w-11 h-11 flex-shrink-0 rounded-2xl bg-[#F1F4FD] text-primary-500 border border-white flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-500 font-medium text-[15px]">
                    +977 9802590685
                  </p>
                  <p className="text-gray-400 text-xs font-medium">
                    Support Number
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="mt-0.5 w-11 h-11 flex-shrink-0 rounded-2xl bg-[#F1F4FD] text-primary-500 border border-white flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-500 font-medium text-[15px] break-all leading-snug">
                    menumakchha@gmail.com
                  </p>
                  <p className="text-gray-400 text-xs font-medium">
                    Support Email
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="mt-0.5 w-11 h-11 flex-shrink-0 rounded-2xl bg-[#F1F4FD] text-primary-500 border border-white flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-primary-500 font-medium text-[15px]">
                    Golpark-3, Butwal, Nepal
                  </p>
                  <p className="text-gray-400 text-xs font-medium">Address</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Pages + Download App (side by side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-12">
            {/* Pages */}
            <div className="space-y-6 ">
              <h3 className="text-lg font-bold text-primary-500 uppercase tracking-wide">
                Pages
              </h3>
              <ul className="space-y-3">
                {["Home", "About", "Contact", "Services"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-500 transition-all duration-200 inline-block font-medium"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download App */}
            <div className="space-y-4 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-center text-primary-500 uppercase tracking-wide">
                Download App
              </h3>

              <div className="flex justify-center z-10">
                <img src="qr.webp" alt="MenuMakchha QR" className="w-32 h-32" />
              </div>

              {/* Buttons */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:w-full w-auto cursor-pointer bg-primary-900 text-white px-8 py-4  rounded-xl flex items-center justify-center md:justify-start space-x-3 transition-shadow hover:shadow-lg"
              >
                <GrAppleAppStore className="w-6 h-6" />
                <div className="text-center md:text-left">
                  <p className="text-[9px] uppercase leading-none opacity-80">
                    Download on the
                  </p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:w-full w-auto bg-primary-900 cursor-pointer text-white px-8 py-4 rounded-xl flex items-center justify-center md:justify-start space-x-3 transition-shadow hover:shadow-lg"
              >
                <FaGooglePlay className="w-6 h-6" />
                <div className="text-center md:text-left">
                  <p className="text-[9px] uppercase leading-none opacity-80">
                    Get it on
                  </p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-gray-400 font-medium tracking-wide">
            &copy; {currentYear} MenuMakchha. All rights reserved by{" "}
            <span className="text-primary-500 font-bold">
              NCT Soft. PVT. LTD
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
