import React, { useState } from 'react';
import { Leaf, Menu, X, Sprout, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function MoofarAbout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <Link href="/about"><a className="text-[#9ad3a1] font-semibold transition-colors">About Us</a></Link>
              <Link href="/services"><a className="text-white hover:text-[#9ad3a1] transition-colors">Services</a></Link>
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
              <Link href="/about"><a className="text-[#9ad3a1] font-semibold">About Us</a></Link>
              <Link href="/services"><a className="text-white hover:text-[#9ad3a1] transition-colors">Services</a></Link>
              <Link href="/contact"><a className="text-white hover:text-[#9ad3a1] transition-colors">Contact Us</a></Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#1b5e20] to-[#2e7d32] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6">
            Moofar Landscape & Nursery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            At Moofar, our mission is to cultivate beautiful, sustainable landscapes through expert maintenance, thoughtful design, and quality nursery stock. We care for every client with dedication, passion, and a green thumb.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-8 text-center">
            Our History
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p>
              Moofar Proprietary Limited was officially incorporated on 18 September 2025 under the Companies Act [CAP: 42:01] of Botswana. Built on years of horticultural expertise and landscape experience, we established our company to provide professional landscape maintenance, garden design, irrigation management, and nursery plant propagation services.
            </p>
            <p>
              Our team brings together decades of combined experience in horticulture, landscape design, and sustainable gardening practices. We're committed to transforming outdoor spaces into beautiful, thriving environments while maintaining the highest standards of environmental stewardship.
            </p>
            <p>
              Today, our services span residential gardens, estates, and commercial spaces throughout Botswana. Every project is handled with precision, creativity, and a deep respect for the environment and our clients' vision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[hsl(45,40%,95%)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-[#1b5e20]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-8 h-8 text-[#2e7d32]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#1b5e20]">
                    Gardening, Landscaping & Maintenance
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Comprehensive landscape care services to keep your outdoor spaces thriving and beautiful all year round:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Lawn care and turf management</li>
                  <li>• Professional pruning and trimming</li>
                  <li>• Landscape design and installation</li>
                  <li>• Seasonal garden maintenance</li>
                  <li>• Irrigation system management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#1b5e20]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sprout className="w-8 h-8 text-[#2e7d32]" />
                  <h3 className="font-serif text-2xl font-semibold text-[#1b5e20]">
                    Horticultural Nursery
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Quality plant stock cultivated with sustainable horticultural practices:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Trees and shrubs</li>
                  <li>• Flowering species</li>
                  <li>• Indigenous plants</li>
                  <li>• Locally adapted varieties</li>
                  <li>• Expert planting advice</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Sustainability",
                desc: "We prioritize environmentally responsible practices in all our work, from water conservation to native plant selection."
              },
              {
                icon: "✨",
                title: "Quality",
                desc: "Every project receives meticulous attention to detail and the highest standards of horticultural excellence."
              },
              {
                icon: "🤝",
                title: "Customer Care",
                desc: "We build lasting relationships with our clients through dedication, reliability, and responsive service."
              }
            ].map((value, idx) => (
              <Card key={idx} className="bg-[#9ad3a1]/10 border-[#1b5e20]/20 text-center">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1b5e20] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-[hsl(45,40%,95%)]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#1b5e20] mb-8 text-center">
            Company Information
          </h2>
          <Card className="bg-white border-[#1b5e20]/20">
            <CardContent className="p-8 space-y-3">
              <p><strong className="text-[#1b5e20]">Registered Company Name:</strong> Moofar Proprietary Limited</p>
              <p><strong className="text-[#1b5e20]">Company UIN:</strong> BW00009410484</p>
              <p><strong className="text-[#1b5e20]">Legal Status:</strong> Incorporated under the Companies Act [CAP: 42:01]</p>
              <p><strong className="text-[#1b5e20]">Incorporation Date:</strong> 18 September 2025</p>
              <p><strong className="text-[#1b5e20]">Certificate Generated On:</strong> 18 September 2025 at 10:19 CAT</p>
              <p><strong className="text-[#1b5e20]">Issued by:</strong> Registrar of Companies and Business Names, Companies and Intellectual Property Authority (CIPA)</p>
            </CardContent>
          </Card>
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