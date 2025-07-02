import { Button } from "@/components/ui/button";
import { Download, Users, MessageCircle, Video } from "lucide-react";
import { useState, useEffect } from 'react';
import { getTranslation } from '@/i18n/config';

export default function HeroSection() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate({});
    };
    
    window.addEventListener('language-change', handleLanguageChange);
    return () => window.removeEventListener('language-change', handleLanguageChange);
  }, []);
  
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 relative">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {getTranslation('hero.title')}<br/>
              <span className="gradient-text">{getTranslation('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {getTranslation('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToDownload}
                className="bg-white text-[#AB9FF2] hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                {getTranslation('hero.getApp')}
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#AB9FF2] px-8 py-4 rounded-2xl font-semibold text-lg h-auto bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                {getTranslation('hero.joinCommunity')}
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-gray-300">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-blue-400" />
                <span className="text-sm">{getTranslation('hero.secureChat')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-sm">{getTranslation('hero.socialFeed')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-400" />
                <span className="text-sm">{getTranslation('hero.liveStreaming')}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-[32rem] rounded-3xl shadow-2xl backdrop-blur-sm border border-purple-400/20 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/1.png')" }}>
                <div className="text-center text-white/90">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden bg-white/10">
                    <img src="/noshadow.png" alt="Logo" className="object-contain w-full h-full" />
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
