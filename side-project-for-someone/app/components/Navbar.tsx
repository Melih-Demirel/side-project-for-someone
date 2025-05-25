"use client";
import Link from "next/link";

const sections = ["Faalangst", "Stress", "Perfectionisme", "Mindfulness", "Yoga", "Angst", "Prestatiedruk", "Slaap", "Voeding", "Beweging"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="overflow-x-auto flex space-x-4 p-4 whitespace-nowrap">
        {sections.map((section) => (
          <a key={section} href={`#${section}`} className="text-sm font-medium text-blue-600 hover:underline">
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}
