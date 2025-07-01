import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import DownloadSection from "@/components/download-section";
import SocialSection from "@/components/social-section";
import SecuritySection from "@/components/security-section";
import StatisticsSection from "@/components/statistics-section";
import Footer from "@/components/footer";

export default function Home() {
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
