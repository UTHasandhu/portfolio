// CoursesPool.jsx
import React, { useState } from "react";
import transcriptData from "../../tempData/transcriptData.json";

const semesterLabels = {
  "Fall 2021": "Freshman",
  "Spring 2022": "Freshman",
  "Fall 2022": "Sophomore",
  "Spring 2023": "Sophomore",
  "Fall 2023": "Junior",
  "Spring 2024": "Junior",
  "Summer 2024": "Senior"
};

const tagColors = {
  specialty: "bg-primary",
  language: "bg-success",
  framework: "bg-warning text-dark",
  tool: "bg-info text-dark",
  database: "bg-secondary",
  cloud: "bg-dark",
  project: "bg-danger"
};

export default function CoursesPool() {
  const [activeTag, setActiveTag] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const groupedByLabel = transcriptData.reduce((acc, course) => {
    const label = semesterLabels[course.semester] || "Other";
    if (!acc[label]) acc[label] = [];
    acc[label].push(course);
    return acc;
  }, {});

  const allTags = Array.from(
    new Set(
      transcriptData.flatMap((c) => c.tags?.map((t) => t.name) || [])
    )
  );

  const getTagColor = (type) => tagColors[type] || "bg-light text-dark";

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-4">Relevant CS Coursework</h2>

      {/* Tag filter pills */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {allTags.map((tag) => (
          <span
            key={tag}
            className={`badge rounded-pill px-3 py-2 ${activeTag === tag ? "bg-primary text-white" : "bg-secondary text-light"}`}
            style={{ cursor: "pointer" }}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Year Cards by Label */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {Object.entries(groupedByLabel).map(([label, courses]) => (
          <div
            key={label}
            className="card shadow-sm text-center border-0"
            style={{ width: "22rem", borderRadius: "2rem" }}
          >
            <div className="card-header bg-dark text-white rounded-top fw-bold" style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }}>
              {label} Year
            </div>
            <div className="card-body d-flex flex-wrap gap-2 justify-content-center">
              {courses
                .filter((course) => !activeTag || course.tags?.some((t) => t.name === activeTag))
                .map((course, idx) => (
                  <button
                    key={idx}
                    className="btn btn-outline-primary rounded-pill px-3"
                    onClick={() => setSelectedCourse(course)}
                  >
                    {course.courseName.split(" - ")[0]}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCourse.courseName}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedCourse(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Semester:</strong> {selectedCourse.semester}</p>
                <p>{selectedCourse.courseDescription}</p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {selectedCourse.tags?.map((tag, idx) => (
                    <span key={idx} className={`badge ${getTagColor(tag.type)} rounded-pill px-2`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedCourse(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}