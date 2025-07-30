import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MovingButton } from "@/components/ui/moving-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Building,
  Heart,
  Car,
  Home,
  Shield,
  Truck,
  Users,
  HardHat,
  Settings,
  FileText,
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "personal-lines",
      icon: Home,
      title: "Personal Lines Insurance",
      description: "Mwanza Risk Solution understands that your personal assets are a result of your hard work and devotion. Our Personal Lines Insurance protects your home, automobile, and personal items from unexpected catastrophes.",
      features: [
        "Homeowners insurance",
        "Car insurance", 
        "Personal Possessions Insurance",
        "Personal Insurance"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    },
    {
      id: "commercial",
      icon: Building,
      title: "Commercial Insurance", 
      description: "Your business is your livelihood, and we at Mwanza Risk Solution are dedicated to assisting you in protecting it. Our Commercial Insurance options are designed to cover a wide range of risks that may affect your business operations.",
      features: [
        "Property insurance",
        "Business interruption insurance",
        "Employer's Liability Insurance", 
        "Professional Indemnity Insurance",
        "Commercial Insurance"
      ],
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      image: "https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg",
    },
    {
      id: "liability",
      icon: Shield,
      title: "Liability Insurance",
      description: "In today's litigious atmosphere, liability insurance is critical for safeguarding your personal and corporate assets from legal claims. Mwanza Risk Solution provides comprehensive Liability Insurance coverage.",
      features: [
        "Public Liability Insurance",
        "Product Liability Insurance", 
        "Personal Liability Insurance"
      ],
      color: "text-red-600",
      bgColor: "bg-red-500/10",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    },
    {
      id: "uber-ehailing",
      icon: Car,
      title: "Uber and E-Hailing Insurance",
      description: "Navigating the fast-paced world of ride-hailing services poses its own set of challenges. At Mwanza Risk Solution, we provide specialized Uber and E-Hailing Insurance that covers drivers and their vehicles.",
      features: [
        "Comprehensive Vehicle Coverage",
        "Passenger Liability",
        "Loss of Income Protection"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-500/10", 
      image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
    },
    {
      id: "performance-guarantees",
      icon: FileText,
      title: "Performance Guarantees",
      description: "Performance bonds are essential in project management because they serve as critical financial tools that ensure projects are completed on time and within the agreed-upon budget. Mwanza Risk Solution provides performance bonds valued at 10% of the entire project or contract value.",
      features: [
        "Performance Guarantees"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-500/10",
      image: "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg",
    },
    {
      id: "contractors-risks",
      icon: HardHat,
      title: "Contractors All Risks and Public Liability Insurance",
      description: "Contractors All Risks (CAR) and Public Liability Insurance are required for any contractor or construction company, as they provide comprehensive coverage against a wide range of risks experienced on and off the construction site.",
      features: [
        "Contractors Insurance"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    },
    {
      id: "plant-risks",
      icon: Settings,
      title: "Plant All Risks Insurance",
      description: "Mwanza Risk Solution offers Plant All Risks Insurance, which is specifically designed to provide comprehensive coverage for construction plant and equipment against a wide range of risks. This insurance covers unexpected and sudden physical loss or damage caused by various occurrences such as fire, theft, storms, collisions, and transportation accidents.",
      features: [
        "Plant Insurance"
      ],
      color: "text-cyan-600", 
      bgColor: "bg-cyan-500/10",
      image: "https://images.pexels.com/photos/6331/mining-yellow-excavator-machine.jpg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Insurance
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to protect your personal and business interests.
            Choose from our wide range of coverage options designed to give you peace of mind.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden bg-brand-navy-light/50 border-blue-500/20 hover:border-blue-400/40">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} insurance coverage`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg ${service.color}`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-white">Coverage Includes:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <MovingButton asChild variant="primary" className="flex-1">
                      <Link to="/contact">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </MovingButton>
                    <MovingButton asChild variant="outline" className="flex-1">
                      <a href="tel:0878026266">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </MovingButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Mwanza Risk Solution?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We provide more than just insurance - we provide peace of mind through comprehensive coverage and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Tailored Coverage</h3>
              <p className="text-gray-200">
                Every policy is customized to meet your specific needs and budget requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-200">
                Our dedicated team is available around the clock for claims assistance and support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personal Touch</h3>
              <p className="text-gray-200">
                We build lasting relationships with our clients, providing personalized service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Contact Section */}
      <section className="py-20 bg-brand-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Mwanza Risk Solution</h2>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Mwanza Risk Solution (Pty) Ltd is an authorised National Credit Provider NCRCP20076 and an authorised Financial Services Provider with license no FSP 47505. We are committed to providing comprehensive insurance solutions that protect what matters most to you and your business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Our Location</h3>
                    <p className="text-gray-200">57 6th Road, Hyde Park, Sandton 2196</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone Numbers</h3>
                    <p className="text-gray-200">087 802 6266 / 082 560 4131</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-200">info@mrsolution.co.za</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg"
                alt="Professional insurance consultation"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-brand-navy/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-500/20">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact us today for a free consultation 
            and personalized insurance quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MovingButton asChild variant="floating" size="lg">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MovingButton>
            <MovingButton asChild variant="neon" size="lg">
              <a href="tel:0878026266">
                <Phone className="mr-2 h-5 w-5" />
                Call 087 802 6266
              </a>
            </MovingButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
