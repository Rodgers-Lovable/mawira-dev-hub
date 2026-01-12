import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UmamiScript from "./UmamiScript";
import { useAnalytics } from "@/hooks/useAnalytics";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Initialize analytics tracking (page views, performance, high-intent detection)
  useAnalytics();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Umami Analytics Script - loads asynchronously */}
      <UmamiScript />
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;