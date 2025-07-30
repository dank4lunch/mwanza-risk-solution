import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-700/60 backdrop-blur-sm rounded-xl p-3 shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:shadow-blue-500/40 group-hover:scale-105 group-hover:-translate-y-0.5 border border-gray-600/30 group-hover:border-blue-400/30">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F40f4f3f8cf004cb78312fbe6b3e1cec8%2F8da1c807f86140519b745a7f486c5b46?format=webp&width=200&removeBackground=true"
                alt="Mwanza Risk Solutions"
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent rounded-xl group-hover:from-blue-500/20 group-hover:via-blue-500/10 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl group-hover:from-white/10 transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all after:duration-300 hover:after:w-full",
                  location.pathname === item.href
                    ? "text-primary after:w-full"
                    : "text-gray-200"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Phone className="h-4 w-4 text-primary" />
              <span>+27 (0) 11 123 4567</span>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg",
                    location.pathname === item.href
                      ? "text-primary bg-gradient-to-r from-primary/10 to-blue-500/10 border-l-4 border-primary"
                      : "text-gray-200 hover:text-primary hover:bg-primary/5"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
