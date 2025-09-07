
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLocation } from 'wouter';

interface ProjectDetailProps {
  projectId: string;
}

const projectData = {
  1: {
    id: 1,
    title: 'Lunara',
    description: 'Lunara represents a sophisticated e-commerce brand identity and visual design system crafted entirely in Photoshop. The design process began with comprehensive mood boarding, color psychology research, and typography exploration to establish the brand\'s premium aesthetic. Through meticulous wireframing and user journey mapping, I created an intuitive shopping experience that prioritizes visual hierarchy and conversion-focused layouts. The design showcases advanced Photoshop techniques including layer masking, blend modes, smart objects, and custom brush creation for unique textures. The visual identity features a carefully curated color palette, custom iconography, and modern typography that embodies luxury and accessibility. Key design elements include gradient overlays, glassmorphism effects, and subtle micro-animations concepts that enhance user engagement and brand memorability.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_23PM_2_w9ly8l.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_ahsys9.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_1_jzxyyr.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_42PM_al0gpu.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_19PM_lr8he3.jpg'
    ],
    tech: ['Photoshop', 'UI/UX Design', 'Brand Identity', 'Visual Systems'],
    features: [
      'Brand Identity Development',
      'Color Palette Creation',
      'Typography System',
      'Custom Iconography',
      'Wireframing & Prototyping',
      'Visual Hierarchy Design'
    ]
  },
  2: {
    id: 2,
    title: '3D Portfolio Showcase',
    description: 'An immersive 3D portfolio experience featuring cutting-edge design concepts and interactive visual elements.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg'
    ],
    tech: ['3D Design', 'Visual Effects', 'Interactive Design'],
    features: [
      '3D Model Creation',
      'Interactive Elements',
      'Visual Effects',
      'Immersive Experience'
    ]
  },
  3: {
    id: 3,
    title: 'Mobile Analytics App',
    description: 'Cross-platform mobile application design with focus on data visualization and user experience.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261818/Generated_Image_September_07_2025_-_12_37PM_afzg0k.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261816/Generated_Image_September_07_2025_-_12_31PM_nd7odo.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_25PM_eshv7i.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_27PM_e7jyum.jpg'
    ],
    tech: ['Mobile Design', 'Data Visualization', 'UX Research'],
    features: [
      'Mobile-First Design',
      'Data Dashboard',
      'User Interface',
      'Responsive Layout'
    ]
  }
};

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [, navigate] = useLocation();
  
  const project = projectData[projectId as keyof typeof projectData];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-portfolio-bg text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="glass rounded-lg px-6 py-3 hover:glow transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-bg text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <i className="ph ph-arrow-left text-xl"></i>
              <span>Back to Portfolio</span>
            </button>
            <h1 className="text-xl font-bold glow-text">{project.title}</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20" ref={ref}>
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 glow-text">{project.title}</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div
            className="glass rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            className="glass rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 glow-text">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <i className="ph ph-check-circle text-accent text-xl"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center glow-text">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_23PM_2_w9ly8l.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_ahsys9.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_23PM_1_jzxyyr.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261821/Generated_Image_September_07_2025_-_12_42PM_al0gpu.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_19PM_lr8he3.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261818/Generated_Image_September_07_2025_-_12_37PM_afzg0k.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261816/Generated_Image_September_07_2025_-_12_31PM_nd7odo.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_25PM_eshv7i.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261815/Generated_Image_September_07_2025_-_12_27PM_e7jyum.jpg'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-lg hover-lift"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <i className="ph ph-magnifying-glass-plus text-3xl text-white"></i>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
