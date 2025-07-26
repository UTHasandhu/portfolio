import React from "react";
import SemesterCard from "./SemesterCard";
import transcriptData from "../../tempData/transcriptData.json";


export default function EducationPage() {
    return (
        <div class="container-fluid">
            <div className="d-flex justify-content-space row ">
                <div class="col-1">
                    <h1>Education:</h1>
                </div>
                <div class="col-9">
                        <div class="container text-center bg-light">

                            {/* Title */}
                            <div class="row">
                                <div class="col">
                                    <h1> The University of Texas at Austin </h1>
                                    <h2> Academic Summary </h2>
                                </div>
                            </div>

                            {/* EID */}
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-3 text-start">EID: HJS2245</div>
                                <div className="col text-start">Name: Harman Sandhu</div>
                            </div>

                            {/* Major, School, First, Last, Classification */}
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-3 text-start">School: Natural Sciences</div>
                                <div className="col text-start">First Semester: Fall 2021</div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-3 text-start">Major: Computer Science</div>
                                <div className="col text-start">Last Semester: Summer 2024</div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-3 text-start">Classification: Senior</div>
                                <div className="col text-start">Graduation Date: Graduated</div>
                            </div>

                            {/* Education Details */}

                            {transcriptData.map((semesterObj) => (
                                <SemesterCard
                                    key={`${semesterObj.season}-${semesterObj.year}`}
                                    season={semesterObj.season}
                                    year={semesterObj.year}
                                    courses={semesterObj.courses}
                                />
                            ))}

                        </div>
                </div>
            </div>
        </div>
    );
}
