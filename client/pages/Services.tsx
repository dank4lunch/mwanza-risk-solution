import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MovingButton } from "@/components/ui/moving-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  Building,
  Heart,
  Car,
  Wheat,
  Cross,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building,
      title: "Business Insurance",
      description: "Comprehensive protection for your business assets, operations, and employees.",
      features: [
        "Property Insurance",
        "Liability Coverage",
        "Business Interruption",
        "Workers Compensation",
        "Professional Indemnity"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg",
      startingPrice: "From R299/month",
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Secure your family's financial future with our comprehensive life insurance plans.",
      features: [
        "Term Life Insurance",
        "Whole Life Insurance",
        "Family Income Benefit",
        "Critical Illness Cover",
        "Income Protection"
      ],
      color: "text-red-500",
      bgColor: "bg-red-50",
      image: "https://images.pexels.com/photos/207852/pexels-photo-207852.jpeg",
      startingPrice: "From R199/month",
    },
    {
      icon: Car,
      title: "Vehicle Insurance",
      description: "Complete motor vehicle protection for cars, motorcycles, and commercial vehicles.",
      features: [
        "Comprehensive Cover",
        "Third Party Insurance",
        "Theft Protection",
        "Accident Coverage",
        "Roadside Assistance"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg",
      startingPrice: "From R399/month",
    },
    {
      icon: Wheat,
      title: "Agricultural Insurance",
      description: "Protect your farming investments against natural disasters and crop failure.",
      features: [
        "Crop Insurance",
        "Livestock Protection",
        "Farm Property Cover",
        "Equipment Insurance",
        "Weather Protection"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      image: "https://images.pexels.com/photos/33135620/pexels-photo-33135620.jpeg",
      startingPrice: "From R599/month",
    },
    {
      icon: Cross,
      title: "Medical Aid",
      description: "Quality healthcare coverage to ensure you and your family stay healthy.",
      features: [
        "Hospital Cover",
        "Medical Expenses",
        "Chronic Medication",
        "Preventive Care",
        "Emergency Services"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "https://images.pexels.com/photos/6823488/pexels-photo-6823488.jpeg",
      startingPrice: "From R799/month",
    },
    {
      icon: UserCheck,
      title: "Funeral Cover",
      description: "Dignified farewell arrangements with comprehensive funeral insurance.",
      features: [
        "Burial Expenses",
        "Memorial Services",
        "Family Support",
        "Repatriation Cover",
        "Grief Counseling"
      ],
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      image: "https://images.pexels.com/photos/8730327/pexels-photo-8730327.jpeg",
      startingPrice: "From R99/month",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Insurance
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to protect your personal and business interests.
            Choose from our wide range of coverage options.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} insurance coverage`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg ${service.color}`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <p className="text-green-400 font-semibold">{service.startingPrice}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">What's Covered:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className={`h-4 w-4 ${service.color}`} />
                        <span className="text-gray-600">{feature}</span>
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
                    <MovingButton variant="outline" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </MovingButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Insurance Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide more than just insurance - we provide peace of mind through comprehensive coverage and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tailored Coverage</h3>
              <p className="text-gray-600">
                Every policy is customized to meet your specific needs and budget requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is available around the clock for claims assistance and support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Touch</h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients, providing personalized service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact us today for a free consultation 
            and personalized insurance quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MovingButton asChild variant="floating" size="lg">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MovingButton>
            <MovingButton asChild variant="neon" size="lg">
              <a href="tel:+27111234567">
                <Phone className="mr-2 h-5 w-5" />
                Call +27 (0) 11 123 4567
              </a>
            </MovingButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
