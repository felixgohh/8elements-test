import React, { useState } from 'react';
import Carousel from './components/Carousel';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BrandName</h1>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {/* Show hamburger icon if menu is closed, close icon if open */}
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Menu (on larger screens) */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#profile" className="hover:text-gray-300">
                Profile
              </a>
            </li>
          </ul>

          {/* Mobile Menu (visible when burger menu is clicked) */}
          {isMobileMenuOpen && (
            <ul className="md:hidden z-10 flex flex-col absolute top-[64px] left-0 w-full bg-blue-600 shadow-md space-y-4 py-4 text-center">
              <li>
                <a
                  href="#home"
                  className="block text-white hover:text-gray-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-white hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="block text-white hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  className="block text-white hover:text-gray-300"
                >
                  Profile
                </a>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <main className="flex-1">
        <section id="home" className="container mx-auto md:py-8">
          {/* Image Carousel */}
          <Carousel />

          <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
            <div className="bg-green-300 p-6 shadow-md rounded min-h-[50vh]">
              Content Block 1
            </div>
            <div className="bg-yellow-400 p-6 shadow-md rounded min-h-[50vh]">
              Content Block 2
            </div>
            <div className="bg-red-400 p-6 shadow-md rounded min-h-[50vh]">
              Content Block 3
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} BrandName. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
