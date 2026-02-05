
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  onBackHome?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBackHome }) => {
  return (
    <div className="flex-grow flex items-center justify-center px-6 py-12 md:py-24">
      <div className="max-w-xl w-full text-center">
        {/* Animated Illustration Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 flex justify-center"
        >
          {/* Decorative background circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mint-100 rounded-full opacity-30 blur-3xl" />
          
          {/* Main 404 Visual */}
          <div className="relative">
            <h1 className="text-[120px] md:text-[180px] font-black text-primary-500 leading-none tracking-tighter select-none opacity-10">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Custom Food-related Error Icon */}
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="text-primary-500 drop-shadow-xl">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M7 6v12M17 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 10l4 4m0-4l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight">
            Lost in the Kitchen?
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto">
            The page you're looking for seems to have been whisked away. Let's get you back to something delicious.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBackHome}
            className="w-full cursor-pointer sm:w-auto bg-primary-900 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary-900/10 transition-all"
            >
            Back to Home
          </motion.button>
            </Link>
          
          {/* <motion.button
            whileHover={{ scale: 1.03, backgroundColor: '#f3f4f6' }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-white text-primary-500 border-2 border-primary-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all"
          >
            Contact Support
          </motion.button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
