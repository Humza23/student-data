import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListOfStudents from "./components/ListOfStudents";
import StudentPage from "./components/StudentPage";

import studentData from "./data/students.json";
import gradesData from "./data/grades.json";
import attendanceData from "./data/attendance.json";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<ListOfStudents studentData={studentData} />}
        />
        <Route
          path="/:studentID"
          element={
            <StudentPage
              studentData={studentData}
              gradesData={gradesData}
              attendanceData={attendanceData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
