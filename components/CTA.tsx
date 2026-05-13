import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Zap } from 'lucide-react';
import { fadeUp, popIn, staggerContainer, viewportOnce } from './animations';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-3 md:px-6 max-w-screen-xl mx-auto flex flex-col gap-12 text-center">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="space-y-8"
      >
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Stop the Revenue<br /> Leakage. Start Today.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl mx-auto">
          One 30-minute call. We'll map your bottlenecks and tell you exactly what an agent can fix — for free.
        </motion.p>
        <motion.div variants={popIn}>
          <motion.a
            href="https://wa.me/919360651587?text=Hi%20Thimax!%20I%27d%20like%20a%20free%20ops%20audit%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.07, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-white text-black text-lg font-bold px-10 py-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Free Audit
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col sm:flex-row justify-center gap-6"
      >
        {[
          { icon: <IndianRupee className="text-green-400" size={20} />, text: 'Starts at ₹6,000/yr' },
          { icon: <Zap className="text-electric" size={20} />, text: 'Live in 72 Hours' },
        ].map((badge) => (
          <motion.div
            key={badge.text}
            variants={popIn}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
            className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg justify-center min-w-[200px] transition-colors"
          >
            {badge.icon}
            <span className="text-sm font-mono text-gray-300">{badge.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        className="w-full bg-gradient-to-r from-transparent via-electric/10 to-transparent py-12 border-y border-white/5 mt-8"
      >
        <h3 className="text-2xl md:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 uppercase tracking-widest">
          THIMAX: Maximum Thinking.<br className="md:hidden" /> Infinite Adaptability.
        </h3>
      </motion.div>

    </section>
  );
};

export default CTA;
