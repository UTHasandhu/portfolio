import React from "react";
import CoursesPool from "./CoursesPool";

export default function EducationPage() {
    return (
        <div class="container">
            <div className="row">
                <div class="col">
                    <h1>Education</h1>
                </div>
                <div class="col-1"></div>
            </div>
            <div className="row">
                <div class="col-1"></div>
                <div class="col">
                    <CoursesPool />
                </div>
                <div class="col-1"></div>
            </div>
        </div>
    );
}
