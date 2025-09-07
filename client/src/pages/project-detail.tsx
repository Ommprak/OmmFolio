
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useLocation } from 'wouter';
import { useState } from 'react';

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
    title: 'Creative Magazine Design',
    description: 'Professional magazine layouts and editorial designs that blend modern typography with compelling visual storytelling. This comprehensive project showcases expertise in creating cohesive design systems for lifestyle, fashion, and business publications. The work demonstrates advanced skills in grid systems, typographic hierarchy, color theory, and visual flow. Each spread is meticulously crafted to enhance readability while maintaining aesthetic appeal. The project includes cover designs, feature articles, photo layouts, and advertising placements that work harmoniously together to create engaging reader experiences.',
    images: [
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_41PM_g45wg9.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261820/Generated_Image_September_07_2025_-_12_40PM_ny2xpw.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Generated_Image_September_07_2025_-_12_39PM_oqquns.jpg',
      'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/Generated_Image_September_07_2025_-_12_45PM_xz84t7.jpg'
    ],
    tech: ['InDesign', 'Photoshop', 'Typography', 'Editorial Design'],
    features: [
      'Magazine Layout Design',
      'Typography Systems',
      'Photo Direction & Editing',
      'Print Production Ready',
      'Brand Identity Integration',
      'Multi-page Spreads'
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
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
  ];
  
  const openImageModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentImageIndex(index);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : galleryImages.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    } else {
      const newIndex = currentImageIndex < galleryImages.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    }
  };
  
  const project = projectData[parseInt(projectId) as keyof typeof projectData];
  
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

          {/* Photo Gallery */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center glow-text">Photo Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261824/Double_Overhead_Magazine_Mockup_03_lgvazm.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_cover_free_mockup_vol2_miaoad.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261822/magazine_ngur74.jpg',
                'https://res.cloudinary.com/dbdnjaewg/image/upload/v1757261819/Double_Overhead_Magazine_Mockup_01_ip28xk.jpg'
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
                    alt={`${project.title} - Photo ${index + 1}`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg hover-lift"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </main>
      
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-x text-xl"></i>
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-chevron-left text-xl"></i>
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              >
                <i className="ph ph-chevron-right text-xl"></i>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
