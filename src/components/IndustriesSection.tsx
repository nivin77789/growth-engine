import AnimatedSection from './AnimatedSection';
import { Truck, Building2, Factory, ShoppingBag, Package, Briefcase } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Truck,
      title: 'Heavy Machinery & Equipment Rental',
      description: 'Comprehensive solutions for equipment rental businesses'
    },
    {
      icon: Building2,
      title: 'Construction & Infrastructure',
      description: 'Digital tools for construction project management'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Streamlined operations for manufacturing units'
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-Commerce',
      description: 'Complete e-commerce solutions for modern retail'
    },
    {
      icon: Package,
      title: 'Logistics & Operations',
      description: 'Efficient logistics and supply chain management'
    },
    {
      icon: Briefcase,
      title: 'Service-based Businesses',
      description: 'Custom solutions for service industry needs'
    }
  ];

  return (
    <section id="industries" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            Our solutions are designed for diverse industries, each with unique challenges 
            and requirements that we understand deeply.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-in" 
              delay={index * 100}
            >
              <div className="glass rounded-2xl p-6 text-center hover:bg-card/60 transition-all duration-500 group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
