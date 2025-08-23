import React, { useState } from "react";
import projectsData from "../../tempData/projectsData.json";

const tagColors = {
  specialty: "bg-primary",
  language: "bg-success",
  framework: "bg-warning text-dark",
  tool: "bg-info text-dark",
  database: "bg-secondary",
  cloud: "bg-dark",
  api: "bg-danger",
  library: "bg-purple text-white",
  platform: "bg-teal text-white",
  service: "bg-secondary"
};

export default function ProjectsPage({ activeTag }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const getTagColor = (type) => {
    return tagColors[type] || "bg-light text-dark";
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-4">Projects</h1>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {projectsData
          .filter(
            (project) =>
              !activeTag || project.tags?.some((t) => t.name === activeTag)
          )
          .map((project, idx) => (
            <div
              key={idx}
              className="card shadow-sm border-0"
              style={{ width: "22rem", borderRadius: "2rem" }}
            >
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{ minHeight: "12rem" }}
              >
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-truncate">{project.description}</p>
                <button
                  className="btn btn-outline-primary rounded-pill mt-auto"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedProject.description}</p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {selectedProject.tags?.map((tag, idx) => (
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
                  onClick={() => setSelectedProject(null)}
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
