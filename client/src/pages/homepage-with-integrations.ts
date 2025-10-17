import React, { useState, useEffect } from 'react';
import { Leaf, Sprout, Trees, Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Leaf,
      title: "Garden Maintenance",
      description: "Professional garden care services including pruning, weeding, and seasonal planting to keep your outdoor spaces vibrant year-round."
    },
    {
      icon: Trees,
      title: "Landscaping Design",
      description: "Transform your property with custom landscape designs featuring hardscaping, native plants, and sustainable water features."
    },
    {
      icon: Sprout,
      title: "Nursery Services",
      description: "Premium selection of healthy plants, shrubs, and trees with expert guidance on selection and care for your climate."
    }
  ];

  const team = [
    {
      name: "Mooketsi Mapungwa",
      role: "Director",
      email: "mooketsi@moofar.co.bw",
      phone: "+267 123 4567"
    },
    {
      name: "Farai Madorobo",
      role: "Manager",
      email: "farai@moofar.co.bw",
      phone: "+267 234 5678"
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(45,40%,95%)]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[hsl(145,45%,25%)]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-[hsl(145,30%,55%)]" />
              <span className="font-serif text-2xl font-semibold text-white">Moofar</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">About</a>
              <a href="#team" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Team</a>
              <a href="#contact" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Contact</a>
              <Link href="/integrations">
                <a className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Integrations</a>
              </Link>
              <Button className="bg-[hsl(145,30%,55%)] hover:bg-[hsl(145,30%,45%)] text-white">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#services" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">About</a>
              <a href="#team" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Team</a>
              <a href="#contact" className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Contact</a>
              <Link href="/integrations">
                <a className="text-white hover:text-[hsl(145,30%,55%)] transition-colors">Integrations</a>
              </Link>
              <Button className="bg-[hsl(145,30%,55%)] hover:bg-[hsl(145,30%,45%)] text-white w-full">
                Get Quote
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(145,45%,25%)]/40 via-[hsl(145,45%,25%)]/30 to-[hsl(145,45%,25%)]/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Moofar Proprietary Limited
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Cultivating beauty through professional gardening, landscaping, and nursery services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[hsl(145,45%,25%)] hover:bg-[hsl(145,45%,20%)] text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[hsl(145,45%,25%)] px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[hsl(25,35%,40%)] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[hsl(25,25%,20%)]/70 max-w-2xl mx-auto">
              Comprehensive solutions for all your landscaping and gardening needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white border-[hsl(25,35%,40%)]/10"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[hsl(145,30%,55%)]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[hsl(145,45%,25%)]" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-[hsl(25,35%,40%)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(25,25%,20%)]/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-[hsl(145,30%,55%)] hover:text-[hsl(145,45%,25%)] font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[hsl(25,35%,40%)] mb-6">
                Growing Excellence Since Day One
              </h2>
              <p className="text-lg text-[hsl(25,25%,20%)]/70 mb-6 leading-relaxed">
                Moofar Proprietary Limited is a registered company dedicated to transforming outdoor spaces across Botswana. Our team combines years of horticultural expertise with a passion for sustainable landscaping practices.
              </p>
              <p className="text-lg text-[hsl(25,25%,20%)]/70 mb-8 leading-relaxed">
                From residential gardens to commercial landscapes, we bring professionalism, creativity, and care to every project. Our nursery stocks premium plants suited to local conditions, ensuring your investment thrives for years to come.
              </p>
              <div className="bg-[hsl(195,60%,90%)] rounded-lg p-6 border-l-4 border-[hsl(145,30%,55%)]">
                <p className="text-sm font-medium text-[hsl(25,35%,40%)]">
                  Company Registration: BW00001234567
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800"
                alt="Nursery facility"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[hsl(25,35%,40%)] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-[hsl(25,25%,20%)]/70 max-w-2xl mx-auto">
              Expert leadership dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <Card key={idx} className="bg-white border-[hsl(25,35%,40%)]/10">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    <div className="w-24 h-24 rounded-full bg-[hsl(145,30%,55%)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-serif text-[hsl(145,45%,25%)]">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-sans text-xl font-semibold text-[hsl(25,35%,40%)] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[hsl(145,30%,55%)] font-medium mb-4">
                        {member.role}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[hsl(25,25%,20%)]/70 justify-center sm:justify-start">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[hsl(25,25%,20%)]/70 justify-center sm:justify-start">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact" className="py-20 md:py-24 bg-[hsl(145,45%,25%)] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform your outdoor space? Contact us today for a consultation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-[hsl(145,30%,55%)]" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-white/80">+267 123 4567</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-[hsl(145,30%,55%)]" />
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-white/80">info@moofar.co.bw</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-[hsl(145,30%,55%)]" />
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-white/80">Gaborone, Botswana</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-[hsl(145,30%,55%)] hover:bg-[hsl(145,30%,45%)] text-white px-8 py-6 text-lg"
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(25,25%,20%)] text-[hsl(45,40%,95%)] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-[hsl(145,30%,55%)]" />
                <span className="font-serif text-xl font-semibold">Moofar</span>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Professional gardening, landscaping, and nursery services across Botswana.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-[hsl(145,30%,55%)] transition-colors">Garden Maintenance</a></li>
                <li><a href="#services" className="hover:text-[hsl(145,30%,55%)] transition-colors">Landscaping Design</a></li>
                <li><a href="#services" className="hover:text-[hsl(145,30%,55%)] transition-colors">Nursery Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+267 123 4567</li>
                <li>info@moofar.co.bw</li>
                <li>Gaborone, Botswana</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Moofar Proprietary Limited. All rights reserved.</p>
            <p className="mt-2">Company Registration: BW00001234567</p>
          </div>
        </div>
      </footer>
    </div>
  );
}