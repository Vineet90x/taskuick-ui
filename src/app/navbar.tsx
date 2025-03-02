"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
      setIsOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          TaskQuick
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-md">
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("work")}
          >
            Work
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("services")}
          >
            Services
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("faq")}
          >
            Faq 
          </li>
        </ul>

        {/* Hamburger Icon - Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-gray-400 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={32} />
        </button>

        {/* Mobile Menu Items */}
        <ul className="text-center space-y-6">
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("work")}
          >
            Work
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("services")}
          >
            Services
          </li>
          <li
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("faq")}
          >
            Faq
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
