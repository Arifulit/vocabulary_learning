

import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Lesson = () => {
  const { lesson_no } = useParams(); // Extract lesson_no from the URL
  const { Vocabulary } = useLoaderData(); // Load vocabulary data

  const [modalData, setModalData] = useState(null); // State to handle modal data
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  // Filter Vocabulary data based on the lesson_no
  const lessonData = Vocabulary.filter(
    (item) => item.Lesson_no === parseInt(lesson_no)
  );

  // Open modal and set the data
  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalData(null);
    setShowModal(false);
  };

  // Function to handle pronunciation
  const pronounceWord = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Speech synthesis not supported in this browser.');
    }
  };

  return (
    <div className="carousel flex-col items-center mt-[6.5rem]">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 pb-2">
          Lesson {lesson_no}
        </h1>
      </div>

      {/* Vocabulary Cards Section */}
      <div className="grid w-11/12 mx-auto text-white mb-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {lessonData.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-green-300 text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform"
          >
            <h2 className="text-2xl text-blue-600 mb-2 font-bold">{item.word}</h2>
            <p className="text-gray-600 mb-2 italic font-bold">
              Word: {item.word}
            </p>
            <p className="text-gray-700 mb-2 font-bold">
              Pronunciation: {item.pronunciation}
            </p>
            <p className="text-gray-700 mb-2 font-bold">Meaning: {item.meaning}</p>
            <p className="text-gray-700 mb-2 font-bold">
              Part of Speech: {item.part_of_speech}
            </p>
            <div className="flex justify-between">
            <button
              className="btn btn-primary"
              onClick={() => openModal(item)}
            >
              Details
            </button>

            {/* Speak Button */}
            <button
              onClick={() => pronounceWord(item.word)} // Pass the correct word
              className="btn btn-primary"
            >
              Speak
            </button>
            </div>
            
          </div>
        ))}
      </div>

      {/* Back to Lesson Button Section */}
      <div className="flex justify-center mb-8">
        <NavLink to="/start-learning">
          <button className="btn btn-primary px-6 py-2 rounded-lg">Back to Lesson</button>
        </NavLink>
      </div>

      {/* Modal */}
      {showModal && modalData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{modalData.word}</h2>
            <p className="text-gray-700 mb-2 font-bold">Meaning: {modalData.meaning}</p>
            <p className="text-gray-700 mb-2 font-bold">
              When to Say: {modalData.when_to_say || "N/A"}
            </p>
            <p className="text-gray-700 mb-2 font-bold">
              Example: {modalData.example || "N/A"}
            </p>
            <div className="flex justify-end">
              <button
                className="btn btn-secondary px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
