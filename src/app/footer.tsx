import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        {/* Left Section - Brand */}
        <h2 className="text-lg font-semibold text-white">Tasuick</h2>

        {/* Center Section - Quick Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/services" className="hover:text-white transition">
            Services
          </a>
          <a href="/portfolio" className="hover:text-white transition">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Right Section - Socials */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-3">
        © {new Date().getFullYear()} Tasuick. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
