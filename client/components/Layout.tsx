import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AIAssistant from "./AIAssistant";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
