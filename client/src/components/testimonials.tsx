import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO, TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b02c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60',
      review: 'Omm delivered an exceptional website that exceeded our expectations. His attention to detail and innovative approach made our project stand out.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Founder, Design Co',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60',
      review: 'Working with Omm was a game-changer for our business. The 3D elements he created brought our vision to life beautifully.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'CTO, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60',
      review: 'Incredible technical skills combined with artistic vision. Omm transformed our complex requirements into an elegant solution.'
    }
  ];

  return (
    <section className="py-20 relative z-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 glow-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          data-testid="testimonials-title"
        >
          What Clients Say
        </motion.h2>
        
        <motion.div
          className="testimonial-slider"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card glass rounded-xl p-6 hover:glow transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - Client`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`testimonial-image-${testimonial.id}`}
                />
                <div>
                  <h4 className="font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-title-${testimonial.id}`}>
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`testimonial-review-${testimonial.id}`}>
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
