import { NavLink, useLoaderData } from "react-router-dom";

const CardPaginationExample = () => {
  const data = useLoaderData(); // Vocabulary data

  return (
    <div className="container mx-auto p-8 bg-white rounded-xl shadow-xl mt-[4.5rem]">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
        Vocabulary Card List
      </h1>

      {/* Vocabulary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-b from-blue-50 via-white to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Word: <span className="text-gray-800">{item.word}</span>
            </h2>
           
            <p className="text-gray-700 mb-4 leading-relaxed">
              Meaning: <span className="text-gray-900 font-medium">{item.meaning}</span>
            </p>
            <NavLink to={`/lesson/${item.Lesson_no}`}>
              <button className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 py-2 px-4 rounded-md font-semibold tracking-wide transition duration-300">
                Go to Lesson {item.Lesson_no}
              </button>
            </NavLink>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-16">
        <NavLink to="/tutorials">
          <button className="px-10 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full font-semibold tracking-wider shadow-md hover:shadow-lg transition duration-300">
            Explore More Tutorials
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CardPaginationExample;
