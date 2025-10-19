import React, { useState } from 'react';
import { Leaf, Menu, X, Trees, Fence, Sprout, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function MoofarServices() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Leaf,
      title: "Professional Landscaping",
      description: "Transform your outdoor spaces with our expert landscaping services. We create beautiful, functional landscapes that enhance your property's aesthetic appeal and value.",
      offerings: [
        "Custom landscape design and planning",
        "Garden installation and planting",
        "Lawn establishment and sodding",
        "Hardscaping (pathways, patios, retaining walls)",
        "Irrigation system installation",
        "Outdoor lighting design",
        "Plant selection and placement"
      ]
    },
    {
      icon: Sprout,
      title: "Garden & Lawn Maintenance",
      description: "Keep your gardens and lawns healthy and beautiful year-round with our regular maintenance services.",
      offerings: [
        "Regular lawn mowing and edging",
        "Pruning and trimming of trees and shrubs",
        "Weeding and mulching",
        "Fertilization and pest control",
        "Seasonal cleanups",
        "Irrigation system maintenance",
        "Garden bed care"
      ]
    },
    {
      icon: Trees,
      title: "Bush Clearing & Land Preparation",
      description: "Prepare your land for development or improve property accessibility with our professional bush clearing services.",
      offerings: [
        "Overgrown vegetation removal",
        "Tree and stump removal",
        "Land leveling and grading",
        "Site preparation for construction",
        "Fire break creation",
        "Debris removal and disposal",
        "Erosion control measures"
      ]
    },
    {
      icon: Fence,
      title: "Fencing Solutions",
      description: "Secure your property and enhance privacy with our quality fencing installation services. We offer various fencing options to meet your specific needs and budget.",
      offerings: [
        "Wooden fences (palisade, picket, privacy)",
        "Metal fencing (chain link, steel palisade)",
        "Wire mesh fencing",
        "Gate installation and automation",
        "Fence repair and maintenance",
        "Custom fence designs",
        "Agricultural fencing"
      ]
    },
    {
      icon: Sprout,
      title: "Horticultural Nursery",
      description: "Source quality plants and gardening supplies from our nursery. We provide healthy, locally adapted plants perfect for Botswana's climate.",
      offerings: [
        "Indigenous trees and shrubs",
        "Ornamental plants and flowers",
        "Fruit trees and vegetables",
        "Ground covers and grasses",
        "Succulents and drought-resistant plants",
        "Shade trees",
        "Expert planting advice included"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(45,40%,95%)]">
      {/* Navigation */}
      <nav className="bg-[#1b5e20] shadow-lg">
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
              <Link href="/services"><a className="text-[#9ad3a1] font-semibold transition-colors">Services</a></Link>
              <Link href="/contact"><a className="text-white hover:text-[#9ad3a1] transition-colors">Contact Us</a></Link>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <Link href="/"><a className="text-white hover:text-[#9ad3a1] transition-colors">Home</a></Link>
              <Link href="/about"><a className="text-white hover:text-[#9ad3a1] transition-colors">About Us</a></Link>
              <Link href="/services"><a className="text-[#9ad3a1] font-semibold">Services</a></Link>
              <Link href="/contact"><a className="text-white hover:text-[#9ad3a1] transition-colors">Contact Us</a></Link>
            </div>
          )}
        </div>
      </nav>

      {/* Page Title */}
      <section className="py-20 bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive landscaping and property maintenance solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#9ad3a1]/10'} border-[#1b5e20]/20`}>
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#9ad3a1]/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#1b5e20]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-3xl font-semibold text-[#1b5e20] mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-700 mb-6 text-lg">
                        {service.description}
                      </p>
                      <h3 className="font-semibold text-[#2e7d32] mb-3">What We Offer:</h3>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {service.offerings.map((offering, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="text-[#2e7d32] mr-2">✓</span>
                            <span>{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#1b5e20] mb-4">
            Service Areas
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We proudly serve Francistown and surrounding areas in Botswana. Contact us to confirm service availability in your location.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1b5e20] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Request a Free Quote
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Ready to get started? Contact us today for a free consultation and customized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#9ad3a1] hover:bg-white text-[#1b5e20] px-8 py-6 text-lg">
                Get Your Free Quote
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Moofar Landscape & Nursery | Designed by Tinny Bothepha Mosimanyana</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://facebook.com" className="hover:text-[#9ad3a1]" aria-label="Facebook">f</a>
            <a href="https://linkedin.com" className="hover:text-[#9ad3a1]" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" className="hover:text-[#9ad3a1]" aria-label="Instagram">ig</a>
          </div>
        </div>
      </footer>
    </div>
  );
}