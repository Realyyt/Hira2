import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DownloadSection from "@/components/download-section";
import BusinessSection from "@/components/business-section";
import SecuritySection from "@/components/security-section";
import StatisticsSection from "@/components/statistics-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <BusinessSection />
      <SecuritySection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
