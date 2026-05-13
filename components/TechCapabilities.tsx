import React from 'react';
import { Box, Layers, Sparkles } from 'lucide-react';

const cards = [
    {
        title: "Immersive 3D Frontend",
        description: "Visualize supply chains and factory floors in real-time WebGL.",
        icon: <Box size={32} className="text-[#06b6d4]" />, // Cyan color
    },
    {
        title: "Modular Backend",
        description: "A 'lego-block' core that accepts custom logic without breaking.",
        icon: <Layers size={32} className="text-[#8b5cf6]" />, // Purple color
    },
    {
        title: "Custom AI Agents",
        description: "Automate manual tasks with AI trained on your specific documents.",
        icon: <Sparkles size={32} className="text-[#3b82f6]" />, // Blue color
    }
];

const TechCapabilities = () => {
    return (
        <section className="bg-black py-20 px-4 flex flex-col items-center">

            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-[#3b82f6] tracking-widest text-sm font-bold uppercase mb-2">
                    Technical Capabilities
                </h2>
                <h3 className="text-4xl font-bold text-white">
                    Engineered for Complexity
                </h3>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full place-items-center">
                {cards.map((card, index) => (
                    <div className="card-wrapper" key={index}>
                        <div className="card">
                            <div className="card__border"></div>

                            {/* Card Content */}
                            <div className="relative z-10 flex flex-col gap-4 h-full">
                                <div className="p-3 bg-white/5 w-fit rounded-lg border border-white/10">
                                    {card.icon}
                                </div>
                                <div>
                                    <span className="card_title">{card.title}</span>
                                    <p className="card_paragraph">{card.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Embedded CSS for the complex animations */}
            <style>{`
        .card {
          --white: hsl(0, 0%, 100%);
          --paragraph: hsl(0, 0%, 70%);
          --line: hsl(240, 9%, 17%);
          --primary: hsl(189, 92%, 58%);

          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 2rem;
          width: 100%;
          max-width: 350px;
          height: 100%;
          min-height: 280px; /* Ensure equal height */
          
          background-color: hsla(240, 15%, 9%, 1);
          background-image: radial-gradient(
              at 88% 40%,
              hsla(240, 15%, 9%, 1) 0px,
              transparent 85%
            ),
            radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
            radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
            radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);

          border-radius: 1rem;
          box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.05) inset;
          overflow: hidden; /* Keeps the border inside */
        }

        .card .card__border {
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          background-image: linear-gradient(
            0deg,
            hsl(0, 0%, 100%) -50%,
            hsl(0, 0%, 40%) 100%
          );
          border-radius: 1rem;
        }

        .card .card__border::before {
          content: "";
          pointer-events: none;
          position: fixed;
          z-index: 200;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%), rotate(0deg);
          transform-origin: left;
          width: 200%;
          height: 10rem;
          background-image: linear-gradient(
            0deg,
            hsla(0, 0%, 100%, 0) 0%,
            hsl(189, 100%, 50%) 40%,
            hsl(189, 100%, 50%) 60%,
            hsla(0, 0%, 40%, 0) 100%
          );
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .card_title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--white);
          display: block;
          margin-bottom: 0.5rem;
        }

        .card_paragraph {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--paragraph);
        }
      `}</style>
        </section>
    );
};

export default TechCapabilities;
