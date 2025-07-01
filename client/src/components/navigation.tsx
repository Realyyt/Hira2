import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[hsl(223,47%,11%)] shadow-lg fixed w-full top-0 z-50 border-b border-[hsl(217,32%,17%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">Hira</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('social')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Social Features
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Security
              </button>
              <a href="#" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Help Center
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-gray-300 text-sm border-none focus:outline-none hidden sm:block">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Get Hira
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5 text-[#4A4A4A]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-gray-300 hover:text-blue-400 text-left text-lg font-medium transition-colors"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('download')}
                    className="text-gray-300 hover:text-blue-400 text-left text-lg font-medium transition-colors"
                  >
                    Download
                  </button>
                  <button 
                    onClick={() => scrollToSection('social')}
                    className="text-gray-300 hover:text-blue-400 text-left text-lg font-medium transition-colors"
                  >
                    Social Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('security')}
                    className="text-gray-300 hover:text-blue-400 text-left text-lg font-medium transition-colors"
                  >
                    Security
                  </button>
                  <a href="#" className="text-gray-300 hover:text-blue-400 text-left text-lg font-medium transition-colors">
                    Help Center
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
