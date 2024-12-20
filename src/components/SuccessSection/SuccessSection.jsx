
import CountUp from "react-countup";

const SuccessSection = () => {
  const stats = [
    { id: 1, title: "Users", count: 1200 },
    { id: 2, title: "Lessons", count: 450 },
    { id: 3, title: "Vocabulary", count: 8000 },
    { id: 4, title: "Tutorials", count: 250 },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12" data-aos="zoom-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Success
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-3xl font-extrabold">
                {/* Animated Count */}
                <CountUp start={0} end={stat.count} duration={2} separator="," />
              </h3>
              <p className="text-lg font-medium mt-2">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
