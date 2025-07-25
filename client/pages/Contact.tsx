import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl mt-2">
              Coming Soon
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building an interactive contact page with Google Maps integration, 
            contact forms, and multiple ways to reach our team.
          </p>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Interactive Google Maps with animated pin drop</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Contact form with Name, Email, Subject, Message</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Multiple contact methods</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Office hours and location details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Quick quote request form</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Emergency contact information</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">+27 (0) 11 123 4567</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600">info@mwanzarisk.co.za</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600">123 Business District<br />Johannesburg, SA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="tel:+27111234567">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Want this page completed? Continue prompting to have us fill in the Contact page with forms and maps!
          </p>
        </div>
      </section>
    </Layout>
  );
}
