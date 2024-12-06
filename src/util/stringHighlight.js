// /src/utils/textUtils.js

export const highlightText = (
  text,
  highlights,
  highlightClass = "text-main02",
) => {
  const parts = text.split(new RegExp(`(${highlights.join("|")})`, "g"));
  return parts.map((part, index) =>
    highlights.includes(part) ? (
      <span key={index} className={highlightClass}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};
