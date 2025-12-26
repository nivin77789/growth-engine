import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@hevinka.com',
      href: 'mailto:contact@hevinka.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-XXXXXXXXXX',
      href: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out our contact form and our team will get back to you within 24 hours.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection animation="slide-left">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 h-12"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 h-12"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary/50 border-border/50 h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary/50 border-border/50 min-h-[120px] resize-none"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="glass rounded-2xl p-6 flex items-center gap-4 hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-semibold text-lg">{info.value}</div>
                  </div>
                </a>
              ))}
              
              {/* Additional Info Card */}
              <div className="glass rounded-2xl p-6">
                <h4 className="font-display font-bold text-lg mb-3">Business Hours</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST<br />
                  Sunday: Closed
                </p>
                <p className="text-sm text-muted-foreground">
                  For urgent inquiries, our support team is available 24/7.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
