import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, popIn, staggerContainer, viewportOnce } from './animations';

const steps = [
  {
    number: '01',
    title: 'Free Ops Audit',
    description: 'We map your workflow bottlenecks in a 30-minute WhatsApp call. No fluff — just the leakage points costing you money.',
    tag: 'Week 0',
    accent: 'border-l-electric',
    numberColor: 'text-electric',
    variant: slideLeft,
    justify: 'flex justify-start md:pr-[50%]',
    shape: 'rounded-tr-3xl rounded-bl-3xl',
  },
  {
    number: '02',
    title: 'Deploy the Core',
    description: 'Your niche-specific SaaS framework goes live in 72 hours. GST filing, attendance tracking, or lead management — whatever your vertical needs.',
    tag: 'Week 1',
    accent: 'border-t-deepPurple',
    numberColor: 'text-deepPurple',
    variant: popIn,
    justify: 'flex justify-center',
    shape: 'rounded-xl',
  },
  {
    number: '03',
    title: 'Activate the Agents',
    description: 'Custom AI modules go live. Your agents qualify leads, send follow-ups, generate reports, and file returns — automatically, every day.',
    tag: 'Week 2+',
    accent: 'border-r-electric',
    numberColor: 'text-electric',
    variant: slideRight,
    justify: 'flex justify-end md:pl-[50%]',
    shape: 'rounded-tl-3xl rounded-br-3xl',
    textRight: true,
  },
];

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center mb-20"
      >
        <motion.h2 variants={fadeUp} className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">
          How We Work
        </motion.h2>
        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
          From Audit to Automation in Two Weeks
        </motion.h3>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={step.variant}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className={step.justify}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className={`bg-onyx border border-white/10 p-8 ${step.shape} border-l-4 ${step.accent} max-w-lg w-full relative group hover:bg-white/5 transition-colors cursor-default ${step.textRight ? 'text-right' : ''}`}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rounded-full blur-xl group-hover:bg-electric/20 transition-colors"></div>
                <motion.div
                  className={`flex items-center gap-3 mb-3 ${step.textRight ? 'justify-end' : ''}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.15 }}
                >
                  {step.textRight && (
                    <span className="text-xs font-mono text-gray-600 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">{step.tag}</span>
                  )}
                  <span className={`font-mono text-4xl font-bold opacity-30 ${step.numberColor}`}>{step.number}</span>
                  {!step.textRight && (
                    <span className="text-xs font-mono text-gray-600 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">{step.tag}</span>
                  )}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
