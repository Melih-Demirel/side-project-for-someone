"use client";

import { useState } from "react";

const sections = [
  "Faalangst", "Stress", "Perfectionisme", "Mindfulness",
  "Yoga", "Angst", "Prestatiedruk", "Belang van slapen, gezond eten en voldoende bewegen", "Veerkracht"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-4xl mx-auto px-6 py-2 flex items-center">
        <h3 className="text-l md:text-l font-extrabold text-gray-900 mb-0 mr-8">
          Gids voor het mentale welzijn van jongeren
        </h3>

        <div className="hidden md:flex flex-wrap justify-end gap-3">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:underline transition-colors
                 border border-gray-300 rounded-md px-3 py-1"
            >
              {section}
            </a>
          ))}
        </div>


        {/* Mobile Burger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              // X icon when open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)} // close menu on click
                className="text-gray-800 text-sm font-medium border border-gray-300 rounded-md px-3 py-1 hover:text-blue-600 hover:underline transition-colors"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
