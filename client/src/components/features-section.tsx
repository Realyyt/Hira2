import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Video, Hash, MessageCircle, Zap } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Public Feeds & Posts",
    description: "Create threaded posts, reply to conversations, and discover trending content with hashtags and mentions.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Shield,
    title: "End-to-end encryption",
    description: "All private messages and group chats are secured with end-to-end encryption by default.",
    color: "text-green-400",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Users,
    title: "Communities & Groups",
    description: "Join communities, create groups with role-based access, and connect with like-minded people.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Video,
    title: "Live Streaming",
    description: "Host live video sessions with real-time chat interaction. Stream publicly or privately to your audience.",
    color: "text-red-400",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Hash,
    title: "Content Discovery",
    description: "Explore trending topics, discover new users, and find communities through our intelligent recommendation system.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Zap,
    title: "Self-Destructing Messages",
    description: "Send messages that automatically delete after a set time for enhanced privacy in secret chats.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[hsl(223,47%,11%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Hira</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The perfect blend of social media and secure messaging. Connect, share, and communicate with complete privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-[hsl(222,84%,5%)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 border border-gray-600/30`}>
                    <IconComponent className={`${feature.color} h-8 w-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
