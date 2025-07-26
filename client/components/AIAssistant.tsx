import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Shield,
  Phone,
  Mail,
  Calculator
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm MIA (Mwanza Insurance Assistant). I'm here to help you with insurance questions, quotes, and guidance. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Insurance-specific responses
    if (message.includes('quote') || message.includes('price') || message.includes('cost')) {
      return "I'd be happy to help you get a quote! For an accurate quote, I'll need some details about what type of insurance you're looking for. You can get an instant quote by calling +27 (0) 11 123 4567 or filling out our contact form. What type of insurance interests you?";
    }
    
    if (message.includes('life insurance')) {
      return "Life insurance is one of our most popular products! We offer term life, whole life, and family income benefit policies starting from R199/month. Life insurance ensures your family's financial security. Would you like me to connect you with a specialist?";
    }
    
    if (message.includes('car') || message.includes('vehicle') || message.includes('auto')) {
      return "Our vehicle insurance covers cars, motorcycles, and commercial vehicles with comprehensive coverage starting from R399/month. We offer theft protection, accident coverage, and 24/7 roadside assistance. Need a vehicle insurance quote?";
    }
    
    if (message.includes('business')) {
      return "Business insurance is essential for protecting your company! We cover property, liability, business interruption, and workers compensation starting from R299/month. Our policies are tailored to your specific industry needs.";
    }
    
    if (message.includes('claim') || message.includes('claims')) {
      return "We make claims processing simple and fast! Most claims are processed within 24 hours. You can file a claim by calling our 24/7 claims hotline at +27 (0) 11 123 4567 or through our online portal. What type of claim do you need help with?";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('call')) {
      return "You can reach us at +27 (0) 11 123 4567 or email info@mwanzarisk.co.za. Our office is located at 123 Business District, Johannesburg. We're open Mon-Fri 8AM-6PM, Sat 9AM-2PM. How else can I help you?";
    }
    
    if (message.includes('medical') || message.includes('health')) {
      return "Our medical aid plans provide comprehensive healthcare coverage including hospital cover, medical expenses, chronic medication, and preventive care starting from R799/month. We work with top medical providers across South Africa.";
    }
    
    if (message.includes('agricultural') || message.includes('farm')) {
      return "Agricultural insurance protects farmers against crop failure, livestock loss, and weather damage starting from R599/month. We cover crop insurance, livestock protection, farm property, and equipment. Perfect for protecting your farming investments!";
    }
    
    if (message.includes('funeral')) {
      return "Our funeral cover provides dignified farewell arrangements starting from just R99/month. This includes burial expenses, memorial services, family support, and repatriation cover. It's one of our most affordable yet important policies.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Mwanza Risk Solutions. I'm here to help you with all your insurance needs. We've been protecting South African families and businesses for over 20 years. What can I help you with today?";
    }
    
    if (message.includes('help') || message.includes('support')) {
      return "I'm here to help! I can assist you with:\n• Getting insurance quotes\n• Explaining our insurance products\n• Filing claims\n• Finding contact information\n• Scheduling consultations\n\nWhat specific help do you need?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm always here to help with your insurance needs. If you need anything else or want to speak with one of our human experts, just let me know. Have a great day! 😊";
    }
    
    // Default responses
    const defaultResponses = [
      "That's a great question! For detailed information about that topic, I'd recommend speaking with one of our insurance specialists. You can reach them at +27 (0) 11 123 4567. Is there anything else I can help you with?",
      "I want to make sure I give you the most accurate information. For that specific query, our expert team can provide detailed guidance. Feel free to call +27 (0) 11 123 4567 or fill out our contact form. What else can I help you with?",
      "Thanks for your question! For comprehensive assistance with that, I'd suggest contacting our experienced team directly. They're available at +27 (0) 11 123 4567. Is there anything else about our insurance services I can help explain?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { icon: Calculator, text: "Get Quote", action: "I need an insurance quote" },
    { icon: Shield, text: "File Claim", action: "I need help filing a claim" },
    { icon: Phone, text: "Contact Info", action: "How can I contact you?" },
    { icon: Mail, text: "Services", action: "What insurance services do you offer?" }
  ];

  return (
    <>
      {/* AI Assistant Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 transition-all duration-300 group relative overflow-hidden border-2 border-blue-400/30 hover:border-blue-400/60"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="relative z-10 flex items-center justify-center">
              <Bot className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
          </Button>
        )}
      </div>

      {/* AI Assistant Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] animate-scale-in">
          <Card className="h-full bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl border-gray-600/50 shadow-2xl shadow-blue-500/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-purple-500/20 border-b border-gray-600/50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></div>
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">MIA Assistant</CardTitle>
                    <p className="text-xs text-gray-300">Mwanza Insurance AI • Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full w-8 h-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0 h-full flex flex-col">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3 animate-slide-in-left",
                        message.sender === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.sender === 'ai' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={cn(
                          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                          message.sender === 'user'
                            ? "bg-gradient-to-r from-primary to-blue-600 text-white"
                            : "bg-gray-700/50 text-gray-100 border border-gray-600/30"
                        )}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                        <div className="text-xs opacity-60 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      {message.sender === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-3 animate-slide-in-left">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-700/50 text-gray-100 border border-gray-600/30 rounded-2xl px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-gray-600/30">
                  <p className="text-xs text-gray-400 mb-3">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setInputMessage(action.action);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="justify-start text-xs bg-gray-700/30 border-gray-600/50 text-gray-200 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                      >
                        <action.icon className="h-3 w-3 mr-2" />
                        {action.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-gray-600/30">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about insurance, quotes, claims..."
                    className="flex-1 bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-primary/50 focus:ring-primary/20"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Powered by AI • For immediate help call +27 (0) 11 123 4567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
