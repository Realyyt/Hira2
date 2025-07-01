import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A4A] mb-4">Download WhatsApp</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get WhatsApp on your phone, tablet, or computer. It's fast, simple, and free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#4A4A4A] mb-8">Download for your phone</h3>
            <div className="space-y-4 mb-8">
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-black text-white p-4 h-auto hover:bg-gray-800 border-black rounded-xl"
              >
                <i className="fab fa-apple text-3xl mr-4"></i>
                <div className="text-left">
                  <div className="text-sm opacity-75">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-black text-white p-4 h-auto hover:bg-gray-800 border-black rounded-xl"
              >
                <i className="fab fa-google-play text-3xl mr-4"></i>
                <div className="text-left">
                  <div className="text-sm opacity-75">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
            
            <h3 className="text-2xl font-bold text-[#4A4A4A] mb-8">Download for your computer</h3>
            <div className="space-y-4">
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-gray-100 text-[#4A4A4A] p-4 h-auto hover:bg-gray-200 border-gray-200 rounded-xl"
              >
                <i className="fab fa-windows text-3xl mr-4 text-blue-500"></i>
                <div className="text-left">
                  <div className="text-lg font-semibold">Download for Windows</div>
                  <div className="text-sm opacity-75">Windows 8.1 or later</div>
                </div>
              </Button>
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-gray-100 text-[#4A4A4A] p-4 h-auto hover:bg-gray-200 border-gray-200 rounded-xl"
              >
                <i className="fab fa-apple text-3xl mr-4"></i>
                <div className="text-left">
                  <div className="text-lg font-semibold">Download for Mac</div>
                  <div className="text-sm opacity-75">macOS 10.10 or later</div>
                </div>
              </Button>
              <Button 
                variant="outline"
                className="w-full flex items-center justify-start bg-[#128C7E] text-white p-4 h-auto hover:bg-[#128C7E]/90 border-[#128C7E] rounded-xl"
              >
                <i className="fas fa-globe text-3xl mr-4"></i>
                <div className="text-left">
                  <div className="text-lg font-semibold">WhatsApp Web</div>
                  <div className="text-sm opacity-75">Use WhatsApp in your browser</div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Card className="w-64 h-64 rounded-2xl shadow-lg mb-6 bg-gradient-to-br from-gray-100 to-gray-200">
              <CardContent className="flex items-center justify-center h-full p-0">
                <div className="text-center text-gray-600">
                  <div className="grid grid-cols-8 gap-1 mb-4">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium">QR Code</p>
                </div>
              </CardContent>
            </Card>
            <h4 className="text-xl font-bold text-[#4A4A4A] mb-2">Scan to get WhatsApp Web</h4>
            <p className="text-gray-600 text-center max-w-sm">
              Point your phone at this screen to capture the QR code and connect instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
