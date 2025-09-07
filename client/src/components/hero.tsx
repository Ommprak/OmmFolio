import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [splineError, setSplineError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Model Embed */}
      {!splineError ? (
        <div className="absolute inset-0 w-full h-full z-10">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-10IZP3Rc7GqnxCb7Kw4yJMu0/"
            frameBorder={0}
            width="100%"
            height="100%"
            className="w-full h-full"
            title="Interactive 3D Robot Model"
            data-testid="spline-3d-model"
            onError={() => {
              console.warn('Spline model failed to load, falling back to gradient background');
              setSplineError(true);
            }}
            style={{ border: 'none' }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      )}
      
      
    </section>
  );
}
