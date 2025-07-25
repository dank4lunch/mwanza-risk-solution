import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MovingButton } from "@/components/ui/moving-button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Shield, 
  Target, 
  Heart, 
  TrendingUp,
  CheckCircle,
  Calendar,
  Mail,
  Linkedin,
  Phone
} from "lucide-react";

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timeline = [
    {
      year: "2003",
      title: "Company Founded",
      description: "Mwanza Risk Solutions was established with a vision to provide comprehensive insurance solutions to South African businesses and families.",
      icon: Shield,
    },
    {
      year: "2008",
      title: "Agricultural Expansion",
      description: "Expanded our services to include specialized agricultural insurance, supporting farmers across the region.",
      icon: Target,
    },
    {
      year: "2012",
      title: "100+ Partnerships",
      description: "Reached over 100 insurance provider partnerships, ensuring competitive rates and comprehensive coverage options.",
      icon: Users,
    },
    {
      year: "2016",
      title: "Digital Transformation",
      description: "Launched our digital platform for streamlined claims processing and 24/7 customer support.",
      icon: TrendingUp,
    },
    {
      year: "2020",
      title: "5000 Clients Milestone",
      description: "Celebrated serving over 5,000 satisfied clients with our comprehensive insurance solutions.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Innovation & Growth",
      description: "Continuing to innovate with AI-powered risk assessment and personalized insurance recommendations.",
      icon: Heart,
    },
  ];

  const team = [
    {
      name: "David Mwanza",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/8730327/pexels-photo-8730327.jpeg",
      bio: "With over 25 years in the insurance industry, David founded Mwanza Risk Solutions to provide personalized insurance solutions.",
      email: "david@mwanzarisk.co.za",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Claims",
      image: "https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg",
      bio: "Sarah leads our claims department with 15 years of experience in fast and fair claims processing.",
      email: "sarah@mwanzarisk.co.za",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "Senior Risk Analyst",
      image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
      bio: "Michael specializes in business risk assessment and has helped hundreds of companies secure optimal coverage.",
      email: "michael@mwanzarisk.co.za",
      linkedin: "#"
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Protection First",
      description: "We prioritize your protection above all else, ensuring comprehensive coverage for every risk.",
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Every client receives personalized attention and customized insurance solutions.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our business dealings.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously improving our services with the latest technology and industry best practices.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mwanza Risk Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                For over 20 years, we've been South Africa's trusted partner in comprehensive
                insurance solutions, protecting what matters most to our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <MovingButton asChild variant="primary" size="lg">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MovingButton>
                <MovingButton asChild variant="outline" size="lg">
                  <Link to="/services">Our Services</Link>
                </MovingButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
                alt="Modern office building representing Mwanza Risk Solutions headquarters"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Two decades of growth, innovation, and unwavering commitment to our clients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start space-x-8 group cursor-pointer transition-all duration-300 ${
                    activeTimeline === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
                    activeTimeline === index 
                      ? 'bg-gradient-to-br from-primary to-purple-500 shadow-lg shadow-primary/30' 
                      : 'bg-white dark:bg-gray-800 border-2 border-primary/20 group-hover:border-primary/40'
                  }`}>
                    <item.icon className={`h-8 w-8 transition-colors duration-300 ${
                      activeTimeline === index ? 'text-white' : 'text-primary'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 transition-all duration-300 ${
                    activeTimeline === index ? 'translate-x-2' : ''
                  }`}>
                    <Card className={`transition-all duration-300 ${
                      activeTimeline === index 
                        ? 'shadow-2xl shadow-primary/20 border-primary/20' 
                        : 'hover:shadow-xl'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with the best insurance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                5000+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                150+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Awards Won</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                99.8%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
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
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Mwanza Risk Solutions for their insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MovingButton asChild variant="floating" size="lg">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </MovingButton>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <a href="tel:+27111234567">
                <Phone className="mr-2 h-5 w-5" />
                Call +27 (0) 11 123 4567
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
