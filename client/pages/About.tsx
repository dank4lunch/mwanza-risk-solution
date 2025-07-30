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
  Building,
  MapPin,
  Phone,
  Mail,
  Star,
  Globe,
  UserCheck,
  Handshake,
  Crown,
  Briefcase
} from "lucide-react";

export default function About() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Target,
      title: "Diverse Product Offering",
      description: "Comprehensive range of insurance solutions covering all aspects of personal and commercial risks.",
    },
    {
      icon: Globe,
      title: "Local and Continental Insight",
      description: "Deep understanding of South African and African markets with over 20 years of local expertise.",
    },
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Every solution is tailored to meet the unique needs and challenges of our clients.",
    },
    {
      icon: Award,
      title: "Commitment to Excellence",
      description: "Unwavering dedication to providing the highest quality service and professional expertise.",
    },
  ];

  const stats = [
    { icon: Calendar, value: "20+", label: "Years of Business", color: "text-blue-500" },
    { icon: Users, value: "5000+", label: "Clients Served", color: "text-green-500" },
    { icon: FileText, value: "3500+", label: "Tailored Insurance Policies Delivered", color: "text-purple-500" },
    { icon: Heart, value: "100%", label: "Commitment to Personalized Service", color: "text-red-500" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Manage Behavior to Manage Risk",
      description: "We believe that effective risk management begins with understanding human behavior. By analyzing decisions, actions, and patterns, we develop proactive strategies to prevent risks before they escalate.",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Every client receives customized insurance solutions designed to meet their specific needs and risk profile.",
    },
    {
      icon: Crown,
      title: "100% Black-Owned",
      description: "Proudly South African and 100% Black-owned, we understand the unique challenges and opportunities in our market.",
    },
    {
      icon: Handshake,
      title: "Your Partner in Managing Risk",
      description: "We don't just provide insurance; we partner with you to understand, assess, and manage your risks comprehensively.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-blue/20 to-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-brand-blue/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Who We Are
              </h1>
              <div className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-6">
                Your Partner in Managing Risk, Your Solution in Insurance
              </div>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Mwanza Risk Solution is a leading professional services firm specializing in short term insurance and risk management dedicated to providing professional services and innovative solutions. With over 15 years of experience in both commercial and domestic insurance, our expertise spans a wide range of industries, helping businesses and individuals navigate the complexities of risk with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <MovingButton asChild variant="primary" size="lg">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MovingButton>
                <MovingButton asChild variant="outline" size="lg">
                  <a href="tel:0878026266">
                    <Phone className="mr-2 h-5 w-5" />
                    087 802 6266
                  </a>
                </MovingButton>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
                alt="Modern office building representing Mwanza Risk Solutions headquarters"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Philosophy: Manage Behavior to Manage Risk
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                We believe that effective risk management begins with a deep understanding of human behavior. It's not just about identifying potential risks; it's about recognizing the decisions, actions, and patterns that contribute to those risks.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                By carefully analyzing behavior, we can better predict potential vulnerabilities and develop proactive strategies to address them. This approach allows us to anticipate and mitigate risks before they escalate, ensuring our clients are not only protected from foreseeable dangers but also from unexpected challenges. At Mwanza Risk Solution, we don't just react to risks—we work with you to prevent them from occurring, keeping you one step ahead of the uncertainties in today's ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-brand-navy-light/50 to-brand-navy-dark/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To establish ourselves as a leading global professional services firm, offering a comprehensive range of risk solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-brand-navy-light/50 to-brand-navy-dark/50 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Our mission is to empower our clients through tailored insurance solutions and expert risk management services. We are committed to offering comprehensive coverage that protects everything from commercial property and machinery to personal belongings and leisure assets. Our goal is to ensure that every client's needs are met with the highest level of professionalism and care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-brand-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Few Reasons Why People Choose Us!
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Choosing Mwanza Risk Solution means choosing a partner who is dedicated to your success. We don't just offer insurance; we offer peace of mind, knowing that your risks are managed with expertise, dedication, and a deep understanding of your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-primary/20 to-blue-500/20 border-primary/40 scale-105' 
                    : 'bg-brand-navy-light/50 border-blue-500/20'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-primary text-white scale-110' 
                      : 'bg-primary/10 text-primary group-hover:scale-110'
                  }`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 bg-brand-navy/50 border-blue-500/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-200">Numbers that speak to our experience and commitment</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-brand-navy-light/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300 group-hover:scale-105">
                  <div className="mb-4">
                    <stat.icon className={`h-12 w-12 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Details */}
      <section className="py-20 bg-brand-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Specialized Insurance Broking & Risk Management
              </h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                At Mwanza Risk Solution, we specialize in providing professional insurance broking and risk management services tailored to meet the unique needs of our clients.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With over 20 years of experience in both commercial and domestic insurance, we understand the complexities and challenges businesses face in South Africa and across the African continent.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-200">Authorised National Credit Provider NCRCP20076</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-200">Authorised Financial Services Provider FSP 47505</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-200">100% Black-Owned South African Company</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-200">Comprehensive Local and Continental Coverage</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <MovingButton asChild variant="primary" size="lg">
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MovingButton>
                <MovingButton asChild variant="outline" size="lg">
                  <a href="tel:0825604131">
                    <Phone className="mr-2 h-5 w-5" />
                    082 560 4131
                  </a>
                </MovingButton>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg"
                alt="Professional insurance consultation"
                className="rounded-2xl shadow-2xl shadow-blue-500/20 w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-brand-navy/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Ready to Get Protected?
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Get expert insurance advice tailored to your needs.
                  </p>
                  <MovingButton asChild variant="primary" size="sm">
                    <Link to="/contact">Contact Us Today</Link>
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
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Mwanza Risk Solution for their insurance needs. Contact us today for personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MovingButton asChild variant="floating" size="lg">
              <Link to="/contact">
                Get Started Today
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
