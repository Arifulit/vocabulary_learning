

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-900 text-white py-16 px-6">
      <div className="container mx-auto">
        {/* Footer Grid for Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
          
          {/* Contact Information Section */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-indigo-300 mb-4">Contact Us</h3>
            <p className="text-lg text-gray-300 mb-2">Email: <a href="mailto:ariful.iit@gmail.com" className="text-indigo-200 hover:text-white">ariful.iit@gmail.com</a></p>
            <p className="text-lg text-gray-300 mb-2">Phone: <a href="tel:+01763584915" className="text-indigo-200 hover:text-white">01763584915</a></p>
            <p className="text-lg text-gray-300">Tangail,Dhaka,Bangladesh</p>
          </div>

          {/* Useful Links Section */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-indigo-300 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>
                <a href="/home" className="hover:text-indigo-200">Home</a>
              </li>
              <li>
                <a href="/start-learning" className="hover:text-indigo-200">Start Learning</a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-indigo-200">Tutorials</a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-indigo-200">About Us</a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-indigo-300 mb-4">About Us</h3>
            <p className="text-lg text-gray-300">
              We are passionate about making language learning easier and more enjoyable for everyone.
              Join our community and start enhancing your vocabulary today!
            </p>
          </div>
        </div>

        {/* Footer Divider and Copyright Section */}
        <div className="border-t border-gray-600 pt-6 text-center">
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 Language Learning App. All rights reserved.</p>
            <p className="mt-2">Crafted with love 💙 for language enthusiasts worldwide.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
