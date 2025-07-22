import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { FileText, UserCheck, Lock, ShieldCheck, AlertTriangle, Gavel, Users, BookOpen, Key } from "lucide-react";

const toc = [
  { id: "acceptance", label: "Acceptance of Terms and Eligibility for Use" },
  { id: "responsibilities", label: "User Responsibilities and Account Security" },
  { id: "content", label: "Content on Hira: Ownership, Licensing, and Prohibited Material" },
  { id: "acceptable-use", label: "Acceptable Use of Hira's Services" },
  { id: "rights", label: "Hira's Rights: IP, Service Modification, Account Management" },
  { id: "disclaimers", label: "Disclaimers and Limitation of Liability" },
  { id: "governing-law", label: "Governing Law and Dispute Resolution" },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-700/80 to-purple-700/80 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <FileText className="w-14 h-14 text-blue-200 drop-shadow-lg" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow">Terms of Service</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/90 font-medium mb-2">Terms of Service: Defining User Conduct and Platform Responsibilities</p>
        <span className="inline-block bg-blue-900/60 text-blue-200 rounded-full px-4 py-1 text-xs font-semibold mt-2">Effective: 2025</span>
      </section>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 py-10 gap-8">
        {/* Table of Contents */}
        <nav className="md:w-1/4 mb-8 md:mb-0 sticky top-24 self-start hidden md:block">
          <div className="bg-blue-950/80 rounded-xl shadow p-6 border border-blue-800">
            <h2 className="text-blue-200 font-bold text-lg mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5" /> On this page</h2>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-blue-100 hover:text-white transition-colors text-sm font-medium">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* Content */}
        <main className="flex-1 space-y-10">
          {/* Acceptance of Terms and Eligibility for Use */}
          <section id="acceptance" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <UserCheck className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms and Eligibility for Use</h2>
            </div>
            <p>To access and use Hira's services, users must explicitly agree to the Terms of Service. This agreement forms a binding contract between the user and Hira.</p>
            <p>A minimum age requirement will be established for Hira's services, typically 13 years old. For certain features, particularly paid services, an older age, such as 18, or verifiable parental consent may be required. Users must also possess the legal capacity to form a binding contract and must not be barred from receiving services under applicable laws in their jurisdiction. If an individual is using Hira on behalf of a company, organization, government, or other legal entity, they must warrant that they are authorized to bind that entity to these Terms.</p>
          </section>
          {/* User Responsibilities and Account Security */}
          <section id="responsibilities" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">User Responsibilities and Account Security</h2>
            </div>
            <p>Users are solely responsible for their use of Hira's services, for any content they post to the platform, and for any consequences arising therefrom. This fundamental principle underscores the user's accountability for their digital actions.</p>
            <p>Maintaining account security is a paramount user responsibility. Users are accountable for safeguarding their password and for all activities or actions that occur under their account. Hira will strongly encourage the use of "strong" passwords (combinations of uppercase and lowercase letters, numbers, and symbols) and advise users to promptly report any unauthorized use or security breaches of their account or the services. Furthermore, users are responsible for providing the necessary devices, software, and data connections required to access and utilize Hira's services.</p>
          </section>
          {/* Content on Hira: Ownership, Licensing, and Prohibited Material */}
          <section id="content" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Content on Hira: Ownership, Licensing, and Prohibited Material</h2>
            </div>
            <p><b>Content Ownership:</b> Users retain all rights to any content they submit, post, or display on or through Hira's services. This means that users maintain ownership of their intellectual property, including incorporated audio, photos, and videos.</p>
            <p><b>License Grant to Hira:</b> By submitting, posting, or displaying content on Hira, users grant Hira a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license. This license permits Hira to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content in any media or distribution methods. The purpose of this license is to enable Hira to operate and provide its services, and potentially to make content available to other companies for syndication, broadcast, distribution, or publication, without compensation to the user.</p>
            <p><b>Content Responsibility:</b> All content, whether publicly posted or privately transmitted, is the sole responsibility of the person who originated it. Hira will not actively monitor or control all content posted via its services and cannot take responsibility for its completeness, truthfulness, accuracy, or reliability. Users understand that by using the services, they may be exposed to content that might be offensive, harmful, inaccurate, or otherwise inappropriate.</p>
            <p><b>Prohibited Material (Nigerian Law Focus):</b> Hira's Terms of Service will explicitly prohibit content that violates Nigerian laws and public order. This includes, but is not limited to:</p>
            <ul className="list-disc pl-6 mb-2">
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
            <p><b>Content Removal:</b> Hira reserves the right to remove or refuse to distribute any content that violates its Terms of Service or applicable laws. Hira will act expeditiously, specifically within 24 hours, to take down unlawful content upon receiving notice from a user or an authorized government agency. Similarly, non-consensual intimate content will be removed within 24 hours of a complaint.</p>
            <p>The NITDA Code's dual obligation for platforms to "exercise due diligence to prevent unlawful content uploads" and "ensure it stays down" implies a requirement for a proactive content filtering and re-upload detection system, rather than solely reactive takedowns. This suggests a need for technological solutions such as hash matching, AI-based content recognition, or other advanced methods to prevent the re-uploading of previously identified unlawful content. This moves Hira beyond a basic notice-and-takedown model to a more sophisticated, proactive content moderation system, which will require substantial investment in technology and human review.</p>
          </section>
          {/* Acceptable Use of Hira's Services */}
          <section id="acceptable-use" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Acceptable Use of Hira's Services</h2>
            </div>
            <p>Users must access and utilize Hira's services only for legal, authorized, and acceptable purposes. This fundamental principle underpins the healthy functioning of the platform.</p>
            <p>The Terms of Service will explicitly prohibit a range of misuses, including tampering with non-public areas of Hira's systems, probing system vulnerabilities, unauthorized access (such as scraping without explicit consent), forging TCP/IP packet headers, and any activities that interfere with or disrupt service delivery (e.g., sending viruses, overloading, spamming, or scripting content creation to burden the services). Furthermore, users must adhere to Hira's community rules and guidelines, which will be incorporated as an integral part of the Terms of Service.</p>
          </section>
          {/* Hira's Rights: IP, Service Modification, Account Management */}
          <section id="rights" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Key className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Hira's Rights: IP, Service Modification, Account Management</h2>
            </div>
            <p><b>Hira's Intellectual Property:</b> All rights, title, and interest in and to the services provided by Hira, excluding content provided by users, are and will remain the exclusive property of Hira and its licensors. This encompasses all copyrights, trademarks, domain names, logos, trade dress, trade secrets, and patents associated with the services. Users are granted a limited, revocable, non-exclusive, non-sublicensable, and non-transferable license to use the services solely for their intended purpose as permitted by these Terms.</p>
            <p><b>Service Modification:</b> Hira reserves the right to modify, suspend, or discontinue its services or any features within them, at its discretion, with or without prior notice. Hira will not be liable to users or any third party for any such modification, suspension, or discontinuance of the services.</p>
            <p><b>Account Management:</b> Hira may, at its sole discretion, create limits on use and storage, remove or refuse to distribute content, suspend or terminate user accounts, and reclaim usernames without incurring liability. Such actions may be taken for various reasons, including violations of the Terms or Hira's community rules, creation of legal risk, prolonged account inactivity, or if the provision of services becomes commercially unviable.</p>
            <p><b>Disclosure for Legal/Security Reasons:</b> Hira reserves the right to access, read, preserve, and disclose any information as it reasonably believes necessary to satisfy applicable law, regulation, legal process, or governmental request. This also extends to enforcing the Terms, investigating potential violations, detecting or preventing security issues, responding to user support requests, or protecting the rights and property of Hira or its users.</p>
            <p>The NITDA Code's requirement for "human supervision to review and improve automated tools" for content moderation carries significant implications for Hira's operational model. This provision indicates that Hira cannot solely rely on artificial intelligence for content enforcement. Instead, it necessitates a substantial investment in trained human moderators to ensure accuracy, fairness, and to mitigate bias and discrimination in content decisions. This introduces a significant operational cost and complexity, as human review is crucial for handling nuanced content moderation decisions, especially given Nigeria's "socio-cultural peculiarities".</p>
          </section>
          {/* Disclaimers and Limitation of Liability */}
          <section id="disclaimers" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Disclaimers and Limitation of Liability</h2>
            </div>
            <p><b>"As-Is" / "As-Available":</b> Hira's services will be provided on an "AS IS" and "AS AVAILABLE" basis. Users acknowledge and agree that their use of the services and any content obtained through them is at their own sole risk.</p>
            <p><b>Disclaimer of Warranties:</b> Hira will disclaim all warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Hira makes no warranty regarding the completeness, accuracy, availability, timeliness, security, or reliability of its services or content. No oral or written advice or information obtained from Hira or through its services will create any warranty not expressly stated in these Terms.</p>
            <p><b>Limitation of Liability:</b> To the maximum extent permitted by applicable law, Hira will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, use, goodwill, or other intangible losses. This limitation applies regardless of the theory of liability (e.g., warranty, contract, tort) and even if Hira has been informed of the possibility of such damages. Hira's aggregate liability will be capped, for example, at a specific monetary amount (e.g., $100 USD) or the amount paid by the user to Hira in the six months preceding the claim, whichever is greater.</p>
            <p>While broad disclaimers and liability limitations are standard in Terms of Service, their enforceability in Nigeria may be influenced by the FCCPA's consumer protection provisions. The FCCPA prohibits "misleading advertising, price deception, and exploitative terms" and generally protects consumers against "unfair practices". An overly aggressive limitation of liability, if deemed exploitative or unfair under Nigerian consumer protection laws, could be challenged. Hira should ensure its disclaimers are reasonable, clearly communicated, and do not unduly disadvantage the user to avoid being deemed unenforceable or subject to regulatory scrutiny by the FCCPC.</p>
          </section>
          {/* Governing Law and Dispute Resolution */}
          <section id="governing-law" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Gavel className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Governing Law and Dispute Resolution</h2>
            </div>
            <p>Hira's Terms of Service will be governed by and construed in accordance with the laws of Nigeria. Any disputes arising from or relating to these Terms or the services will be brought exclusively in the competent courts located in Lagos, Nigeria.</p>
            <p>Hira reserves the right to revise these Terms of Service periodically. The most current version will always be available on Hira's website. Hira will endeavor to notify users of any material revisions, for instance, by providing at least 30 days' advance notice. Continued use of the services after such revisions constitutes agreement to the new Terms. If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
} 