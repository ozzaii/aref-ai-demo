import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, delay }) => {
  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500 opacity-80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-300 flex-grow">"{quote}"</p>
      <div className="mt-6 pt-6 border-t border-white/10">
        <p className="font-bold text-white">{author}</p>
        <p className="text-sm text-gray-400">{role}, {company}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Calde.AI has transformed how we approach data analysis. Their agents work seamlessly with our existing systems and have reduced our analysis time by 78%. The ROI was evident within the first quarter.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Global Finance Corp"
    },
    {
      quote: "Implementation was remarkably smooth. The platform integrated with our existing infrastructure without disruption, and the team's support has been outstanding throughout the process.",
      author: "Michael Chen",
      role: "VP of Technology",
      company: "HealthTech Innovations"
    },
    {
      quote: "The intelligent search capabilities have revolutionized how our legal team accesses case information. What used to take hours now takes minutes, with significantly improved accuracy.",
      author: "Alicia Rodriguez",
      role: "Chief Legal Officer",
      company: "Patterson Law Group"
    },
    {
      quote: "Security was our primary concern, and Calde.AI exceeded expectations. Their enterprise-grade protection measures gave us the confidence to deploy AI across sensitive business functions.",
      author: "James Wilson",
      role: "CISO",
      company: "SecureBank Financial"
    },
    {
      quote: "The customization capabilities are unmatched. The platform adapted to our unique manufacturing processes rather than forcing us to change our workflows to accommodate the technology.",
      author: "Robert Tanaka",
      role: "Director of Operations",
      company: "Precision Manufacturing"
    },
    {
      quote: "Our customer service team is now empowered with AI assistants that have reduced response times by 65% while improving satisfaction scores. The ROI has been tremendous.",
      author: "Elena Petrovich",
      role: "Customer Experience Director",
      company: "RetailGiant"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-dark to-dark/95">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-300">
            See what our enterprise clients have to say about their experience with
            our AI solutions and the impact on their business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-xl text-gray-300 mb-8">
            Join over 200+ leading enterprises that have transformed their operations with Calde.AI
          </p>
          <a href="#demo" className="btn-primary">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 