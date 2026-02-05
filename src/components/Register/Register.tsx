
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, 
  User, 
  Mail, 
  Smartphone, 
  Hash, 
  MapPin, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

interface FormData {
  fullName: string;
  restaurantName: string;
  email: string;
  mobile: string;
  panNumber: string;
  address: string;
  password: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

interface InputGroupProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  icon: any;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  icon: Icon, 
  value, 
  error, 
  onChange 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="space-y-2 group">
      <label className="text-sm font-bold text-primary-500 ml-1 flex items-center gap-2">
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
          error ? 'text-red-400' : 'text-slate-400 group-focus-within:text-mint-500'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        
        <input 
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-14 pr-14 py-4 rounded-2xl border bg-slate-50/50 outline-none transition-all text-base placeholder:text-slate-300 ${
            error 
              ? 'border-red-300 ring-4 ring-red-50' 
              : 'border-slate-100 focus:border-mint-400 focus:ring-4 focus:ring-mint-100'
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-500 transition-colors p-1 rounded-lg hover:bg-slate-100/50"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>

      <AnimatePresence>
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1.5 ml-1 text-red-500"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    restaurantName: '',
    email: '',
    mobile: '',
    panNumber: '',
    address: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!data.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!data.restaurantName.trim()) newErrors.restaurantName = 'Business name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!data.mobile) {
      newErrors.mobile = 'Mobile is required';
    } else if (data.mobile.length !== 10) {
      newErrors.mobile = 'Must be 10 digits';
    }

    if (data.panNumber && data.panNumber.length !== 9) {
      newErrors.panNumber = 'PAN must be 9 digits';
    }

    if (!data.address.trim()) newErrors.address = 'Address is required';
    
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 8) {
      newErrors.password = 'Minimum 8 characters';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    // Strict numeric formatting for specific fields
    if (name === 'mobile' || name === 'panNumber') {
      value = value.replace(/\D/g, '');
      if (name === 'mobile') value = value.slice(0, 10);
      if (name === 'panNumber') value = value.slice(0, 9);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if user is typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background with intelligent contrast */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2400" 
          alt="Restaurant context" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-xs"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-[3rem] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-16 md:p-24 text-center space-y-10"
            >
              <div className="relative inline-block">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                  className="w-32 h-32 bg-mint-400 text-primary-900 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-mint-400/30 rotate-6"
                >
                  <CheckCircle2 className="w-16 h-16" />
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-accent-400/20 rounded-full blur-xl"
                />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary-500 tracking-tight">Registration Sent!</h2>
                <p className="text-slate-500 text-xl leading-relaxed max-w-md mx-auto">
                  We've received your business details. Our team will verify your account and reach out within 24 hours.
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="bg-primary-900 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all"
              >
                Return to Homepage
              </motion.button>
            </motion.div>
          ) : (
            <div className="p-8 md:p-14 lg:p-16">
              <div className="text-center mb-10 space-y-3">
                <h1 className="text-3xl md:text-5xl font-extrabold text-primary-500 tracking-tight">Register Your Business</h1>
                <p className="text-slate-400 text-base md:text-lg font-medium">Join the digital revolution in hospitality</p>
                <div className="h-1 w-24 bg-mint-400 mx-auto rounded-full"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-y-6">
                  <InputGroup 
                    label="Full Name" 
                    name="fullName" 
                    placeholder="Enter your full name" 
                    icon={User} 
                    value={formData.fullName}
                    error={errors.fullName}
                    onChange={handleChange}
                  />
                  <InputGroup 
                    label="Restaurant Name" 
                    name="restaurantName" 
                    placeholder="Enter business name" 
                    icon={Store} 
                    value={formData.restaurantName}
                    error={errors.restaurantName}
                    onChange={handleChange}
                  />
                  
                  <InputGroup 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    placeholder="email@example.com" 
                    icon={Mail} 
                    value={formData.email}
                    error={errors.email}
                    onChange={handleChange}
                  />
                  <InputGroup 
                    label="Mobile Number" 
                    name="mobile" 
                    placeholder="10 digits only" 
                    icon={Smartphone} 
                    value={formData.mobile}
                    error={errors.mobile}
                    onChange={handleChange}
                  />

                  <InputGroup 
                    label="Pan Number" 
                    name="panNumber" 
                    placeholder="9 digits (Optional)" 
                    icon={Hash} 
                    value={formData.panNumber}
                    error={errors.panNumber}
                    onChange={handleChange}
                  />
                  <InputGroup 
                    label="Address" 
                    name="address" 
                    placeholder="City, Area" 
                    icon={MapPin} 
                    value={formData.address}
                    error={errors.address}
                    onChange={handleChange}
                  />
                  
                  <InputGroup 
                    label="Create Password" 
                    name="password" 
                    type="password" 
                    placeholder="Minimum 8 characters" 
                    icon={Lock} 
                    value={formData.password}
                    error={errors.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-6 space-y-6">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full cursor-pointer py-6 bg-primary-900 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-4 shadow-primary-900 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 border-4 border-white/20 border-t-mint-400 rounded-full animate-spin"></div>
                        <span>Finalizing Account...</span>
                      </div>
                    ) : (
                      <>
                        <span>Create Restaurant Account</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-mint-400" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-slate-400 font-medium text-lg">
                    Already have an account? {' '}
                    <button type="button" className="text-primary-500 cursor-pointer font-bold hover:text-mint-600 transition-colors underline underline-offset-4 decoration-2">
                      Login here
                    </button>
                  </p>
                </div>
              </form>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Decorative Blur Orbs */}
      {/* <div className="absolute top-20 right-20 w-64 h-64 bg-mint-400/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-400/10 rounded-full blur-[120px] -z-10"></div> */}
    </div>
  );
};
