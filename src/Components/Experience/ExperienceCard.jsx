import React, { useState } from "react";

const tagColors = {
  specialty: "bg-primary",
  language: "bg-success",
  framework: "bg-warning text-dark",
  tool: "bg-info text-dark",
  database: "bg-secondary",
  cloud: "bg-dark",
  methodology: "bg-danger"
};

export default function ExperienceCard({ exp, index }) {
  const [showModal, setShowModal] = useState(false);

  const getTagColor = (type) => tagColors[type] || "bg-light text-dark";

  return (
    <div
      className={`timeline-item d-flex mb-5 ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div className="col-6">
        <div
          className="card shadow-sm border-0"
          style={{
            borderRadius: "1.5rem",
            background: index % 2 === 0 ? "#f0f8ff" : "#e6f0ff" // alternating soft blues
          }}
        >

          <div className="card-body">
            <h5 className="card-title fw-bold">
              {exp.title} @ {exp.company}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {exp.startDate} – {exp.endDate} | {exp.location}
            </h6>
            <p className="card-text">{exp.description}</p>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {exp.tags?.map((tag, i) => (
                <span
                  key={i}
                  className={`badge ${getTagColor(tag.type)} rounded-pill`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <button
              className="btn btn-outline-dark btn-sm mt-3 rounded-pill"
              onClick={() => setShowModal(true)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header">
                <h5 className="modal-title">
                  {exp.title} @ {exp.company}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">
                <h6 className="text-muted">
                  {exp.startDate} – {exp.endDate} | {exp.location}
                </h6>
                <p>{exp.description}</p>
                <ul>
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {exp.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`badge ${getTagColor(tag.type)} rounded-pill px-2`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
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
