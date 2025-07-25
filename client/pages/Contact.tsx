import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MovingButton } from "@/components/ui/moving-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Shield,
  MessageCircle,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    insuranceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        insuranceType: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 (0) 11 123 4567", "+27 (0) 11 123 4568"],
      action: "tel:+27111234567"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mwanzarisk.co.za", "support@mwanzarisk.co.za"],
      action: "mailto:info@mwanzarisk.co.za"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Business District", "Johannesburg, South Africa", "2000"],
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM", "Sun: Closed"],
      action: "#"
    }
  ];

  const quickServices = [
    {
      icon: Shield,
      title: "Get a Quote",
      description: "Receive a personalized insurance quote within 24 hours",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Claims Support",
      description: "24/7 assistance for all your insurance claims",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Free consultation with our insurance experts",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book an appointment at your convenience",
      color: "text-orange-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mwanza Risk Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for personalized insurance solutions
            and comprehensive coverage options.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" 
                    onClick={() => info.action !== "#" && window.open(info.action, "_self")}>
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-purple-500/5">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">Send us a Message</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                          placeholder="+27 (0) 11 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Inquiry about insurance"
                        />
                      </div>
                      <div>
                        <Label htmlFor="insuranceType">Insurance Type</Label>
                        <Select onValueChange={(value) => handleInputChange("insuranceType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select insurance type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">Business Insurance</SelectItem>
                            <SelectItem value="life">Life Insurance</SelectItem>
                            <SelectItem value="vehicle">Vehicle Insurance</SelectItem>
                            <SelectItem value="agricultural">Agricultural Insurance</SelectItem>
                            <SelectItem value="medical">Medical Aid</SelectItem>
                            <SelectItem value="funeral">Funeral Cover</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="mt-1 min-h-[120px]"
                        placeholder="Please describe your insurance needs or ask any questions..."
                      />
                    </div>

                    <MovingButton 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </MovingButton>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map and Quick Services */}
            <div className="space-y-8">
              {/* Google Maps */}
              <Card className="overflow-hidden shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.047853358741!2d28.04726731453916!3d-26.13529998344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sSandton%2C%20Johannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1645564756789!5m2!1sen!2sus"
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-b-lg"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                      <MapPin className="h-5 w-5 text-primary animate-bounce" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Services */}
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Quick Services</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickServices.map((service, index) => (
                      <div key={index} className="group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-gray-800/50 dark:to-blue-900/10 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                        <service.icon className={`h-8 w-8 ${service.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold mb-2">24/7 Emergency Claims Support</h3>
              <p className="text-red-100 mb-6">
                Need immediate assistance with a claim? Our emergency hotline is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
                  <a href="tel:+27111234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Emergency Line
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                  <a href="mailto:emergency@mwanzarisk.co.za">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Emergency
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Get comprehensive insurance coverage today.
          </p>
          <MovingButton asChild variant="floating" size="lg">
            <a href="tel:+27111234567">
              <Phone className="mr-2 h-5 w-5" />
              Call Now for Instant Quote
            </a>
          </MovingButton>
        </div>
      </section>
    </Layout>
  );
}
