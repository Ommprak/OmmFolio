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
      
      {/* Overlay content */}
      <div className="relative z-20 text-center px-6">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 glow-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          data-testid="hero-title"
        >
          Omm Prakash Nayak
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          data-testid="hero-subtitle"
        >
          Full Stack Developer & 3D Creator
        </motion.p>
      </div>
    </section>
  );
}
