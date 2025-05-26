"use client";
import { useState } from "react";

type CollapsibleContent =
  | string
  | {
    intro: string;
    bullets: string[];
    outro: string;
  }
  | string[]; // For Bron content as array of strings

interface CollapsibleSectionProps {
  title: string;
  content: CollapsibleContent;
  isBronList?: boolean;
  centerTitle?: boolean;
}

export default function CollapsibleSection({
  title,
  content,
  isBronList = false,
  centerTitle = false,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(false);

  const isObjectContent = (
    c: CollapsibleContent
  ): c is { intro: string; bullets: string[]; outro: string } =>
    typeof c === "object" && c !== null && "intro" in c && "bullets" in c && "outro" in c;

  // Function to split text line into [beforeUrlText, url] for clickable part
  function splitTextUrl(line: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const match = line.match(urlRegex);
    if (!match) return [line, null];
    const url = match[0];
    const parts = line.split(url);
    return [parts[0], url];
  }

  return (
    <div className="my-2">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full font-semibold text-black py-2 px-3 hover:bg-gray-200 bg-gray-100 rounded-t-md ${centerTitle ? "text-center" : "text-left"
          }`}
      >
        {open ? "▼ " : "▶ "} {title}
      </button>

      {open && typeof content === "string" && !isBronList ? (
        <p
          className="px-3 pt-2 pb-3 text-gray-800 whitespace-pre-line bg-gray-100 rounded-b-md"
          dangerouslySetInnerHTML={{ __html: content as string }}
        />

      ) : open && isObjectContent(content) ? (
        <div className="px-3 pt-2 pb-3 text-gray-800 space-y-2 whitespace-pre-line bg-gray-100 rounded-b-md">
          <p>{content.intro}</p>
          <ul className="list-disc list-inside space-y-1">
            {content.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{content.outro}</p>
        </div>
      ) : (
        open &&
        isBronList &&
        Array.isArray(content) && (
          <ul className="px-3 pt-2 pb-3 text-gray-800 space-y-1 list-inside bg-gray-100 rounded-b-md" style={{ listStyleType: "none" }}>

            {content.map((line, i) => {
              const [text, url] = splitTextUrl(line);
              return (
                <li key={i} className="break-words">
                  {text}
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-blue-600 hover:underline"
                    >
                      {url}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        )
      )}
    </div>
  );
}
