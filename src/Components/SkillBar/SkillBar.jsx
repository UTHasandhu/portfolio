// TagFilter.jsx
import React from "react";
import { getTagColorFromType } from "../../Utils/SkillTagUtils";

export default function SkillBar({ groupedTags, activeTag, setActiveTag }) {
  return (
    <div className="mb-5 container d-flex flex-wrap justify-content-center gap-4">
      {Object.entries(groupedTags).map(([type, tags]) => (
        <div key={type} className="d-flex flex-column align-items-center">
          <span className="badge mb-1 bg-white text-dark text-capitalize">{type}</span>
          <div className="d-flex flex-row flex-wrap gap-2">
            {tags.map((tagName) => (
              <span
                key={tagName}
                className={`badge rounded-pill px-3 py-1 ${activeTag !== tagName ? getTagColorFromType(type) : "bg-secondary text-light"}`}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveTag(activeTag === tagName ? null : tagName)}
              >
                {tagName}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
