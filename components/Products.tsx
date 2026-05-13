import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Lightbulb } from 'lucide-react';
import { fadeUp, popIn, slideLeft, slideRight, staggerContainer, viewportOnce } from './animations';

const products = [
  {
    month: 'Month 1',
    name: 'GST Invoice App',
    tagline: 'Batch-level stock tracking + automated GST filing',
    target: '40 dealers',
    price: '₹12,000/yr',
    status: 'active' as const,
    features: ['Batch-level stock tracking', 'Sales-to-GST workflow', 'Auto invoice generation', 'Penalty prevention alerts'],
    accentClass: 'border-electric text-electric shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    badgeClass: 'bg-green-500/20 text-green-400 border-green-500/40',
    slideVariant: slideLeft,
  },
  {
    month: 'Month 2',
    name: 'Gym SaaS Platform',
    tagline: 'Membership management + automated attendance',
    target: '30 gyms',
    price: '₹9,000/yr',
    status: 'planned' as const,
    features: ['UPI QR check-in', 'Automated renewal reminders', 'Profit & attendance reports', 'WhatsApp notifications'],
    accentClass: 'border-deepPurple text-deepPurple shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    badgeClass: 'bg-deepPurple/20 text-deepPurple border-deepPurple/40',
    slideVariant: slideRight,
  },
  {
    month: 'Month 3',
    name: 'BROMANCE App',
    tagline: 'Fitness partner matchmaking & progress sharing',
    target: '50 users',
    price: '₹6,000/yr',
    status: 'planned' as const,
    features: ['Workout compatibility matching', 'Progress sharing', 'Partner accountability loop', 'Gym-location aware'],
    accentClass: 'border-cyan-400 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.15)]',
    badgeClass: 'bg-cyan-400/20 text-cyan-400 border-cyan-400/40',
    slideVariant: slideLeft,
  },
  {
    month: 'Month 4',
    name: 'Campus Influence',
    tagline: 'Closed-campus influencer marketplace for VIT',
    target: '500 creators · 50 businesses',
    price: '15% commission',
    status: 'planning' as const,
    features: ['Student-verified profiles', 'Hyperlocal business targeting', 'Deal flow management', '40,000 VIT students'],
    accentClass: 'border-yellow-400 text-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.15)]',
    badgeClass: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/40',
    slideVariant: slideRight,
  },
];

const statusConfig = {
  active: { label: 'Live', icon: CheckCircle },
  planned: { label: 'In Development', icon: Clock },
  planning: { label: 'Planning', icon: Lightbulb },
};

const featureItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 120, damping: 14 } },
};

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 px-3 md:px-6 max-w-screen-2xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">
          Monthly Releases
        </motion.h2>
        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
          Four Products. One Platform.
        </motion.h3>
        <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-xl mx-auto">
          We ship a new vertical every month. Each product connects back to the THIMAX hub — your data, your agents, one dashboard.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((p, index) => {
          const { label, icon: StatusIcon } = statusConfig[p.status];
          return (
            <motion.div
              key={index}
              variants={p.slideVariant}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`group p-8 rounded-2xl bg-white/5 border ${p.accentClass} hover:bg-white/8 transition-colors duration-300 backdrop-blur-sm cursor-default`}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.1 }}
                  className="text-xs font-mono text-gray-600 uppercase tracking-widest"
                >
                  {p.month}
                </motion.span>
                <motion.span
                  variants={popIn}
                  className={`text-xs font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 ${p.badgeClass}`}
                >
                  <StatusIcon size={12} />
                  {label}
                </motion.span>
              </div>

              <h4 className="text-2xl font-bold text-white mb-1">{p.name}</h4>
              <p className="text-gray-400 text-sm mb-6">{p.tagline}</p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="space-y-2 mb-6"
              >
                {p.features.map((f) => (
                  <motion.li key={f} variants={featureItem} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-white/40 shrink-0"></div>
                    {f}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div>
                  <div className="text-white font-bold font-mono text-lg">{p.price}</div>
                  <div className="text-gray-600 text-xs font-mono">Target: {p.target}</div>
                </div>
                {p.status === 'active' && (
                  <motion.a
                    href="https://kannukubook.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-electric text-white text-sm font-semibold rounded-lg hover:bg-electric/80 transition-colors"
                  >
                    Try the App →
                  </motion.a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
