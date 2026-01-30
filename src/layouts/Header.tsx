import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  const handleLinkClick = (name: string) => {
    setActiveTab(name);
    setTimeout(() => setIsMenuOpen(false), 250);
  };

  // const springConfig = { type: "spring" as const, stiffness: 260, damping: 20 };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 overflow-visible">
      <div className="container relative ">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center z-10">
            <img
              src={logo}
              alt="MenuMakchha Logo"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 lg:space-x-12">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative py-2 text-lg font-medium transition-colors duration-200 group ${
                    isActive
                      ? "text-primary-500"
                      : "text-primary-500/60 hover:text-primary-500"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 h-[3px] w-full bg-mint-400 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-mint-400 opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary-500 cursor-pointer text-white px-7 py-2.5 rounded-xl font-medium text-[17px] transition-all duration-100 shadow-sm"
            >
              Register
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-mint-400 cursor-pointer text-primary-500 px-9 py-2.5 rounded-xl font-medium text-[17px] transition-all duration-100 shadow-sm"
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center z-10 -mr-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-500 focus:outline-none flex items-center justify-center w-12 h-12 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (content-sized) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 w-full bg-white z-[60] md:hidden rounded-b-2xl shadow-lg border border-gray-100 flex flex-col"
          >
            {/* Navigation Links */}
            <div className="flex flex-col py-2">
              {navLinks.map((link, idx) => {
                const isActive = activeTab === link.name;
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => handleLinkClick(link.name)}
                    className={`relative px-4 py-4 text-lg font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-500"
                        : "text-gray-600 hover:text-primary-500"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-indicator"
                        className="absolute top-0 left-0 w-1.5 h-full bg-mint-400 rounded-full"
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="px-4 py-4 flex flex-col space-y-2 border-t border-gray-100">
              <button className="w-full bg-primary-900 text-white py-2 rounded-xl font-bold text-lg shadow-sm active:bg-primary-800 transition-colors">
                Register
              </button>
              <button className="w-full bg-mint-400 text-primary-900 py-2 rounded-xl font-bold text-lg shadow-sm active:bg-mint-500 transition-colors">
                Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
