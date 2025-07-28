// CoursesPool.jsx
import Semesters from "../Education/Semesters";
const semesterLabels = {
  "Fall 2021": "Freshman",
  "Spring 2022": "Freshman",
  "Fall 2022": "Sophomore",
  "Spring 2023": "Sophomore",
  "Fall 2023": "Junior",
  "Spring 2024": "Junior",
  "Summer 2024": "Senior"
};
export default function EducationPage({ activeTag }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Education</h1>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col">
                    <Semesters activeTag={activeTag} />
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}
