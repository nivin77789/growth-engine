import { Globe, Layers, Truck, Wifi, TrendingUp } from 'lucide-react';

const Footer = () => {
  const services = [
    { icon: Globe, label: 'Websites' },
    { icon: Layers, label: 'ERP Solutions' },
    { icon: Truck, label: 'Rental Software' },
    { icon: Wifi, label: 'IoT Systems' },
    { icon: TrendingUp, label: 'Digital Marketing' }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="py-16 border-t border-border/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">H</span>
              </div>
              <span className="font-display font-bold text-xl">Hevinka</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building smart software for modern businesses. We help companies digitize
              operations and scale with innovative technology solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-sm text-muted-foreground"
                >
                  <service.icon className="w-4 h-4 text-primary" />
                  {service.label}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>adithyanunni258@gmail.com</li>
              <li>9061399830</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Hevinka IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
