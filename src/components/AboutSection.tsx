import AnimatedSection from './AnimatedSection';
import { Zap, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: 'Problem Solvers',
      description: 'Understanding real-world business challenges and converting them into effective solutions.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development processes ensuring quick turnaround without compromising quality.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships, not just projects.'
    },
    {
      icon: Award,
      title: 'Industry Ready',
      description: 'Solutions that are reliable, scalable, and ready for real-world deployment.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection animation="slide-left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Hevinka</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Hevinka is an IT solutions company focused on building reliable, scalable, and 
                industry-ready software products. We help businesses digitize their operations 
                through custom web solutions, ERP systems, rental software, IoT integrations, 
                and digital marketing.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our core strength lies in understanding real-world business problems and 
                converting them into simple, effective technology solutions.
              </p>
            </AnimatedSection>
          </div>

          {/* Right Content - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={index} 
                animation="scale-in" 
                delay={index * 100}
              >
                <div className="glass p-6 rounded-2xl hover:bg-card/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
