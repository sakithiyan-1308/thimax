import React from 'react';
import { motion } from 'framer-motion';
import { Box, Layers, Sparkles } from 'lucide-react';
import { FeatureCardProps } from '../types';

const features: FeatureCardProps[] = [
  {
    icon: <Box size={32} className="text-electric" />,
    title: "Immersive 3D Frontend",
    text: "Visualize supply chains and factory floors in real-time WebGL."
  },
  {
    icon: <Layers size={32} className="text-deepPurple" />,
    title: "Modular Backend",
    text: "A 'lego-block' core that accepts custom logic without breaking."
  },
  {
    icon: <Sparkles size={32} className="text-cyan-400" />,
    title: "Custom AI Agents",
    text: "Automate manual tasks with AI trained on your specific documents."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="text-center mb-16"
       >
         <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Technical Capabilities</h2>
         <h3 className="text-3xl font-bold text-white">Engineered for Complexity</h3>
       </motion.div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {features.map((feature, index) => (
           <motion.div
             key={index}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.2 }}
             className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-electric transition-colors duration-300 backdrop-blur-sm"
           >
             <div className="mb-6 p-4 rounded-xl bg-onyx border border-white/5 inline-block shadow-inner group-hover:scale-110 transition-transform duration-300">
               {feature.icon}
             </div>
             <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
             <p className="text-gray-400 text-sm leading-relaxed">{feature.text}</p>
           </motion.div>
         ))}
       </div>
    </section>
  );
};

export default Features;