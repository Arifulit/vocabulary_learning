
import { FaBook, FaUsers, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    { id: 1, icon: <FaBook className="text-purple-500 text-4xl" />, title: "Rich Content", description: "Access a variety of lessons and tutorials tailored to your level." },
    { id: 2, icon: <FaUsers className="text-purple-500 text-4xl" />, title: "Community", description: "Join a vibrant community of learners and share your journey." },
    { id: 3, icon: <FaGraduationCap className="text-purple-500 text-4xl" />, title: "Achievements", description: "Track your progress and earn badges as you improve." },
    { id: 4, icon: <FaChalkboardTeacher className="text-purple-500 text-4xl" />, title: "Expert Tutors", description: "Learn from experienced tutors with personalized guidance." },
  ];

  return (
    <div className="bg-gray-100 py-12 "  data-aos="flip-left">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white text-center shadow-lg rounded-lg p-6"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
