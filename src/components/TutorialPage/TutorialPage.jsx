import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const TutorialPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Learn Vocabularies - Tutorial Videos</h1>

      {/* Embedded YouTube Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/qzsQ_5TymMI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/rGxK0pA1bNk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/awIXN5LgWKY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 4 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/L74AFxTUc4M"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 5 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/d8CA2kyGrKM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 6 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/qtlTMRyMWfU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 7 (Optional) */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/UtovFBszyng"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 8 (Optional) */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/YOWWze1igj8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Learn Vocabulary Button */}
      <div className="text-center mt-10">
        <Link
          to="/start-learning"
          className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Learn Vocabularies
        </Link>
      </div>
    </div>
  );
};

export default TutorialPage;
