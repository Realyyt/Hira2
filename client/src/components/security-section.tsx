import { Card, CardContent } from "@/components/ui/card";
import { Lock, UserCheck, EyeOff } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "Only you and the person you're talking to can read your messages. Not even WhatsApp.",
    color: "text-[#128C7E]",
    bgColor: "bg-green-100"
  },
  {
    icon: UserCheck,
    title: "Privacy controls",
    description: "Control who can see your profile photo, status, and last seen timestamp.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: EyeOff,
    title: "Disappearing messages",
    description: "Send messages that disappear after 7 days for added privacy and control.",
    color: "text-[#9500FF]",
    bgColor: "bg-purple-100"
  }
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-[hsl(223,47%,11%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Your privacy is our priority</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hira is designed with your privacy in mind. All personal conversations and social interactions are protected by default encryption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-[hsl(222,84%,5%)] p-8 rounded-2xl shadow-lg text-center border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600/30`}>
                    <IconComponent className={`${feature.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors">
            Learn more about Hira privacy and security →
          </a>
        </div>
      </div>
    </section>
  );
}
