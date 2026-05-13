import React from 'react';
import { motion } from 'framer-motion';
import './Advantage.css';
import { fadeUp, slideLeft, slideRight, popIn, staggerContainer, staggerFast, viewportOnce } from './animations';

const spokes = [
  { label: 'GST Agent', sub: 'Invoicing · Stock · Filing', color: 'border-electric text-electric', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]', variant: slideLeft },
  { label: 'Ops Agent', sub: 'Scheduling · Reports · Alerts', color: 'border-deepPurple text-deepPurple', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.2)]', variant: fadeUp },
  { label: 'Lead Agent', sub: 'Qualify · Follow-up · Book', color: 'border-cyan-400 text-cyan-400', glow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]', variant: slideRight },
];

const Architecture: React.FC = () => {
  return (
    <section className="relative py-32 px-6 md:px-16 flex flex-col items-center justify-center gap-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center max-w-2xl"
      >
        <motion.span variants={fadeUp} className="text-deepPurple font-mono text-xs uppercase tracking-widest">
          How It Works
        </motion.span>
        <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          The Hybrid<br />Advantage.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed">
          A proven <strong className="text-white">SaaS Core (80% of the work)</strong> powers every deployment.
          Then we <span className="text-electric">build and deploy custom AI agents (the critical 20%)</span>
          {' '}trained on your specific workflows — automating the work your team still does manually.
        </motion.p>
      </motion.div>

      {/* Hub + Spokes Diagram */}
      <div className="w-full max-w-4xl">
        {/* Hub */}
        <motion.div
          variants={popIn}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex justify-center mb-8"
        >
          <div className="advantage-parent">
            <div className="advantage-card">
              <div className="advantage-card-title">THE HUB</div>
              <div className="advantage-accent-line"></div>
              <p className="advantage-card-content">
                A central intelligence layer that orchestrates every agent and workflow.
                We build and train the AI agents — then connect them to your business.
              </p>
              <div className="advantage-stats-container">
                <div className="advantage-stat-box">
                  <span className="advantage-stat-number">SaaS</span>
                  <span className="advantage-stat-label">Core Platform</span>
                </div>
                <div className="advantage-stat-box blue-glow">
                  <span className="advantage-stat-number advantage-text-blue">AI Agents</span>
                  <span className="advantage-stat-label advantage-text-blue">Built for You</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connector line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ originY: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="w-px h-10 bg-gradient-to-b from-deepPurple/60 to-transparent"></div>
        </motion.div>

        {/* Spokes */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {spokes.map((spoke) => (
            <motion.div
              key={spoke.label}
              variants={spoke.variant}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`group p-6 rounded-2xl bg-white/5 border ${spoke.color} ${spoke.glow} backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-default`}
            >
              <div className={`text-lg font-bold mb-1 ${spoke.color.split(' ')[1]}`}>{spoke.label}</div>
              <div className="text-gray-400 text-sm font-mono">{spoke.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Clients row */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-xs font-mono text-gray-600 uppercase tracking-widest"
        >
          <motion.span variants={fadeUp}>Kottaikinaru · Aswin Associate</motion.span>
          <motion.span variants={fadeUp}>Rudran Traders · KenCoworks</motion.span>
          <motion.span variants={fadeUp}>New SMEs →</motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
