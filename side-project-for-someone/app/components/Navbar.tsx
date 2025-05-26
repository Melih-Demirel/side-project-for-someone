"use client";

const sections = [
  "Faalangst", "Stress", "Perfectionisme", "Mindfulness",
  "Yoga", "Angst", "Prestatiedruk", "Belang van slapen, gezond eten en voldoende bewegen"
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-4xl mx-auto px-4 py-2 overflow-x-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm font-medium text-gray-800 hover:text-blue-600 hover:underline transition-colors"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
