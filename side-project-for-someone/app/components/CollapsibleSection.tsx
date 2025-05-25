"use client";
import { useState } from "react";

export default function CollapsibleSection({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="my-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left font-semibold text-lg py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded">
        {title}
      </button>
      {open && <p className="mt-2 px-3 text-gray-700 whitespace-pre-line">{content}</p>}
    </div>
  );
}
