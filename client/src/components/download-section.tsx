import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-[hsl(222,84%,5%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get Hira</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download Hira for your mobile device. Available on Android and iOS with all features included.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="mx-auto max-w-md">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Available for Mobile</h3>
            <div className="space-y-6">
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 h-auto hover:from-blue-700 hover:to-blue-800 border-0 rounded-2xl shadow-lg transition-all duration-300"
              >
                <i className="fab fa-apple text-4xl mr-6"></i>
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                  <div className="text-xs opacity-75">iOS 13.0 or later</div>
                </div>
              </Button>
              
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-gradient-to-r from-green-600 to-green-700 text-white p-6 h-auto hover:from-green-700 hover:to-green-800 border-0 rounded-2xl shadow-lg transition-all duration-300"
              >
                <i className="fab fa-google-play text-4xl mr-6"></i>
                <div className="text-left">
                  <div className="text-sm opacity-90">Get it on</div>
                  <div className="text-xl font-bold">Google Play</div>
                  <div className="text-xs opacity-75">Android 7.0 or later</div>
                </div>
              </Button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Experience the full power of Hira on mobile
              </p>
              <div className="flex justify-center gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs">Social Feed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs">Secure Chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs">Live Streaming</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-80 h-[40rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl shadow-2xl backdrop-blur-sm border border-blue-400/30 overflow-hidden">
                <div className="p-6">
                  {/* Mock phone interface */}
                  <img src="/2.jpg" alt="App Interface" className="absolute inset-0 w-full h-full object-cover z-0" />
                   
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-blue-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                Social + Secure
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                Mobile First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
