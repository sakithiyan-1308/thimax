import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeUp, popIn, slideLeft, slideRight, staggerContainer, viewportOnce } from './animations';

const clients = [
  {
    name: 'Kottaikinaru',
    type: 'Resort',
    location: 'India',
    product: 'Resort Website',
    result: 'Custom website built to showcase the resort, drive bookings, and establish a strong digital presence.',
    initial: 'KK',
    color: 'from-electric/20 to-transparent border-electric/30',
    accentColor: 'text-electric',
    link: 'https://www.kottaikinaru.com/',
    slide: slideLeft,
  },
  {
    name: 'Aswin Associate',
    type: 'GST Consultancy',
    location: 'India',
    product: 'GST Invoice App',
    result: 'Automated GST invoicing and filing workflows — eliminating manual errors and saving hours every billing cycle.',
    initial: 'AA',
    color: 'from-deepPurple/20 to-transparent border-deepPurple/30',
    accentColor: 'text-deepPurple',
    link: 'https://kannukubook.vercel.app/',
    slide: slideRight,
  },
  {
    name: 'Rudran Traders',
    type: 'Construction Material Dealer',
    location: 'India',
    product: 'GST Invoice App',
    result: 'Batch-level stock tracking and automated GST filing live — no more manual entries, no more missed filings.',
    initial: 'RT',
    color: 'from-cyan-400/20 to-transparent border-cyan-400/30',
    accentColor: 'text-cyan-400',
    link: 'https://kannukubook.vercel.app/',
    slide: slideLeft,
  },
  {
    name: 'KenCoworks',
    type: 'Co-working Space',
    location: 'India',
    product: 'Operations Management',
    result: 'Streamlined space management and member operations — from bookings to billing, handled automatically.',
    initial: 'KC',
    color: 'from-yellow-400/20 to-transparent border-yellow-400/30',
    accentColor: 'text-yellow-400',
    slide: slideRight,
  },
];

const statItems = [
  { value: '4', label: 'Active Clients' },
  { value: '₹0', label: 'Missed Invoices' },
  { value: '72hrs', label: 'Avg Deploy Time' },
  { value: '₹15k', label: 'Monthly Burn' },
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 px-6 md:px-16 max-w-screen-2xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">
          Active Clients
        </motion.h2>
        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
          Real Businesses. Real Results.
        </motion.h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            variants={client.slide}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`p-8 rounded-2xl bg-gradient-to-br ${client.color} border backdrop-blur-sm cursor-default`}
          >
            <motion.div variants={popIn}>
              <Quote size={20} className="text-white/20 mb-4" />
            </motion.div>

            <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
              "{client.result}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className={`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm ${client.accentColor}`}
                >
                  {client.initial}
                </motion.div>
                <div>
                  <div className="text-white font-bold">{client.name}</div>
                  <div className="text-gray-500 text-xs font-mono">{client.type} · {client.location}</div>
                  <div className={`text-xs font-mono mt-1 ${client.accentColor}`}>{client.product}</div>
                </div>
              </div>
              {client.link && (
                <motion.a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3, color: '#fff' }}
                  className="text-xs font-mono text-gray-500 transition-colors shrink-0"
                >
                  Visit Site →
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social proof bar */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 flex flex-wrap justify-center gap-12 text-center"
      >
        {statItems.map((stat) => (
          <motion.div key={stat.label} variants={popIn}>
            <div className="text-3xl font-bold text-white">{stat.value}</div>
            <div className="text-gray-600 text-xs font-mono uppercase tracking-wider mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;
