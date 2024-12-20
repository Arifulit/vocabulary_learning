import { NavLink, useLoaderData } from "react-router-dom";

const Tutorials = () => {
  const data = useLoaderData();

  return (
    <div className="carousel bg-gray-50 py-10 mt-[4.5rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Vocabulary Tutorials</h1>
          <p className="text-gray-600 mt-2">Expand your vocabulary with our tutorials.</p>
        </div>

        {/* Display current items in cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-2">{item.word}</h2>
              <p className="text-gray-500 italic">Pronunciation: {item.pronunciation}</p>
              <p className="text-gray-700 mt-3">
                <span className="font-semibold">Meaning:</span> {item.meaning}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Part of Speech:</span> {item.part_of_speech}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Lesson Button Section */}
        <div className="flex justify-center mt-12">
          <NavLink to="/start-learning">
            <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">
              Back to Start Learning
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
