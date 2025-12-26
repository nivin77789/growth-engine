import AnimatedSection from './AnimatedSection';
import { Globe, ShoppingCart, Layers, Truck, Wifi, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites that represent your brand and convert visitors into customers.',
      features: ['Business & corporate websites', 'Custom web applications', 'SEO-friendly designs', 'Fast & secure architecture'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Launch and scale your online business with powerful e-commerce platforms.',
      features: ['Product & inventory management', 'Secure payment gateways', 'Order management', 'Custom admin dashboards'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Layers,
      title: 'ERP Software Solutions',
      description: 'Streamline your business operations with tailor-made ERP systems.',
      features: ['Finance & billing', 'Inventory management', 'HR & payroll', 'Reporting & analytics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Heavy Machinery Rental Software',
      description: 'Our flagship product for heavy equipment and machinery rental industry.',
      features: ['Equipment & fleet management', 'Rental booking & scheduling', 'Maintenance tracking', 'Billing & invoicing'],
      color: 'from-orange-500 to-amber-500',
      featured: true
    },
    {
      icon: Wifi,
      title: 'IoT Solutions',
      description: 'Connect your physical assets to digital intelligence for smarter operations.',
      features: ['IoT-enabled monitoring', 'Real-time data tracking', 'Device integration', 'Predictive maintenance'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Grow your brand online with result-driven digital strategies.',
      features: ['SEO optimization', 'Social media marketing', 'Google Ads campaigns', 'Brand strategy'],
      color: 'from-rose-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Core Services We Offer
          </h2>
          <p className="text-muted-foreground text-lg">
            From custom web development to IoT integrations, we provide end-to-end technology 
            solutions tailored to your business needs.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <div 
                className={`glass rounded-2xl p-6 h-full hover:bg-card/60 transition-all duration-500 group relative overflow-hidden ${
                  service.featured ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    Flagship
                  </div>
                )}
                
                {/* Gradient Orb */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
