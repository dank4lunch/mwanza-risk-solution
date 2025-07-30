import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Mwanza Risk Solutions</div>
                <div className="text-sm text-gray-400">Your Partners in Personal Insurance</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              With over 20 years of experience, we provide comprehensive insurance solutions
              to protect what matters most to you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Personal Lines Insurance</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Commercial Insurance</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Liability Insurance</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Uber & E-Hailing Insurance</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Contractors All Risks</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Plant All Risks Insurance</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-gray-400 text-sm">
                  <a href="tel:0878026266" className="block hover:text-white transition-colors">087 802 6266</a>
                  <a href="tel:0825604131" className="block hover:text-white transition-colors">082 560 4131</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@mrsolution.co.za" className="text-gray-400 text-sm hover:text-white transition-colors">info@mrsolution.co.za</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <a href="https://maps.google.com/?q=57+6th+Road,+Hyde+Park,+Sandton+2196" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors">
                  57 6th Road, Hyde Park<br />
                  Sandton 2196, South Africa
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="https://facebook.com/mwanzarisksolution" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/mwanzarisk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/mwanza-risk-solution" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Mwanza Risk Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => {
                  const subject = encodeURIComponent("Privacy Policy Request");
                  const body = encodeURIComponent("I would like to receive a copy of your Privacy Policy.");
                  window.location.href = `mailto:info@mrsolution.co.za?subject=${subject}&body=${body}`;
                }}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => {
                  const subject = encodeURIComponent("Terms of Service Request");
                  const body = encodeURIComponent("I would like to receive a copy of your Terms of Service.");
                  window.location.href = `mailto:info@mrsolution.co.za?subject=${subject}&body=${body}`;
                }}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
