import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: 'HTML', icon: 'ph-file-html' },
    { name: 'CSS', icon: 'ph-file-css' },
    { name: 'JavaScript', icon: 'ph-file-js' },
    { name: 'React', icon: 'ph-atom' },
    { name: 'Spline', icon: 'ph-cube' }
  ];

  return (
    <section id="about" className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                alt="Omm Prakash Nayak - Developer Profile"
                className="w-80 h-80 rounded-full object-cover hover-lift glow border-4 border-accent/20"
                data-testid="profile-image"
              />
            </div>
          </motion.div>

          {/* Right: Bio and Skills */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 glow-text" data-testid="about-title">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
              I'm a passionate full-stack developer with expertise in modern web technologies 
              and 3D design. I create immersive digital experiences that blend cutting-edge 
              technology with stunning visual design. My focus is on building scalable, 
              user-centric applications that push the boundaries of what's possible on the web.
            </p>
            
            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass rounded-lg p-3 hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  data-testid={`skill-${skill.name.toLowerCase()}`}
                >
                  <i className={`ph ${skill.icon} text-3xl text-accent`}></i>
                  <span className="block text-sm mt-2">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
