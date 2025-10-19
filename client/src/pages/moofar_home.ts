import React, { useState, useEffect } from 'react';
import { Leaf, Trees, Fence, Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function MoofarHome() {
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
      title: "Landscaping",
      description: "Complete landscape design and installation services to create stunning outdoor spaces that enhance your property's value and beauty."
    },
    {
      icon: Trees,
      title: "Bush Clearing",
      description: "Professional land clearing services to prepare your property for development or improve accessibility and safety."
    },
    {
      icon: Fence,
      title: "Fencing",
      description: "Quality fencing solutions for security, privacy, and aesthetic appeal. We install durable fences that stand the test of time."
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(45,40%,95%)]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1b5e20]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#9ad3a1] flex items-center justify-center">
                  <span className="text-[#1b5e20] text-lg font-bold">M</span>
                </div>
                <span className="font-serif text-2xl font-semibold text-white">MOOFAR</span>
              </a>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-white hover:text-[#9ad3a1] transition-colors">Home</a></Link>
              <Link href="/about"><a className="text-white hover:text-[#9ad3a1] transition-colors">About Us</a></Link>
              <Link href="/services"><a className="text-white hover:text-[#9ad3a1] transition-colors">Services</a></Link>
              <Link href="/contact"><a className="text-white hover:text-[#9ad3a1] transition-colors">Contact Us</a></Link>
              <Button className="bg-[#9ad3a1] hover:bg-[#2e7d32] text-[#1b5e20] hover:text-white">
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
              <Link href="/"><a className="text-white hover:text-[#9ad3a1] transition-colors">Home</a></Link>
              <Link href="/about"><a className="text-white hover:text-[#9ad3a1] transition-colors">About Us</a></Link>
              <Link href="/services"><a className="text-white hover:text-[#9ad3a1] transition-colors">Services</a></Link>
              <Link href="/contact"><a className="text-white hover:text-[#9ad3a1] transition-colors">Contact Us</a></Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b5e20]/60 via-[#1b5e20]/40 to-[#1b5e20]/70"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Transform Your Outdoor Spaces
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Professional Landscaping, Bush Clearing & Fencing Services in Francistown
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="bg-[#9ad3a1] hover:bg-[#2e7d32] text-[#1b5e20] hover:text-white px-8 py-6 text-lg">
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#1b5e20] px-8 py-6 text-lg"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-6">
              Welcome to Moofar Landscape & Nursery
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Moofar, we specialize in creating and maintaining beautiful outdoor environments. From residential gardens to commercial landscapes, our experienced team delivers quality workmanship with attention to detail. Whether you need regular garden maintenance, comprehensive landscaping, or specialized services like bush clearing and fencing, we have the expertise to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24 bg-[hsl(45,40%,95%)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive solutions for all your landscaping needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl bg-white border-[#1b5e20]/10"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#9ad3a1]/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#1b5e20]" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-[#1b5e20] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/services">
                    <a className="inline-flex items-center text-[#2e7d32] hover:text-[#1b5e20] font-medium transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-12 text-center">
            Why Choose Moofar?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "✓ Experienced Team", desc: "Our skilled professionals bring years of expertise in landscaping and property maintenance." },
              { title: "✓ Quality Workmanship", desc: "We take pride in delivering high-quality results that exceed client expectations." },
              { title: "✓ Reliable Service", desc: "Count on us for timely project completion and dependable ongoing maintenance." },
              { title: "✓ Competitive Pricing", desc: "We offer excellent value with transparent pricing and no hidden costs." }
            ].map((benefit, idx) => (
              <Card key={idx} className="bg-[#9ad3a1]/10 border-[#1b5e20]/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#1b5e20] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-[#1b5e20] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Let's discuss how we can help you create the outdoor space of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#9ad3a1] hover:bg-white text-[#1b5e20] px-8 py-6 text-lg">
                Contact Us Today
              </Button>
            </Link>
            <a href="tel:+26777723232">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1b5e20] px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                +267 7772 3232
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e7d32] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-[#9ad3a1]" />
                <span className="font-serif text-xl font-semibold">Moofar</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Professional landscaping, bush clearing, and fencing services in Francistown, Botswana.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/"><a className="hover:text-[#9ad3a1] transition-colors">Home</a></li></Link>
                <li><Link href="/about"><a className="hover:text-[#9ad3a1] transition-colors">About Us</a></li></Link>
                <li><Link href="/services"><a className="hover:text-[#9ad3a1] transition-colors">Services</a></li></Link>
                <li><Link href="/contact"><a className="hover:text-[#9ad3a1] transition-colors">Contact</a></li></Link>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+267 7772 3232</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Mookfara@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Francistown, Botswana</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2025 Moofar Landscape & Nursery | Designed by Tinny Bothepha Mosimanyana</p>
            <p className="mt-2">Company UIN: BW00009410484</p>
          </div>
        </div>
      </footer>
    </div>
  );
}