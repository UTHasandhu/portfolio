import React, { useState } from "react";
import experienceData from "../../tempData/experienceData.json";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

export default function ExperiencePage({ activeTag }) {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Experience</h1>
      <div className="timeline position-relative">
        {experienceData
          .filter(
            (exp) => !activeTag || exp.tags?.some((t) => t.name === activeTag)
          )
          .map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
      </div>
    </div>
  );
}
