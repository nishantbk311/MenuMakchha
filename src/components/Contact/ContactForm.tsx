
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    const mobileRegex = /^\d{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be exactly 10 digits';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', mobile: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;
    
    // Restriction for mobile field: Only allow digits and max 10 chars
    if (name === 'mobile') {
      value = value.replace(/\D/g, ''); // Strip everything that is not a number
      if (value.length > 10) value = value.slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-7"
    >
      <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-slate-100 shadow-[0_10px_20px_-5px_rgba(5,15,51,0.12)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-mint-50 rounded-bl-[100px] -z-10"></div>
        
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center text-center space-y-8 py-20"
            >
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-28 h-28 bg-mint-100 text-mint-600 rounded-3xl flex items-center justify-center rotate-6 shadow-xl shadow-mint-400/10"
              >
                <CheckCircle2 className="w-14 h-14" />
              </motion.div>
              <div className="space-y-3">
                <h2 className="text-4xl font-bold text-primary-500">Message Sent!</h2>
                <p className="text-slate-500 text-xl max-w-sm mx-auto">We've received your request and will get back to you within 24 hours.</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="bg-primary-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-primary-800 transition-all"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-primary-500 mb-2">Ready to Get Started?</h2>
                <p className="text-slate-400 font-medium">Fill out the form below and we'll reach out to you.</p>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-500 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      className={`w-full px-6 py-4 rounded-2xl border transition-all text-lg placeholder:text-slate-300 bg-slate-50/50 outline-none ${
                        errors.name ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-100 focus:border-mint-400 focus:ring-4 focus:ring-mint-100'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-xs font-bold flex items-center gap-1 ml-1"
                        ><AlertCircle className="w-3 h-3" /> {errors.name}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary-500 ml-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="10 digits" 
                      className={`w-full px-6 py-4 rounded-2xl border transition-all text-lg placeholder:text-slate-300 bg-slate-50/50 outline-none ${
                        errors.mobile ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-100 focus:border-mint-400 focus:ring-4 focus:ring-mint-100'
                      }`}
                    />
                    <AnimatePresence>
                      {errors.mobile && (
                        <motion.p 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-red-500 text-xs font-bold flex items-center gap-1 ml-1"
                        ><AlertCircle className="w-3 h-3" /> {errors.mobile}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com" 
                    className={`w-full px-6 py-4 rounded-2xl border transition-all text-lg placeholder:text-slate-300 bg-slate-50/50 outline-none ${
                      errors.email ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-100 focus:border-mint-400 focus:ring-4 focus:ring-mint-100'
                    }`}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 text-xs font-bold flex items-center gap-1 ml-1"
                      ><AlertCircle className="w-3 h-3" /> {errors.email}</motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-500 ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..." 
                    rows={4}
                    className={`w-full px-6 py-4 rounded-2xl border transition-all text-lg placeholder:text-slate-300 bg-slate-50/50 resize-none outline-none ${
                      errors.message ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-100 focus:border-mint-400 focus:ring-4 focus:ring-mint-100'
                    }`}
                  ></textarea>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-red-500 text-xs font-bold flex items-center gap-1 ml-1"
                      ><AlertCircle className="w-3 h-3" /> {errors.message}</motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-6 cursor-pointer bg-primary-900 hover:bg-primary-800 text-white font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-4 group active:scale-[0.98] shadow-2xl shadow-primary-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-4 border-white/20 border-t-mint-400 rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-mint-400" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
