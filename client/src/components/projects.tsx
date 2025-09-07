import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLocation } from 'wouter';

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [, navigate] = useLocation();

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const projects = [
    {
      id: 1,
      title: 'Lunara',
      description: 'Lunara represents a sophisticated e-commerce brand identity and visual design system crafted entirely in Photoshop. The design process began with comprehensive mood boarding, color psychology research, and typography exploration to establish the brand\'s premium aesthetic. Through meticulous wireframing and user journey mapping, I created an intuitive shopping experience that prioritizes visual hierarchy and conversion-focused layouts. The design showcases advanced Photoshop techniques including layer masking, blend modes, smart objects, and custom brush creation for unique textures. The visual identity features a carefully curated color palette, custom iconography, and modern typography that embodies luxury and accessibility. Key design elements include gradient overlays, glassmorphism effects, and subtle micro-animations concepts that enhance user engagement and brand memorability.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      tech: ['Photoshop', 'UI/UX Design', 'Brand Identity', 'Visual Systems'],
      imageLeft: true
    },
    {
      id: 2,
      title: '3D Portfolio Showcase',
      description: 'An immersive 3D portfolio experience using Spline and Three.js. Features interactive models, particle systems, and WebGL animations.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      tech: ['Three.js', 'Spline', 'WebGL'],
      imageLeft: false
    },
    {
      id: 3,
      title: 'Mobile Analytics App',
      description: 'Cross-platform mobile application for data analytics with real-time charts, push notifications, and offline capabilities using React Native.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      tech: ['React Native', 'TypeScript', 'Firebase'],
      imageLeft: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-testid="projects-title"
        >
          Featured Projects
        </motion.h2>
        
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${index < projects.length - 1 ? 'mb-20' : ''}`}
          >
            <motion.div
              className={project.imageLeft ? '' : 'md:order-2'}
              initial={{ opacity: 0, x: project.imageLeft ? -50 : 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <img
                src={project.id === 1 ? "https://res.cloudinary.com/dbdnjaewg/image/upload/v1757242179/Generated_Image_September_07_2025_-_12_20PM_pxjjms.jpg" : project.image}
                alt={`${project.title} Project Screenshot`}
                className="rounded-xl shadow-lg hover-lift w-full h-auto"
                data-testid={`project-image-${project.id}`}
              />
            </motion.div>
            
            <motion.div
              className={`space-y-4 ${project.imageLeft ? '' : 'md:order-1'}`}
              initial={{ opacity: 0, x: project.imageLeft ? 50 : -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
            >
              <h3 className="text-3xl font-bold glow-text" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                    data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                className="glass rounded-lg px-6 py-3 hover:glow transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleViewProject(project.id)}
                data-testid={`project-button-${project.id}`}
              >
                <span>View Project</span>
                <i className="ph ph-arrow-up-right"></i>
              </motion.button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
