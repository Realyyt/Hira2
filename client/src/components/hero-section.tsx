import { Button } from "@/components/ui/button";
import { Download, Users, MessageCircle, Video } from "lucide-react";

export default function HeroSection() {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative">
      {/* Phone mockup background pattern */}
      <div className="absolute inset-0 opacity-15">
        {/* Phone outline effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 border-2 border-purple-300/30 rounded-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-88 bg-gradient-to-br from-purple-400/10 to-purple-600/20 rounded-2xl"></div>
        
        {/* Floating feature badges */}
        <div className="absolute top-1/4 left-1/4 bg-green-500/40 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
          End-to-End Encrypted
        </div>
        <div className="absolute bottom-1/3 right-1/4 bg-purple-500/40 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
          Live Streaming
        </div>
        
        {/* Additional gradient effects */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(171, 159, 242, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(139, 123, 216, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(107, 91, 149, 0.1) 0%, transparent 60%)
          `
        }}></div>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Connect. Share.<br/>
              <span className="gradient-text">Stay Secure.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Hira combines social media with secure messaging. Share public posts, join communities, and chat privately with end-to-end encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToDownload}
                className="bg-white text-[#AB9FF2] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Get Hira
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#AB9FF2] px-8 py-4 rounded-2xl font-semibold text-lg h-auto bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Secure Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-sm">Social Feed</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-400" />
                <span className="text-sm">Live Streaming</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-[#AB9FF2]/15 to-black/40 rounded-3xl shadow-2xl backdrop-blur-sm border border-purple-400/20 flex items-center justify-center">
                <div className="text-center text-white/90">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#AB9FF2] to-[#8B7BD8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">H</span>
                  </div>
                  <p className="text-lg font-medium">Hira Interface</p>
                  <p className="text-sm text-gray-300 mt-2">Social • Secure • Simple</p>
                </div>
              </div>
              
              {/* Floating feature cards */}
              <div className="absolute -top-4 -left-4 bg-green-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                End-to-End Encrypted
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                Live Streaming
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
