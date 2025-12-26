import AnimatedSection from './AnimatedSection';
import { Target, Layers, Code2, DollarSign, HeartHandshake, CheckCircle2 } from 'lucide-react';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Industry-focused solutions',
      description: 'Deep understanding of sector-specific challenges and requirements.'
    },
    {
      icon: Layers,
      title: 'Scalable & future-ready',
      description: 'Architecture designed to grow with your business needs.'
    },
    {
      icon: Code2,
      title: 'Custom development',
      description: 'Tailored solutions, not cookie-cutter templates.'
    },
    {
      icon: DollarSign,
      title: 'Transparent pricing',
      description: 'Clear costs with no hidden fees or surprises.'
    },
    {
      icon: HeartHandshake,
      title: 'Long-term support',
      description: 'Continuous maintenance and improvement partnership.'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection animation="slide-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Hevinka</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We don't just build software—we build solutions that grow with your business. 
              Our commitment to quality, transparency, and long-term partnerships sets us apart.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{reason.title}</h4>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Content - Visual Element */}
          <AnimatedSection animation="slide-right" className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-strong rounded-3xl p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 glow-primary">
                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">Every project delivered with excellence</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '99%', label: 'Client Satisfaction' },
                    { value: '100%', label: 'On-time Delivery' },
                    { value: '24/7', label: 'Support Available' },
                    { value: '0', label: 'Security Breaches' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-secondary/50 rounded-xl p-4 text-center">
                      <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-2xl opacity-20 blur-xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
