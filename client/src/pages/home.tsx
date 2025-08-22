import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DownloadSection from "@/components/download-section";
import SocialSection from "@/components/social-section";
import SecuritySection from "@/components/security-section";
import StatisticsSection from "@/components/statistics-section";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const sectionId = hash.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 100); // slight delay to ensure DOM is ready
        }
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[hsl(222,84%,5%)]">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <SocialSection />
      <SecuritySection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
