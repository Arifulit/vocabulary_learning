


const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bill Gates",
      feedback: "This platform has transformed the way I learn English. The interactive lessons and supportive community are amazing!",
      image: "https://images.squarespace-cdn.com/content/v1/5260bb36e4b028ec9a1e2d2f/1510010748977-FCNY95P4WJD9M2TUI5GK/static1.squarespace.png?format=1500w",
    },
    {
      id: 2,
      name: "Elon Musk",
      feedback: "The vocabulary-building tools are incredibly helpful. I’ve improved my confidence in speaking and writing.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Elon_Musk_Royal_Society_crop.jpg",
    },
    {
      id: 3,
      name: "Rabindranath Tagore",
      feedback: "I love the progress tracking feature. It keeps me motivated to learn more every day!",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rabindranath_Tagore_in_1909.jpg/800px-Rabindranath_Tagore_in_1909.jpg",
    },
  ];

  return (
    <div className="bg-purple-500 text-white py-12 "data-aos="fade-up">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Learners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-center text-gray-600 mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
