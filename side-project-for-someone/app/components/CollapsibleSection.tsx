"use client";
import { useState } from "react";

type CollapsibleContent =
  | string
  | {
    intro: string;
    bullets: string[];
    outro: string;
  };

export default function CollapsibleSection({
  title,
  content,
}: { title: string; content: CollapsibleContent }) {
  const [open, setOpen] = useState(false);

  const isObjectContent = (
    c: CollapsibleContent
  ): c is { intro: string; bullets: string[]; outro: string } =>
    typeof c === "object" && c !== null && "intro" in c && "bullets" in c && "outro" in c;

  return (
    <div className="my-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold text-black py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded"
      >
        {open ? "▼ " : "▶ "} {title}
      </button>
      {open && typeof content === "string" ? (
        <p className="px-3 mt-2 text-gray-800 whitespace-pre-line">{content}</p>
      ) : (
        open &&
        isObjectContent(content) && (
          <div className="px-3 mt-2 text-gray-800 space-y-2 whitespace-pre-line">
            <p>{content.intro}</p>
            <ul className="list-disc list-inside space-y-1">
              {content.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{content.outro}</p>
          </div>
        )
      )}
    </div>
  );
}
