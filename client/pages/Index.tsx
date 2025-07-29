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
  Phone,
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
      content:
        "Mwanza Risk Solutions provided excellent service when I needed business insurance. Professional and reliable!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Family Protection",
      content:
        "They helped me secure comprehensive life insurance for my family. Peace of mind is priceless.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Farm Owner",
      content:
        "Their agricultural insurance saved my farm during the drought. Highly recommend their services!",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Main gradient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-blue/20 via-brand-blue-light/15 to-brand-blue-dark/20 rounded-full blur-3xl animate-float"
            style={{
              transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.1}deg)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-brand-navy-light/25 via-brand-navy/20 to-brand-navy-dark/25 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)`,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-brand-gold-light/15 via-brand-gold/20 to-brand-gold-dark/15 rounded-full blur-2xl animate-float delay-500"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`,
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full animate-particle opacity-60`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}

            {/* Larger floating elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`large-${i}`}
                className={`absolute w-1 h-1 bg-gradient-to-r from-brand-gold-light to-brand-gold rounded-full animate-float opacity-40`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,140,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              YOUR PARTNERS IN
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SHORT TERM INSURANCE
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              With over 20 years of experience, we provide comprehensive
              insurance solutions to protect what matters most to you and your
              business.
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
                <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                  20+ Years of Experience
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 border border-purple-400/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                <Users className="h-5 w-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  Your Partner in Managing Risk
                </span>
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
      <section className="py-20 bg-brand-navy/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30">
                  <stat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl group-hover:from-white/30"></div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Insurance Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              From personal protection to business coverage, we offer a complete
              range of insurance products tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 border-gray-700/50"
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gray-700/50 group-hover:bg-primary/10 transition-colors ${service.color}`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <MovingButton asChild variant="glowing" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MovingButton>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl animate-float delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Experience the future of insurance with our innovative approach
              and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚀",
                title: "Instant Quotes",
                description:
                  "Get personalized quotes in under 60 seconds using our AI-powered assessment.",
                delay: "0ms",
              },
              {
                icon: "📱",
                title: "Mobile First",
                description:
                  "Manage your policies, file claims, and get support right from your phone.",
                delay: "200ms",
              },
              {
                icon: "🔒",
                title: "Bank-Level Security",
                description:
                  "Your data is protected with military-grade encryption and security protocols.",
                delay: "400ms",
              },
              {
                icon: "⚡",
                title: "Lightning Claims",
                description:
                  "Most claims processed and paid within 24 hours using automated systems.",
                delay: "600ms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: feature.delay }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)] animate-pulse"></div>
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-conic from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their most
              valuable assets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Insurance Licenses", value: "15+", icon: "📋" },
              { label: "Partner Networks", value: "50+", icon: "🤝" },
              { label: "Countries Served", value: "12", icon: "🌍" },
              { label: "Claims Success Rate", value: "99.2%", icon: "✅" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { text: "ISO 27001 Certified", icon: "���" },
              { text: "A+ BBB Rating", icon: "⭐" },
              { text: "PCI DSS Compliant", icon: "🛡️" },
              { text: "24/7 Support", icon: "🎧" },
            ].map((badge, index) => (
              <div
                key={index}
                className="group flex items-center space-x-2 bg-gradient-to-r from-gray-700/60 to-gray-600/40 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-500/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </span>
                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors duration-300">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Mwanza Risk Solutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Expert Guidance
                    </h3>
                    <p className="text-gray-200">
                      Our experienced team provides personalized advice to help
                      you make informed decisions about your insurance needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Competitive Rates
                    </h3>
                    <p className="text-gray-200">
                      We work with leading insurers to offer you the most
                      competitive rates without compromising on coverage
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-200">
                      Our dedicated support team is available around the clock
                      to assist you with claims and policy inquiries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Quick Claims Processing
                    </h3>
                    <p className="text-gray-200">
                      We ensure fast and fair claims processing, so you can get
                      back on your feet as quickly as possible.
                    </p>
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
                <div className="bg-gray-800/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Ready to Get Protected?
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Get a personalized insurance quote in minutes.
                  </p>
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
      <section className="py-20 bg-gradient-to-br from-gray-800 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-200">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-700/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/15 to-purple-400/15 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Updates & Insights
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Stay informed with our latest industry insights, policy updates,
              and company news.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Industry News",
                title: "New Insurance Regulations for 2024",
                excerpt:
                  "Important updates affecting all insurance policies starting January 2024...",
                date: "Dec 15, 2023",
                readTime: "3 min read",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                category: "Company Update",
                title: "AI-Powered Claims Processing Launch",
                excerpt:
                  "We're revolutionizing claims processing with advanced AI technology...",
                date: "Dec 10, 2023",
                readTime: "5 min read",
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                category: "Tips & Advice",
                title: "5 Ways to Lower Your Insurance Premiums",
                excerpt:
                  "Expert tips to help you save money while maintaining comprehensive coverage...",
                date: "Dec 5, 2023",
                readTime: "4 min read",
                gradient: "from-green-500/20 to-emerald-500/20",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-sm border-gray-600/30 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${article.gradient} group-hover:h-3 transition-all duration-300`}
                ></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-3 group-hover:text-gray-100 transition-colors duration-300">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <MovingButton asChild variant="outline" size="lg">
              <Link to="/news">
                View All Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MovingButton>
          </div>
        </div>
      </section>

      {/* Interactive Contact Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_70%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Ready to protect what matters most? Our experts are standing by
                to help you find the perfect coverage.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "1",
                    action: "Tell us about your needs",
                    time: "30 seconds",
                  },
                  {
                    step: "2",
                    action: "Get personalized quotes",
                    time: "60 seconds",
                  },
                  {
                    step: "3",
                    action: "Choose your coverage",
                    time: "5 minutes",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-medium">
                        {item.action}
                      </span>
                      <span className="text-gray-400 text-sm ml-2">
                        ({item.time})
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MovingButton asChild variant="primary" size="lg">
                  <Link to="/contact">
                    Start Your Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MovingButton>
                <MovingButton asChild variant="outline" size="lg">
                  <a href="tel:+27111234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Expert
                  </a>
                </MovingButton>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-700/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">
                    Quote Calculator
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                    <div className="h-8 bg-gray-700 rounded"></div>
                  </div>
                  <div className="animate-pulse delay-300">
                    <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-700 rounded"></div>
                  </div>
                  <div className="animate-pulse delay-500">
                    <div className="h-4 bg-gray-600 rounded w-2/3 mb-2"></div>
                    <div className="h-8 bg-gray-700 rounded"></div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30">
                    <div className="text-white font-semibold mb-1">
                      Estimated Monthly Premium
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      R 299 - R 899
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-sm">SAVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-brand-navy-light mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can
            protect what matters most to you.
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
