import AnimatedSection from './AnimatedSection';
import { Search, Lightbulb, Code, TestTube, Rocket } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Requirement Analysis',
      description: 'Understand your business and challenges',
      step: '01'
    },
    {
      icon: Lightbulb,
      title: 'Solution Design',
      description: 'Create a tailored technical roadmap',
      step: '02'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Agile, secure, and scalable development',
      step: '03'
    },
    {
      icon: TestTube,
      title: 'Testing & Deployment',
      description: 'Quality-checked and production-ready',
      step: '04'
    },
    {
      icon: Rocket,
      title: 'Support & Growth',
      description: 'Continuous improvement and support',
      step: '05'
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven development process ensures every project is delivered on time, 
            on budget, and exceeds expectations.
          </p>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 150}
              >
                <div className="relative group">
                  {/* Card */}
                  <div className="glass rounded-2xl p-6 text-center hover:bg-card/60 transition-all duration-500 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                  
                  {/* Connector Arrow - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-0.5 h-8 bg-primary/30" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
