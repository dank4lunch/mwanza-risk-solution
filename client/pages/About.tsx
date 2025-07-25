import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl mt-2">
              Coming Soon
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're working on creating an amazing About page that will showcase our company's 
            history, values, team, and 20+ years of experience in the insurance industry.
          </p>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Company history and milestones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Our values and mission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Meet our expert team</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Interactive company timeline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Awards and recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Community involvement</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/services">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Want this page completed? Continue prompting to have us fill in the About page content!
          </p>
        </div>
      </section>
    </Layout>
  );
}
