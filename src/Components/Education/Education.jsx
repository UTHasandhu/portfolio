import Semesters from "./Semesters";

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
