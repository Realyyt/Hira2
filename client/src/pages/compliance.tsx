import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { ShieldCheck, BookOpen } from "lucide-react";

export default function Compliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-green-900 flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-700/80 to-blue-700/80 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <ShieldCheck className="w-14 h-14 text-green-200 drop-shadow-lg" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow">Compliance & Data Protection Rights</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-green-100/90 font-medium mb-2">Navigating the Nigerian Regulatory Landscape: Hira's Compliance Roadmap</p>
        <span className="inline-block bg-green-900/60 text-green-200 rounded-full px-4 py-1 text-xs font-semibold mt-2">Effective: 2025</span>
      </section>
      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 text-white">
        <section className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-green-800 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-green-300" />
            <h2 className="text-2xl font-bold text-white">Nigeria Data Protection Act (NDPA) & Regulation (NDPR) Compliance</h2>
          </div>
          <div className="text-blue-200 space-y-4">
            <p>Our Privacy Policy affirms our adherence to the Nigeria Data Protection Act (NDPA) 2023, the cornerstone of data protection in Nigeria. The NDPA applies to all processing of personal data concerning natural persons in Nigeria, or Nigerian citizens residing anywhere in the world, giving it an extraterritorial scope.</p>
            <p>Compliance with the NDPA's governing principles of data processing is fundamental: personal data must be collected and processed for specific, legitimate, and lawful purposes consented to by the data subject; it must be adequate, accurate, and without prejudice to the dignity of the human person; stored only for the period reasonably needed; and processed with integrity and confidentiality. Accountability for acts and omissions in data processing is also a core tenet.</p>
            <p>We may be required to designate a Data Protection Officer (DPO) if we fall under the category of "Data Controllers and Data Processors of Major Importance" or other criteria set by the Nigeria Data Protection Commission (NDPC). The NDPA also mandates the obligation to conduct Data Protection Impact Assessments (DPIAs) for high-risk processing activities. In the event of personal data breaches, we are obligated to notify the NDPC within 72 hours of discovery, and affected data subjects where appropriate, detailing the nature of the breach and steps taken to mitigate effects.</p>
            <p>The NDPA's introduction of "Data Controllers and Data Processors of Major Importance" with significantly higher penalties for violations creates a tiered compliance burden. As a social media platform, we are likely to process a significant volume of personal data, and potentially sensitive personal data (e.g., if users share information about health or political views). This classification could trigger higher fines (NGN 10 million or 2% of the preceding year's revenue, whichever is higher, compared to NGN 2 million or 2% for others). Therefore, we must proactively assess our potential classification and build our compliance framework to meet the higher standard from the outset, rather than waiting for a regulatory assessment.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 