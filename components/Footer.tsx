import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewportOnce } from './animations';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-onyx pt-16 pb-8 px-3 md:px-6">
      <div className="max-w-screen-2xl mx-auto">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={slideLeft} className="max-w-xs">
            <span className="text-white font-bold text-2xl tracking-tighter block mb-2">THIMAX</span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Hub-and-spoke SaaS platform automating core operations for Indian SMEs. Built in Chennai.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-green-400 text-xs font-mono">Systems Operational</span>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={slideRight} className="flex flex-col sm:flex-row gap-12">
            <div>
              <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Products</h4>
              <ul className="space-y-2">
                {['GST Invoice App', 'Gym SaaS Platform', 'BROMANCE App', 'Campus Influence'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <a href="#products" className="text-gray-500 hover:text-white text-sm transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Clients', href: '#clients' },
                  { label: 'How It Works', href: '#strategy' },
                ].map((l) => (
                  <motion.li key={l.label} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <a href={l.href} className="text-gray-500 hover:text-white text-sm transition-colors">{l.label}</a>
                  </motion.li>
                ))}
                <motion.li whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <a
                    href="https://wa.me/919360651587?text=Hi%20Thimax!%20I%20have%20a%20question%20and%20would%20like%20to%20get%20in%20touch."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-400 text-sm transition-colors flex items-center gap-1"
                  >
                    Contact via WhatsApp
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5"
        >
          <p className="text-gray-600 text-xs font-mono">© {new Date().getFullYear()} Thimax. All rights reserved. Chennai, India.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: '#fff' }}
                className="text-gray-600 text-xs transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
