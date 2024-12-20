


const AboutSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-left">
          <div className="w-full lg:w-1/2">
            <img
              src="https://cdn.scholarwithin.com/media/20210319125425/Vocabulary-and-Reading-1.jpg" // Replace with your image URL
              alt="Learning activity"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-purple-700 mb-2">A1-A2 vocabulary</h2>
            <p className="text-gray-700">
            The website helps users expand their vocabulary in multiple languages through interactive lessons. Users can explore vocabulary cards with pronunciation, meaning, part of speech, and example sentences. A Details button provides additional information in a modal. The platform offers an engaging and effective way to learn and retain vocabulary.
            </p>
          </div>
        </div>
      );
};

export default AboutSection;
