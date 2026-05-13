import React from 'react';
import './Advantage.css'; // Import the dedicated 3D styles

const Advantage: React.FC = () => {
  return (
    <section className="relative py-32 px-6 md:px-12 flex items-center justify-center min-h-screen">
      {/* Container adapting .parent behavior */}
      <div className="advantage-parent">
        <div className="advantage-card">

          <div className="advantage-card-title">
            The Hybrid<br />Advantage.
          </div>

          <div className="advantage-accent-line"></div>

          <p className="advantage-card-content">
            Generic tools fail at the edges. We deploy a proven
            <strong> SaaS Core (80% of the work)</strong> and then engineer
            <span className="advantage-highlight-blue"> Custom AI Modules (the critical 20%)</span>
            to fit your specific workflow messiness.
          </p>

          <div className="advantage-stats-container">
            <div className="advantage-stat-box">
              <span className="advantage-stat-number">80%</span>
              <span className="advantage-stat-label">Core Framework</span>
            </div>

            <div className="advantage-stat-box blue-glow">
              <span className="advantage-stat-number advantage-text-blue">20%</span>
              <span className="advantage-stat-label advantage-text-blue">Custom Logic</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advantage;