import { Button } from "@/components/ui/button";
import { Download, Globe } from "lucide-react";

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Simple. Secure.<br/>
              <span className="text-white">Reliable messaging.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToDownload}
                className="bg-white text-[#9500FF] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#9500FF] px-8 py-4 rounded-full font-semibold text-lg h-auto bg-transparent"
              >
                <Globe className="mr-2 h-5 w-5" />
                Try WhatsApp Web
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              *Data charges may apply. Contact your provider for details.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <i className="fab fa-whatsapp text-8xl mb-4"></i>
                  <p className="text-lg font-medium">WhatsApp Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
