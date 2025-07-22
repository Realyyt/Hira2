import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { Users, ShieldCheck, AlertTriangle, BookOpen, Gavel, FileText } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview & Purpose" },
  { id: "prohibited-content", label: "Prohibited Content & Conduct" },
  { id: "moderation", label: "Content Moderation & Takedown" },
  { id: "complaints", label: "Complaints & Appeals" },
  { id: "localization", label: "Localization & Cultural Sensitivity" },
];

export default function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-700/80 to-blue-700/80 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <Users className="w-14 h-14 text-purple-200 drop-shadow-lg" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow">Community Guidelines</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-purple-100/90 font-medium mb-2">Hira's Community Guidelines: Safe, Respectful, and Lawful Participation</p>
        <span className="inline-block bg-purple-900/60 text-purple-200 rounded-full px-4 py-1 text-xs font-semibold mt-2">Effective: 2025</span>
      </section>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-10 gap-8">
        {/* Table of Contents */}
        <nav className="md:w-1/4 mb-8 md:mb-0 sticky top-24 self-start hidden md:block">
          <div className="bg-purple-950/80 rounded-xl shadow p-6 border border-purple-800">
            <h2 className="text-purple-200 font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5" /> On this page</h2>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-purple-100 hover:text-white transition-colors text-sm font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* Content */}
        <main className="flex-1 space-y-10">
          {/* Overview & Purpose */}
          <section id="overview" className="bg-purple-950/70 rounded-2xl shadow-lg p-8 border border-purple-800">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-purple-300" />
              <h2 className="text-2xl font-bold text-white">Overview & Purpose</h2>
            </div>
            <p className="text-purple-100 mb-2">Our Community Guidelines are designed to foster a safe, respectful, and lawful environment for all users. By participating in Hira, users agree to abide by these guidelines and all applicable laws. Our goal is to empower open expression while protecting users from harm, abuse, and illegal activity.</p>
          </section>
          {/* Prohibited Content & Conduct */}
          <section id="prohibited-content" className="bg-purple-950/70 rounded-2xl shadow-lg p-8 border border-purple-800">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-purple-300" />
              <h2 className="text-2xl font-bold text-white">Prohibited Content & Conduct</h2>
            </div>
            <ul className="list-disc pl-6 text-purple-100 mb-2">
              <li>Harmful to Children: Content that is harmful to a child or exploits a child.</li>
              <li>Physical/Psychological Harm: Content that could cause any physical or psychological harm to another user directly or indirectly.</li>
              <li>Defamatory/Libelous/Obscene: Content that is defamatory, libelous, pornographic, revenge porn, bullying, harassing, or obscene.</li>
              <li>Illegal Activities: Content encouraging money laundering, fraud, violence, or any activity inconsistent with Nigerian laws and public order. This specifically includes child abuse and selling or offering illegal goods and services (e.g., drugs, firearms, forged documents).</li>
              <li>Intellectual Property Infringement: Content that infringes copyrights, trademarks, or other intellectual property rights.</li>
              <li>False/Misleading Information: Content that is false or misleading, including disinformation and misinformation.</li>
              <li>National Security/Public Order: Content compromising Nigeria's security, unity, integrity, or sovereignty, promoting terrorism, instigating public disorder, or interfering with an ongoing investigation.</li>
              <li>Private Information/Intimate Media: Publishing others' private information or intimate photos/videos without their express authorization.</li>
              <li>Spam/Scam: Using the service to send spam or scam other users.</li>
            </ul>
            <p className="text-purple-100">Users must not tamper with non-public areas of Hira's systems, probe system vulnerabilities, access without authorization, forge TCP/IP packet headers, or interfere with service delivery (e.g., sending viruses, overloading, spamming, or scripting content creation to burden the services).</p>
          </section>
          {/* Content Moderation & Takedown */}
          <section id="moderation" className="bg-purple-950/70 rounded-2xl shadow-lg p-8 border border-purple-800">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-purple-300" />
              <h2 className="text-2xl font-bold text-white">Content Moderation & Takedown</h2>
            </div>
            <p className="text-purple-100 mb-2">Hira reserves the right to remove or refuse to distribute any content that violates these guidelines or applicable laws. Hira will act expeditiously, specifically within 24 hours, to take down unlawful content upon receiving notice from a user or an authorized government agency. Non-consensual intimate content will be removed within 24 hours of a complaint.</p>
            <p className="text-purple-100 mb-2">Hira uses a combination of automated tools and trained human moderators to enforce these guidelines. The NITDA Code requires platforms to exercise due diligence to prevent unlawful content uploads and ensure it stays down. This means Hira employs proactive content filtering and re-upload detection systems, such as hash matching and AI-based content recognition, to prevent the re-uploading of previously identified unlawful content.</p>
            <p className="text-purple-100">All moderation decisions are made with respect for user rights, freedom of expression, and Nigerian law. Hira invests in local expertise and cultural intelligence to ensure fair and accurate moderation.</p>
          </section>
          {/* Complaints & Appeals */}
          <section id="complaints" className="bg-purple-950/70 rounded-2xl shadow-lg p-8 border border-purple-800">
            <div className="flex items-center gap-3 mb-2">
              <Gavel className="w-6 h-6 text-purple-300" />
              <h2 className="text-2xl font-bold text-white">Complaints & Appeals</h2>
            </div>
            <p className="text-purple-100 mb-2">Hira provides dedicated, always-available channels for users and authorized government agencies to lodge complaints against unlawful or harmful content. These channels issue unique tracking codes and provide written resolutions, including evidence used. Users have the right to appeal moderation decisions.</p>
            <p className="text-purple-100">Hira preserves removed content and related records as required by law, and displays a label indicating the grounds for removal. Annual compliance reports are filed with NITDA, detailing user numbers, moderation actions, complaints, and disinformation efforts.</p>
          </section>
          {/* Localization & Cultural Sensitivity */}
          <section id="localization" className="bg-purple-950/70 rounded-2xl shadow-lg p-8 border border-purple-800">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-purple-300" />
              <h2 className="text-2xl font-bold text-white">Localization & Cultural Sensitivity</h2>
            </div>
            <p className="text-purple-100 mb-2">Hira's content policies are localized and sensitive to Nigerian cultural norms, local slang, political sensitivities, and religious nuances. Hira invests in a dedicated local content moderation team and expertise with strong cultural intelligence, going beyond purely technical solutions to ensure fair and effective moderation.</p>
            <p className="text-purple-100">Hira actively engages in combating disinformation and misinformation, collaborating with local academics, media organizations, and civil society groups for research, providing access to data for independent researchers, organizing media literacy programs, and engaging certified fact-checkers.</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
} 