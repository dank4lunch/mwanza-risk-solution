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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
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
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Partners in
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Personal Insurance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
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
              <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 border border-blue-200/20 dark:border-blue-400/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                <Award className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">20+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 border border-purple-200/20 dark:border-purple-400/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                <Users className="h-5 w-5 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">Your Partner in Managing Risk</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Mwanza Risk Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Our experienced team provides personalized advice to help you make informed decisions about your insurance needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                    <p className="text-gray-600">We work with leading insurers to offer you the most competitive rates without compromising on coverage quality.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our dedicated support team is available around the clock to assist you with claims and policy inquiries.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Quick Claims Processing</h3>
                    <p className="text-gray-600">We ensure fast and fair claims processing, so you can get back on your feet as quickly as possible.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Protected?</h3>
                <p className="mb-6">Get a personalized insurance quote in minutes. Our experts are standing by to help you find the perfect coverage.</p>
                <Button variant="secondary" asChild size="lg">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can protect
            what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-primary">
              <Link to="/services">Browse Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
