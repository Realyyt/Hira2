const statistics = [
  {
    number: "100k+",
    label: "Active Users"
  },
  {
    number: "1M+",
    label: "Messages sent daily"
  },
  {
    number: "100+",
    label: "Countries supported"
  },
  {
    number: "99.9%",
    label: "Uptime guarantee"
  }
];

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-[hsl(222,84%,5%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Growing fast worldwide</h2>
          <p className="text-xl text-gray-300">
            Join millions of users who trust Hira for their social and private communications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-[hsl(223,47%,11%)] p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-3">{stat.number}</div>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-[hsl(223,47%,11%)] px-8 py-4 rounded-2xl border border-gray-700/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-[hsl(222,84%,5%)]"></div>
              <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-[hsl(222,84%,5%)]"></div>
              <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-[hsl(222,84%,5%)]"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-[hsl(222,84%,5%)]"></div>
            </div>
            <span className="text-gray-300 font-medium">Join the community today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
