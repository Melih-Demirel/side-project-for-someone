"use client";
import { useState } from "react";

export default function CollapsibleSection({
  title,
  content,
}: { title: string; content: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold text-black py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded"
      >
        {open ? "▼ " : "▶ "} {title}
      </button>
      {open && <p className="px-3 mt-2 text-gray-800 whitespace-pre-line">{content}</p>}
    </div>
  );
}
