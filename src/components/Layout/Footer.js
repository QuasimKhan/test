import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <p className="text-sm text-gray-400 leading-relaxed">
              Quasim Khan is committed to providing quality services and products. Our mission is to deliver excellence while building strong customer relationships.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social media icons */}
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <hr className="border-gray-700" />
          <p className="mt-4 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Quasim Khan. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
