const footerLinks = {
  whatWeDo: [
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "Social Features", href: "#social" },
    { label: "Live Streaming", href: "#" }
  ],
  whoWeAre: [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Brand Center", href: "#" },
    { label: "Privacy", href: "/privacy-policy" }
  ],
  useHira: [
    { label: "Android", href: "#" },
    { label: "iPhone", href: "#" },
    { label: "Communities", href: "#" },
    { label: "Help Center", href: "#" }
  ]
};

const socialLinks = [
  { icon: "fab fa-facebook", href: "#" },
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-youtube", href: "#" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#') && sectionId.length > 1) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[hsl(223,47%,11%)] text-white py-16 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/noshadow.png" alt="Logo" className="w-8 h-8 rounded-lg mr-3 object-cover" />
              <span className="text-2xl font-bold">Hira</span>
            </div>
            <p className="text-gray-300 mb-6">
              Social media meets secure messaging. Connect, share, and communicate privately.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-400">What we do</h4>
            <ul className="space-y-2">
              {footerLinks.whatWeDo.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-green-400">Who we are</h4>
            <ul className="space-y-2">
              {footerLinks.whoWeAre.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Use Hira</h4>
            <ul className="space-y-2">
              {footerLinks.useHira.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Hira Technologies
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="/community-guidelines" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Community Guidelines</a>
            <a href="/compliance" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
