import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-accent/10" />
            
            {/* Animated Orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
            
            {/* Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Ready to transform your business{' '}
                <span className="text-gradient">with technology?</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Let's build something powerful together. Get in touch with our team 
                to discuss your project and see how we can help.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="group">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
                <Button variant="heroOutline" size="xl" className="group">
                  Request a Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
