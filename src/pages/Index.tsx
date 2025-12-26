import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hevinka IT Solutions | Smart Software for Growing Businesses</title>
        <meta 
          name="description" 
          content="Hevinka builds powerful websites, scalable ERP systems, rental software for heavy machinery, and intelligent IoT solutions. Transform your business with technology." 
        />
        <meta name="keywords" content="IT solutions, ERP software, heavy machinery rental software, IoT solutions, web development, digital marketing, India" />
        <link rel="canonical" href="https://hevinka.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <ProcessSection />
          <IndustriesSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
