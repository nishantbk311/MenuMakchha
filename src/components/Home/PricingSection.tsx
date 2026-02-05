
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Check = () => <CheckCircle2 className="w-5 h-5 text-mint-500 flex-shrink-0" />;
const Cross = () => <XCircle className="w-5 h-5 text-slate-300 flex-shrink-0" />;

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Special Offer Price",
      price: "499",
      oldPrice: "999",
      period: "/Annum",
      features: [
        { text: "Max Products: 199", included: true },
        { text: "Duration: Annum (365 days)", included: true },
        { text: "Today's Special", included: false },
        { text: "Campaign", included: false },
        { text: "Event", included: false },
        { text: "Ncard Profile", included: false },
      ],
      popular: false
    },
    {
      name: "New Year Offer (Premium)",
      price: "2082",
      oldPrice: "2999",
      period: "/First year",
      features: [
        { text: "Max Products: 500", included: true },
        { text: "Duration: First year (365 days)", included: true },
        { text: "Today's Special", included: true },
        { text: "Campaign", included: true },
        { text: "Event", included: true },
        { text: "Ncard Profile", included: true },
      ],
      popular: true
    },
    {
      name: "Basic",
      price: "1999",
      oldPrice: "2999",
      period: "/Annum",
      features: [
        { text: "Max Products: 500", included: true },
        { text: "Duration: Annum (365 days)", included: true },
        { text: "Today's Special", included: true },
        { text: "Campaign", included: true },
        { text: "Event", included: false },
        { text: "Ncard Profile", included: false },
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "2999",
      oldPrice: "3999",
      period: "/Annum",
      features: [
        { text: "Max Products: 1000", included: true },
        { text: "Duration: Annum (365 days)", included: true },
        { text: "Today's Special", included: true },
        { text: "Campaign", included: true },
        { text: "Event", included: true },
        { text: "Ncard Profile", included: true },
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-500">
            Flexible Plans for Every Hospitality Need
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Explore our subscription packages designed to cater to individuals, small groups, and large enterprises. Enjoy premium services and customized benefits with every plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.1)" }}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col ${
                plan.popular 
                  ? 'border-mint-400 shadow-xl shadow-mint-400/10' 
                  : 'border-slate-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mint-400 text-primary-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4 min-h-[56px] flex items-center">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary-500">Rs. {plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
                <div className="text-slate-400 text-sm line-through">Rs. {plan.oldPrice}{plan.period}</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    {feat.included ? <Check /> : <Cross />}
                    <span className={`text-sm ${feat.included ? 'text-slate-700' : 'text-slate-400'}`}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>

            <Link  to="/register">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer ${
                plan.popular 
                  ? 'bg-mint-400 text-primary-500 hover:bg-mint-500 shadow-lg shadow-mint-400/20' 
                  : 'bg-primary-500 text-white hover:bg-primary-600'
              }`}>
                Get Started
              </motion.button>
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
