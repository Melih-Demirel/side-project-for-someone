import Navbar from "./components/Navbar";
import CollapsibleSection from "./components/CollapsibleSection";

// Example data (you'll replace this with actual content parsed from the DOCX file)
const sections = [
  {
    id: "Faalangst",
    title: "Faalangst",
    subsections: [
      { title: "Inleiding", content: "Faalangst is een probleem..." },
      { title: "Wat is het?", content: "Faalangst is een vorm van angst..." },
      // Add more...
    ],
  },
  {
    id: "Stress",
    title: "Stress",
    subsections: [
      { title: "Inleiding", content: "Stress is een veelvoorkomend fenomeen..." },
      // Add more...
    ],
  },
  // Add more sections like Perfectionisme, Mindfulness, etc.
];

export default function Home() {
  return (
    <main className="p-4 pt-24 max-w-3xl mx-auto">
      <Navbar />
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{section.title}</h2>
          {section.subsections.map((sub, i) => (
            <CollapsibleSection key={i} title={sub.title} content={sub.content} />
          ))}
        </section>
      ))}
    </main>
  );
}
