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
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <i className="fab fa-whatsapp text-[#128C7E] text-3xl"></i>
              <span className="ml-2 text-xl font-bold text-[#4A4A4A]">WhatsApp</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-[#4A4A4A] hover:text-[#128C7E] px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="text-[#4A4A4A] hover:text-[#128C7E] px-3 py-2 text-sm font-medium transition-colors"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className="text-[#4A4A4A] hover:text-[#128C7E] px-3 py-2 text-sm font-medium transition-colors"
              >
                WhatsApp Business
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-[#4A4A4A] hover:text-[#128C7E] px-3 py-2 text-sm font-medium transition-colors"
              >
                Security
              </button>
              <a href="#" className="text-[#4A4A4A] hover:text-[#128C7E] px-3 py-2 text-sm font-medium transition-colors">
                Help Center
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select className="bg-transparent text-[#4A4A4A] text-sm border-none focus:outline-none hidden sm:block">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <Button className="bg-[#9500FF] hover:bg-[#9500FF]/90 text-white px-4 py-2 rounded-full text-sm font-medium">
              WhatsApp Web
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
                    className="text-[#4A4A4A] hover:text-[#128C7E] text-left text-lg font-medium transition-colors"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('download')}
                    className="text-[#4A4A4A] hover:text-[#128C7E] text-left text-lg font-medium transition-colors"
                  >
                    Download
                  </button>
                  <button 
                    onClick={() => scrollToSection('business')}
                    className="text-[#4A4A4A] hover:text-[#128C7E] text-left text-lg font-medium transition-colors"
                  >
                    WhatsApp Business
                  </button>
                  <button 
                    onClick={() => scrollToSection('security')}
                    className="text-[#4A4A4A] hover:text-[#128C7E] text-left text-lg font-medium transition-colors"
                  >
                    Security
                  </button>
                  <a href="#" className="text-[#4A4A4A] hover:text-[#128C7E] text-left text-lg font-medium transition-colors">
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
