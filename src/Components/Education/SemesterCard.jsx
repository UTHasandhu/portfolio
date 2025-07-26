export default function SemesterCard({ season, year, courses }) {
  return (
    <div className="mt-5">
      <h3>
        {season} {year}
      </h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>Course</th>
              <th>Title</th>
              <th>Grade</th>
              <th>Unique</th>
              <th>Type</th>
              <th>Credit Hours</th>
              <th>Grade Points</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, idx) => (
              <tr key={idx}>
                <td>{c.course}</td>
                <td>{c.title}</td>
                <td>{c.grade}</td>
                <td>{c.unique}</td>
                <td>{c.type}</td>
                <td>{c.creditHours}</td>
                <td>{c.gradePoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}