import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListOfStudents = (props) => {
  const { studentData } = props;
  const [name, setName] = useState("");

  const sortedStudentData = studentData.sort((a, b) =>
    a.FirstName.localeCompare(b.FirstName)
  );
  const [foundUsers, setFoundUsers] = useState(sortedStudentData);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = sortedStudentData.filter((student) => {
        return student.FirstName.toLowerCase().startsWith(
          keyword.toLowerCase()
        );
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(sortedStudentData);
    }

    setName(keyword);
  };

  return (
    <div className="studentList">
      <h1 style={{ textDecoration: "underline" }}>
        NY01MS 07 - New York University Students
      </h1>
      <div className="search-wrapper">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder="Search for student..."
        />
      </div>

      <div className="studentListNames">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((student) => (
            <div className="studentName" key={student.StudentID}>
              <Link to={`/${student.StudentID}`}>
                <p>
                  {" "}
                  {student.FirstName} {student.LastName}{" "}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <h1 style={{ color: "red" }}> No Results Found</h1>
        )}
      </div>
    </div>
  );
};

export default ListOfStudents;
