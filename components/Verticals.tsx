import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, Dumbbell, Users, GraduationCap } from 'lucide-react';
import { fadeUp, popIn, slideLeft, slideRight, staggerContainer, viewportOnce } from './animations';

const verticals = [
  {
    icon: <Receipt size={32} className="text-electric" />,
    title: 'Construction Dealers',
    pain: 'Manual GST filing, batch-level stock confusion, penalty risk',
    solution: 'GST Agent automates invoicing, stock tracking, and filing',
    price: '₹12,000/yr',
    status: 'Live',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/40',
    slide: slideLeft,
  },
  {
    icon: <Dumbbell size={32} className="text-deepPurple" />,
    title: 'Gym Owners',
    pain: 'No-shows, inconsistent follow-ups, manual attendance tracking',
    solution: 'Ops Agent handles UPI QR check-in, reminders, and profit reports',
    price: '₹9,000/yr',
    status: 'Coming May',
    statusColor: 'bg-deepPurple/20 text-deepPurple border-deepPurple/40',
    slide: slideRight,
  },
  {
    icon: <Users size={32} className="text-cyan-400" />,
    title: 'Solopreneurs',
    pain: 'Leads fall through cracks, founder burnout from manual follow-up',
    solution: 'Lead Agent qualifies, schedules, and follows up automatically',
    price: '₹6,000/yr',
    status: 'Coming June',
    statusColor: 'bg-cyan-400/20 text-cyan-400 border-cyan-400/40',
    slide: slideLeft,
  },
  {
    icon: <GraduationCap size={32} className="text-yellow-400" />,
    title: 'Campus Creators (VIT)',
    pain: 'Can\'t connect with local businesses, no structured deal flow',
    solution: 'Campus Influence marketplace — hyperlocal, student-verified',
    price: '15% commission',
    status: 'Coming July',
    statusColor: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/40',
    slide: slideRight,
  },
];

const Verticals: React.FC = () => {
  return (
    <section id="verticals" className="py-20 px-3 md:px-6 max-w-screen-2xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUp} className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">
          Who We Serve
        </motion.h2>
        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white">
          Built for Indian SMEs
        </motion.h3>
        <motion.p variants={fadeUp} className="text-gray-400 mt-4 max-w-xl mx-auto">
          Generic software doesn't understand your business. We engineer for the exception, not the rule.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {verticals.map((v, index) => (
          <motion.div
            key={index}
            variants={v.slide}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300 backdrop-blur-sm cursor-default"
          >
            <div className="flex items-start justify-between mb-6">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="p-4 rounded-xl bg-onyx border border-white/5 inline-block"
              >
                {v.icon}
              </motion.div>
              <motion.span
                variants={popIn}
                className={`text-xs font-mono px-3 py-1 rounded-full border ${v.statusColor}`}
              >
                {v.status}
              </motion.span>
            </div>

            <h4 className="text-xl font-bold text-white mb-3">{v.title}</h4>

            <div className="space-y-3 mb-6">
              <div>
                <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">Pain</span>
                <p className="text-gray-400 text-sm mt-1">{v.pain}</p>
              </div>
              <div>
                <span className="text-xs font-mono text-electric uppercase tracking-wider">Fix</span>
                <p className="text-gray-300 text-sm mt-1">{v.solution}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-white font-bold font-mono">{v.price}</span>
              <motion.a
                href={`https://wa.me/919360651587?text=Hi%20Thimax!%20I%27m%20interested%20in%20${encodeURIComponent(v.title)}%20automation.%20Can%20we%20talk?`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3, color: '#fff' }}
                className="text-xs text-gray-500 transition-colors font-mono"
              >
                Learn more →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Verticals;
