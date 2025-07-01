const statistics = [
  {
    number: "2B+",
    label: "People use WhatsApp"
  },
  {
    number: "100B+",
    label: "Messages sent daily"
  },
  {
    number: "180+",
    label: "Countries supported"
  }
];

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A4A4A] mb-4">Trusted by billions worldwide</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold gradient-text mb-4">{stat.number}</div>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
