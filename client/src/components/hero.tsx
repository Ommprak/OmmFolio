import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Model Embed */}
      <div className="absolute inset-0 w-full h-full z-10">
        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-10IZP3Rc7GqnxCb7Kw4yJMu0/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="Interactive 3D Robot Model"
          data-testid="spline-3d-model"
        />
      </div>
      
      
    </section>
  );
}
