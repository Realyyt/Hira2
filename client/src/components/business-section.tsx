import { Button } from "@/components/ui/button";
import { Store, Bot, TrendingUp, Download } from "lucide-react";

const businessFeatures = [
  {
    icon: Store,
    title: "Business Profile",
    description: "Create a business profile with your contact info, website, location, and catalog.",
    color: "bg-[#9500FF]"
  },
  {
    icon: Bot,
    title: "Automated Messages",
    description: "Set up automated welcome and away messages to engage customers 24/7.",
    color: "bg-[#128C7E]"
  },
  {
    icon: TrendingUp,
    title: "Business Tools",
    description: "Use labels, quick replies, and message statistics to stay organized and efficient.",
    color: "bg-[#9500FF]"
  }
];

export default function BusinessSection() {
  return (
    <section id="business" className="py-20 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center text-white/80">
                <i className="fas fa-building text-6xl mb-4"></i>
                <p className="text-lg font-medium">Business Communication</p>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">WhatsApp Business</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with your customers, grow your business, and serve your community. WhatsApp Business helps you do it all with simple tools built for small and large businesses.
            </p>
            
            <div className="space-y-6 mb-8">
              {businessFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1`}>
                      <IconComponent className="text-white h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#9500FF] hover:bg-[#9500FF]/90 text-white px-8 py-4 rounded-full font-semibold h-auto">
                <Download className="mr-2 h-5 w-5" />
                Get WhatsApp Business
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1F2937] px-8 py-4 rounded-full font-semibold h-auto bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
