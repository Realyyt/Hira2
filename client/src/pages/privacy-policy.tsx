import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { ShieldCheck, Info, User, Globe, Key, Users, Lock, ArrowDownCircle, BookOpen } from "lucide-react";

const toc = [
  { id: "info-collect", label: "Information Hira Collects and Why" },
  { id: "use-info", label: "How Hira Uses Your Information" },
  { id: "sharing", label: "Data Sharing and Disclosure Practices" },
  { id: "security", label: "Data Security, Retention, and Deletion Policies" },
  { id: "rights", label: "Your Rights and Controls Over Your Data" },
  { id: "children", label: "Children's Privacy and Parental Consent" },
  { id: "transfers", label: "International Data Transfers" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 flex flex-col">
      <Navigation />
      {/* Hero Section */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-700/80 to-purple-700/80 shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <ShieldCheck className="w-14 h-14 text-blue-200 drop-shadow-lg" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 drop-shadow">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/90 font-medium mb-2">Our Privacy Policy: Safeguarding User Data</p>
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
          {/* Information Hira Collects and Why */}
          <section id="info-collect" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Information Hira Collects and Why</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira's Privacy Policy will be built upon the core principle of data minimization, ensuring that only information essential for providing its services is collected. This aligns with the NDPA's mandate that personal data be collected and processed for specific, legitimate, and lawful purposes.</p>
              <p><b>Information Provided by Users:</b><br />When users create an account on Hira, they will be required to provide essential information for unique identification and service delivery, such as a mobile phone number, a display name, a username, and a password. An email address or phone number may also be collected for account recovery and notifications. Optional information may include a profile picture, "about" information, and date of birth. It is important to note that display names and usernames are typically public by default. If Hira introduces professional or business accounts in the future, it may require additional information such as a professional category, and potentially allow public display of a street address, contact email, and contact phone number.</p>
              <p>User-generated content, including messages, photos, videos, documents, and status updates, will be collected. Hira's Privacy Policy will clearly state whether these communications are end-to-end encrypted or stored on servers. Hira may request permission to sync users' address book contacts to help them find friends on the platform. Users will retain control over this feature through their settings. For any paid features or services, Hira will collect necessary payment details, such as credit/debit card numbers and billing addresses, clarifying that sensitive financial data will be handled by secure third-party payment processors. Information provided when contacting customer support, including communication content and contact details, will also be collected to facilitate assistance.</p>
              <p><b>Automatically Collected Information:</b><br />Hira will automatically collect information about user activity on the platform, including features used, interactions, time, frequency, and duration of activities, as well as online status and "last seen" timestamps. Log and troubleshooting information, such as diagnostic data, crash reports, and performance logs, will be gathered to maintain service quality. Device and connection information, including hardware model, operating system, battery level, signal strength, app version, browser information, mobile network details, IP address, language, time zone, and unique device identifiers, will also be collected. General location information, estimated from IP addresses or phone number area codes, may be used even without precise location sharing. Cookies and similar technologies will be employed for web-based services to ensure proper operation and feature delivery.</p>
              <p><b>Information from Third Parties:</b><br />Hira may receive information about users from other users, such as through contact uploads or mentions. Additionally, data may be received from service providers or partners, including ad partners, developers, or other services connected to Hira, which could include browser cookie IDs, mobile device IDs, hashed user information, demographic data, and content viewed or actions taken on external websites or apps.</p>
              <p>The NDPA's broad definition of "Personal Data" is a critical consideration. It explicitly includes online identifiers such as MAC addresses, IP addresses, and IMEI numbers. This means that nearly any user-identifiable information, including the technical data automatically collected, falls under the NDPA's stringent requirements for lawful processing. This necessitates a comprehensive approach to data mapping and consent, even for seemingly technical data points. Hira must ensure that its collection and processing of such identifiers are clearly disclosed and supported by a valid legal basis.</p>
            </div>
          </section>
          {/* How Hira Uses Your Information */}
          <section id="use-info" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Key className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">How Hira Uses Your Information</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira will process personal data strictly for specific, legitimate, and lawful purposes, ensuring a clear legal basis for each processing activity, in full compliance with the NDPA.</p>
              <p><b>Purposes for Data Use:</b><br />Data collected will be used to provide and operate services, encompassing account creation and management, delivery of messages and content, facilitation of calls, and enabling features like avatars, communities, groups, and cross-device functionality. Information is also utilized to improve and customize services by analyzing usage patterns, troubleshooting issues, testing new features, and personalizing the user experience, such as content recommendations or relevant advertisements if an ad-supported model is adopted. For safety and security, data is crucial in detecting and preventing fraud, spam, abuse, and other security issues, thereby protecting the platform's integrity. Hira will use contact information for communication, sending service announcements, administrative messages, and responding to customer support inquiries. Data is also processed for business operations, including payment processing and fulfilling contractual obligations. Finally, information is used for legal compliance, satisfying applicable laws, regulations, legal processes, or governmental requests.</p>
              <p><b>Legal Basis for Processing (NDPA Compliance):</b><br />Hira will rely on several legal bases for processing personal data, as outlined by the NDPA:<br />Consent: Processing will occur where the user has provided freely given, specific, informed, and unambiguous consent. This is particularly important for sensitive data or purposes not strictly necessary for service provision. For children, parental or legal guardian consent will be obtained, alongside appropriate age and consent verification mechanisms.<br />Contractual Necessity: Data processing that is necessary to perform the terms of service agreement with the user, such as delivering messages or providing access to features.<br />Legal Obligation: Processing required to comply with a legal obligation, such as data retention for law enforcement requests or breach notifications.<br />Legitimate Interest: Processing based on Hira's legitimate business reasons, provided these interests are not outweighed by the user's fundamental privacy rights. This includes activities like enhancing security, improving service functionality, and preventing fraud. The inclusion of legitimate interest as a legal basis is a notable addition in the NDPA 2023, aligning with international data protection standards.</p>
              <p>The NDPA's emphasis on "freely given, specific, informed and unambiguous consent" for data processing, especially for children, requires Hira to implement a granular consent management system. This moves beyond simple "I agree to the terms" checkboxes. Hira cannot bundle all data processing activities under a single blanket consent. For optional features or data uses, such as personalized advertisements or contact syncing, Hira must obtain explicit, opt-in consent that clearly states the specific purpose of the data use. For children, the additional requirement of parental consent and verifiable age and consent mechanisms necessitates careful technical implementation and user experience design to ensure genuine comprehension and valid consent from minors and their guardians.</p>
            </div>
          </section>
          {/* Data Sharing and Disclosure Practices */}
          <section id="sharing" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Data Sharing and Disclosure Practices</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira's Privacy Policy will clearly outline how user information may be shared and disclosed, ensuring transparency and adherence to legal obligations.</p>
              <p><b>Sharing with Other Users:</b> Information is inherently shared with other users through communication features, such as messages and profile data, the visibility of which is controlled by user privacy settings. Hira will explicitly caution users that recipients of their communications can copy, store, and re-share content.</p>
              <p><b>Sharing with Service Providers:</b> Hira will engage reputable third-party service providers for essential functions such as data hosting, analytics, payment processing, content safety technology, and potentially translation or transcription services. These providers will process data on Hira's behalf under strict confidentiality agreements and robust security measures, ensuring data is used only for the purposes for which Hira engaged them.</p>
              <p><b>Sharing with Affiliates (if applicable):</b> Should Hira operate within a larger corporate structure, personal data may be disclosed to corporate affiliates for the purpose of operating and improving services, including the delivery of advertisements if Hira adopts an ad-supported model.</p>
              <p><b>Legal and Governmental Requests:</b> Hira reserves the right to preserve, use, or disclose personal data when it is reasonably believed necessary to comply with applicable laws, regulations, legal processes (such as a court order), or governmental requests. This also extends to protecting the safety of any person, the integrity of the platform (e.g., against spam or abuse), addressing security or technical issues, or safeguarding Hira's rights and property or those of its users.</p>
              <p>The NITDA Code of Practice includes a significant obligation for platforms to "disclose the identity of the content creator when directed by a court order for purposes related to Nigeria's sovereignty, integrity, public order, security, diplomatic relationships, felony, incitement, rape, child abuse, or sexually explicit material". This clause is more explicit and broad in its scope for compelled disclosure than general legal compliance clauses. Hira must establish clear internal protocols for handling such judicial requests, ensuring that the validity of court orders is verified, content creators are accurately identified (which can be challenging with pseudonymous accounts), and information is securely disclosed while upholding user privacy to the greatest extent possible. This area represents a critical operational and legal risk that requires proactive planning.</p>
              <p><b>Business Transfers:</b> In the event of a bankruptcy, merger, acquisition, reorganization, or sale of assets, personal data may be transferred to the new entity, with Hira's Privacy Policy continuing to apply to the transferred data.</p>
              <p><b>Non-Personal Information:</b> Hira may share or disclose non-personal information, such as aggregated or anonymized data (e.g., total user engagements, trending topics in a specific location), with partners or for public reporting purposes.</p>
            </div>
          </section>
          {/* Data Security, Retention, and Deletion Policies */}
          <section id="security" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Data Security, Retention, and Deletion Policies</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira is committed to implementing robust technical and organizational measures to protect personal data from unauthorized access, alteration, disclosure, or destruction. This commitment includes the use of encryption for sensitive data, particularly for messages if end-to-end encryption is implemented, strict access controls, and regular security assessments to identify and mitigate vulnerabilities.</p>
              <p>Data will be retained only for as long as is reasonably necessary to fulfill the specific purposes for which it was collected, to comply with legal obligations, or for legitimate business interests. Hira's policy will outline specific retention periods for different categories of data, such as undelivered messages (e.g., up to 30 days) or log data (e.g., maximum of 18 months).</p>
              <p>Users will be provided with clear mechanisms to delete their accounts and content. Hira's policy will explain the irreversible nature of account deletion and the potential for public content to remain in third-party caches, such as search engines, even after deletion from the platform.</p>
              <p>The NDPA's requirement for Data Controllers to implement "timely restoration of data in the event of an incident, periodic risk assessment of systems and services, regular testing, assessment and evaluation of effectiveness of measures against current and evolving risks" signifies a mandate for a continuous, proactive cybersecurity posture. This goes beyond a one-time implementation of security measures; it requires Hira to invest in a robust incident response plan, conduct regular penetration testing and vulnerability assessments, and engage in continuous monitoring to meet the explicit and ongoing requirements of the NDPA.</p>
            </div>
          </section>
          {/* Your Rights and Controls Over Your Data */}
          <section id="rights" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <ArrowDownCircle className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Your Rights and Controls Over Your Data</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira's Privacy Policy will clearly articulate the rights users have over their personal data, aligning with the comprehensive provisions of the NDPA.</p>
              <ul className="list-disc pl-6">
                <li>Right to Access: Users can request a copy of their personal data held by Hira.</li>
                <li>Right to Rectification: Users have the right to correct inaccurate or incomplete personal data.</li>
                <li>Right to Erasure (Right to be Forgotten): Users can request the deletion of their data, subject to legal limitations (e.g., data required for legal compliance).</li>
                <li>Right to Object: Users can object to the processing of their personal data under certain circumstances, such as for direct marketing purposes.</li>
                <li>Right to Restrict Processing: Users can request a temporary halt to the processing of their data under specific conditions.</li>
                <li>Right to Data Portability: Users can request their data in a structured, commonly used, and machine-readable format to transfer it to another service.</li>
                <li>Right to Withdraw Consent: Users have the right to withdraw previously given consent for data processing at any time.</li>
                <li>Right to Lodge a Complaint: Users can lodge a complaint with the Nigeria Data Protection Commission (NDPC) if they believe their data protection rights have been violated.</li>
                <li>Private Right of Action: The NDPA grants users a private right of action, allowing them to seek recovery of damages in civil proceedings if they suffer injury, loss, or harm due to a violation of the Act.</li>
              </ul>
              <p>The NDPA's explicit provision for a "private right of action that allows recovery of damages in a civil proceeding" significantly increases Hira's legal exposure for privacy breaches compared to jurisdictions without such direct individual recourse. While many privacy laws impose regulatory fines, allowing individuals to sue for damages directly creates a direct financial incentive for users to pursue legal action if their rights are violated. This shifts the risk from solely regulatory penalties to potential class-action lawsuits or individual claims, underscoring the heightened importance of robust data protection practices, meticulous record-keeping of consent, and responsive complaint handling to mitigate this direct financial liability.</p>
              <p><b>Hira's Control Mechanisms:</b><br />Hira will provide users with intuitive in-app privacy settings to manage the visibility of their profile information, online status, read receipts, and who can add them to groups. Users will also have controls over content personalization. Tools for managing contact uploads, blocking, and reporting other users will be readily available. Furthermore, clear options for account deactivation and deletion will be provided.</p>
            </div>
          </section>
          {/* Children's Privacy and Parental Consent */}
          <section id="children" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <User className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">Children's Privacy and Parental Consent</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira will establish a clear minimum age for using its services, likely 13 years old. For any specific features or paid services, an older age, such as 18, or explicit parental consent may be required.</p>
              <p>For users identified as children, as defined by Nigerian law, Hira will implement mechanisms to obtain verifiable consent from a parent or legal guardian for processing their personal data. Furthermore, Hira's privacy policy will be presented in a child-friendly format, ensuring that both children and their guardians can clearly understand the data processing activities before granting consent. Robust mechanisms for age and consent verification will be implemented to ensure compliance with these requirements. Hira will also explicitly prohibit content that is harmful to a child or exploits a child.</p>
              <p>The NDPA's specific mandate for "child-friendly" privacy policies and appropriate age/consent verification mechanisms requires Hira to invest in specialized user experience and user interface design, as well as careful legal interpretation. This means going beyond a simple legal disclaimer to ensure genuine comprehension and valid consent from minors and their guardians. The "child-friendly" aspect implies a need for simplified language, potentially visual aids, and interactive elements to explain data practices. The "appropriate mechanisms to verify the age and consent" suggests a need for robust technical solutions, such as parental email verification or even ID checks for guardians, which will add a layer of complexity to the onboarding process for younger users.</p>
            </div>
          </section>
          {/* International Data Transfers */}
          <section id="transfers" className="bg-blue-950/70 rounded-2xl shadow-lg p-8 border border-blue-800">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-6 h-6 text-blue-300" />
              <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
            </div>
            <div className="text-blue-200 space-y-4">
              <p>Hira's Privacy Policy will disclose that user data may be transferred, stored, and processed in countries outside Nigeria, for purposes such as cloud hosting or utilizing Content Delivery Networks (CDNs).</p>
              <p>Hira will ensure that any such international data transfers comply with the NDPA's requirements for adequate protection. This involves implementing appropriate safeguards, such as standard contractual clauses with data processors in other jurisdictions, or by assessing whether the receiving country's data protection laws provide an adequate level of protection, as stipulated by the NDPA.</p>
              <p>Given Nigeria's "adequate protection" requirement for cross-border data transfers, Hira must conduct thorough due diligence on its cloud providers and any third-party services that process data outside Nigeria. This ensures that their data handling practices meet or exceed Nigerian data protection standards. This is not a mere disclosure; it is a legal obligation that requires Hira to identify all international data flows, assess the data protection laws of the destination countries, and/or implement specific legal safeguards, such as Standard Contractual Clauses, with its international service providers. This represents a complex legal and operational task that demands ongoing monitoring of international data transfer regulations.</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
} 