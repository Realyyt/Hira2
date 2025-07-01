const footerLinks = {
  whatWeDo: [
    { label: "Features", href: "#features" },
    { label: "Security", href: "#security" },
    { label: "For Business", href: "#business" },
    { label: "WhatsApp Web", href: "#" }
  ],
  whoWeAre: [
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Brand Center", href: "#" },
    { label: "Privacy", href: "#" }
  ],
  useWhatsApp: [
    { label: "Android", href: "#" },
    { label: "iPhone", href: "#" },
    { label: "Mac/PC", href: "#" },
    { label: "WhatsApp Web", href: "#" }
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
    <footer className="bg-[#1F2937] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <i className="fab fa-whatsapp text-[#128C7E] text-3xl mr-3"></i>
              <span className="text-2xl font-bold">WhatsApp</span>
            </div>
            <p className="text-gray-300 mb-6">
              Simple, secure, reliable messaging. For everyone.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">What we do</h4>
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
            <h4 className="text-xl font-semibold mb-4">Who we are</h4>
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
            <h4 className="text-xl font-semibold mb-4">Use WhatsApp</h4>
            <ul className="space-y-2">
              {footerLinks.useWhatsApp.map((link, index) => (
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
            © 2025 WhatsApp LLC
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
