import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MovingButton } from "@/components/ui/moving-button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Shield,
  Users,
  Award,
  TrendingUp,
  Car,
  Heart,
  Building,
  Wheat,
  Cross,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Building,
      title: "Business Insurance",
      description: "Protect your business with comprehensive coverage",
      color: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Secure your family's financial future",
      color: "text-red-500",
    },
    {
      icon: Car,
      title: "Vehicle Insurance",
      description: "Complete motor vehicle protection",
      color: "text-green-600",
    },
    {
      icon: Wheat,
      title: "Agricultural Insurance",
      description: "Protect your farming investments",
      color: "text-yellow-600",
    },
    {
      icon: Cross,
      title: "Medical Aid",
      description: "Quality healthcare coverage",
      color: "text-purple-600",
    },
    {
      icon: UserCheck,
      title: "Funeral Cover",
      description: "Dignified farewell arrangements",
      color: "text-gray-600",
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Shield, value: "20+", label: "Years Experience" },
    { icon: Award, value: "150+", label: "Awards Won" },
    { icon: TrendingUp, value: "99.8%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Business Owner",
      content: "Mwanza Risk Solutions provided excellent service when I needed business insurance. Professional and reliable!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Family Protection",
      content: "They helped me secure comprehensive life insurance for my family. Peace of mind is priceless.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Farm Owner",
      content: "Their agricultural insurance saved my farm during the drought. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Main gradient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl animate-float"
            style={{
              transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/25 via-blue-500/20 to-purple-600/25 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 via-orange-500/15 to-red-500/20 rounded-full blur-2xl animate-float delay-500"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`,
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-particle opacity-60`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your Partners in
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Personal Insurance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              With over 20 years of experience, we provide comprehensive insurance solutions
              to protect what matters most to you and your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <MovingButton asChild variant="primary" size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MovingButton>
              <MovingButton asChild variant="glowing" size="lg">
                <Link to="/services">Learn More</Link>
              </MovingButton>
            </div>

            {/* Experience Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <div className="flex items-center space-x-2 bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 border border-blue-400/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                <Award className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">20+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 border border-purple-400/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                <Users className="h-5 w-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Your Partner in Managing Risk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30">
                  <stat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl group-hover:from-white/30"></div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-gray-300 group-hover:text-primary transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              From personal protection to business coverage, we offer a complete range
              of insurance products tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gray-100 group-hover:bg-primary/10 transition-colors ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Mwanza Risk Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Guidance</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our experienced team provides personalized advice to help you make informed decisions about your insurance needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Competitive Rates</h3>
                    <p className="text-gray-600 dark:text-gray-300">We work with leading insurers to offer you the most competitive rates without compromising on coverage quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">Our dedicated support team is available around the clock to assist you with claims and policy inquiries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Claims Processing</h3>
                    <p className="text-gray-600 dark:text-gray-300">We ensure fast and fair claims processing, so you can get back on your feet as quickly as possible.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg"
                alt="Professional handshake representing partnership and trust in insurance"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to Get Protected?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Get a personalized insurance quote in minutes.</p>
                  <MovingButton asChild variant="primary" size="sm">
                    <Link to="/contact">Get Free Quote</Link>
                  </MovingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can protect
            what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MovingButton asChild variant="rainbow" size="lg">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MovingButton>
            <MovingButton asChild variant="neon" size="lg">
              <Link to="/services">Browse Services</Link>
            </MovingButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
