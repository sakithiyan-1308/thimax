import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import WebGLErrorBoundary from './WebGLErrorBoundary';
import { fadeUp, slideLeft, popIn, staggerContainer, viewportOnce } from './animations';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const SplineWrapper = React.memo(({ scene }: { scene: string }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsInView(entry.isIntersecting); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isInView ? (
        <WebGLErrorBoundary
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-onyx via-zinc-900 to-onyx flex items-center justify-center">
              <div className="text-white/20 font-mono text-sm">3D Scene Error</div>
            </div>
          }
        >
          <React.Suspense
            fallback={
              <div className="w-full h-full bg-onyx flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-t from-onyx to-transparent opacity-50 animate-pulse"></div>
              </div>
            }
          >
            <div
              className="w-full h-full scale-125 md:scale-110"
              style={{ pointerEvents: 'auto', transform: 'translateZ(0)', contain: 'paint layout' }}
            >
              <Spline scene={scene} renderOnDemand={true} />
            </div>
          </React.Suspense>
        </WebGLErrorBoundary>
      ) : (
        <div className="w-full h-full bg-onyx/50" />
      )}
    </div>
  );
});

const STATS = [
  { value: '72hrs', label: 'Deploy Time' },
  { value: '₹6k/yr', label: 'Starting Price' },
  { value: '4', label: 'Active Clients' },
];

const Hero: React.FC = () => {
  const sceneUrl = "https://prod.spline.design/4V-cgXlvgk7GNsAL/scene.splinecode";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background 3D Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <SplineWrapper scene={sceneUrl} />
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-onyx via-onyx/90 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-onyx to-transparent pointer-events-none"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 pointer-events-none">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 pointer-events-auto"
        >
          <motion.div variants={slideLeft} className="flex items-center gap-2">
            <div className="h-px w-8 bg-electric"></div>
            <span className="text-electric font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-electric/30 bg-electric/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Hub-and-Spoke Agentic SaaS
            </span>
          </motion.div>

          <motion.h1 variants={slideLeft} className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Stop Losing Revenue<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deepPurple to-electric">
              to Manual Work.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
            THIMAX deploys AI agents that handle lead qualification, GST filing, scheduling, and follow-ups — so Indian SMEs can focus on growth, not paperwork.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={staggerContainer} className="flex gap-6 mt-2">
            {STATS.map((s) => (
              <motion.div key={s.label} variants={popIn} className="flex flex-col">
                <span className="text-white font-bold text-xl">{s.value}</span>
                <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px #3b82f6' }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-5 py-2.5 uppercase rounded-lg text-[17px] font-medium text-white/50 bg-transparent cursor-pointer border border-white/50 transition-all duration-500 hover:text-white hover:bg-electric hover:border-electric"
            >
              <span className="relative z-10 flex items-center gap-2">
                See Our Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/919360651587?text=Hi%20Thimax!%20I%27m%20an%20SME%20owner%20and%20want%20to%20automate%20my%20operations.%20Can%20we%20connect?"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 border border-white/20 text-white font-mono rounded-lg hover:border-white/50 hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Zap size={18} className="text-electric" />
              Get a Free Audit
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;
