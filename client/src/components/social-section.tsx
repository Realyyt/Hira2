import { Button } from "@/components/ui/button";
import { Hash, Users, TrendingUp, MessageSquare, Eye, BarChart3 } from "lucide-react";

const socialFeatures = [
  {
    icon: Hash,
    title: "Trending Hashtags",
    description: "Discover what's happening with real-time trending topics and hashtags across the platform.",
    color: "bg-blue-600"
  },
  {
    icon: Users,
    title: "User Communities",
    description: "Join communities based on your interests and connect with like-minded people worldwide.",
    color: "bg-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Engagement Analytics",
    description: "Track your post performance with detailed insights on reach, engagement, and follower growth.",
    color: "bg-green-600"
  },
  {
    icon: MessageSquare,
    title: "Threaded Conversations",
    description: "Engage in meaningful discussions with threaded replies and nested conversations.",
    color: "bg-orange-600"
  },
  {
    icon: Eye,
    title: "Content Discovery",
    description: "Explore new content through our intelligent recommendation algorithm tailored to your interests.",
    color: "bg-red-600"
  },
  {
    icon: BarChart3,
    title: "Real-time Notifications",
    description: "Stay updated with instant notifications for mentions, replies, and community activity.",
    color: "bg-indigo-600"
  }
];

export default function SocialSection() {
  return (
    <section id="social" className="py-20 bg-[hsl(223,47%,11%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Social Media Features</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the power of social networking with advanced privacy controls. Share your thoughts, build communities, and discover content that matters to you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {socialFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className={`w-10 h-10 ${feature.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 mt-1`}>
                      <IconComponent className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold h-auto">
                <Users className="mr-2 h-5 w-5" />
                Join Communities
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-2xl font-semibold h-auto bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-400/20 p-6">
              <div className="h-full bg-[hsl(222,84%,5%)] rounded-xl p-4 overflow-hidden">
                {/* Mock social feed */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">H</span>
                    </div>
                    <span className="text-white font-medium">Social Feed</span>
                  </div>
                  
                  {/* Mock posts */}
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">@user123</span>
                      <span className="text-gray-500 text-xs">2h</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-600/50 rounded"></div>
                      <div className="w-3/4 h-2 bg-gray-600/30 rounded"></div>
                    </div>
                    <div className="flex gap-4 mt-3 text-gray-400 text-xs">
                      <span>❤️ 24</span>
                      <span>💬 8</span>
                      <span>🔄 3</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">@community</span>
                      <span className="text-gray-500 text-xs">5h</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-5/6 h-2 bg-gray-600/50 rounded"></div>
                      <div className="w-2/3 h-2 bg-gray-600/30 rounded"></div>
                    </div>
                    <div className="flex gap-4 mt-3 text-gray-400 text-xs">
                      <span>❤️ 156</span>
                      <span>💬 42</span>
                      <span>🔄 18</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm font-medium">@creator</span>
                      <span className="text-gray-500 text-xs">1d</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-600/50 rounded"></div>
                      <div className="w-1/2 h-2 bg-gray-600/30 rounded"></div>
                    </div>
                    <div className="flex gap-4 mt-3 text-gray-400 text-xs">
                      <span>❤️ 89</span>
                      <span>💬 25</span>
                      <span>🔄 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-blue-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
              Real-time Feed
            </div>
            <div className="absolute -bottom-4 -right-4 bg-purple-500/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
              Community Driven
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}