import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Video, Globe, FileText, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "End-to-end encrypted",
    description: "Your personal messages are protected by end-to-end encryption. Only you and the person you're talking to can read them.",
    color: "text-[#9500FF]",
    bgColor: "bg-[#9500FF]/10"
  },
  {
    icon: Users,
    title: "Group conversations",
    description: "Stay connected with groups of up to 1024 people. Share photos, videos, documents, and voice messages.",
    color: "text-[#128C7E]",
    bgColor: "bg-[#128C7E]/10"
  },
  {
    icon: Video,
    title: "Voice and video calls",
    description: "Talk to your friends and family with free voice and video calls over Wi-Fi or your cellular connection.",
    color: "text-[#9500FF]",
    bgColor: "bg-[#9500FF]/10"
  },
  {
    icon: Globe,
    title: "Works everywhere",
    description: "WhatsApp works on phones, tablets, and computers. Stay connected wherever you are.",
    color: "text-[#128C7E]",
    bgColor: "bg-[#128C7E]/10"
  },
  {
    icon: FileText,
    title: "Share files",
    description: "Send documents, photos, videos, and voice messages. Share moments that matter with the people you care about.",
    color: "text-[#9500FF]",
    bgColor: "bg-[#9500FF]/10"
  },
  {
    icon: Heart,
    title: "Built for you",
    description: "Simple, reliable, and private. WhatsApp is designed to work the way you need it to.",
    color: "text-[#128C7E]",
    bgColor: "bg-[#128C7E]/10"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A4A] mb-4">Why WhatsApp</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your friends and family, build your community, and grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`${feature.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
