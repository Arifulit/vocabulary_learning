import { useEffect } from "react";
import AOS from "aos"; // Import AOS package
import "aos/dist/aos.css"; // Import AOS styles
import Banner from '../Banner/Banner';
import AboutSection from '../AboutSection/AboutSection';
import SuccessSection from '../SuccessSection/SuccessSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import Testimonial from '../Testimonial/Testimonial';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation triggers only once
      easing: 'ease-out', // Animation easing
    });
  }, []);

  return (
    <div className="text-black"> {/* You can adjust the color as needed */}
      <Banner />
      <AboutSection />
      <SuccessSection />
      <FeaturesSection />
      <Testimonial />
      <ToastContainer />
    </div>
  );
};

export default Home;
