import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import ListOfStudents from './components/ListOfStudents'
import StudentPage from './components/StudentPage'

import studentData from './data/students.json'
import gradesData from './data/grades.json'

function App() {
  return (
    <div className="App">

<Routes>
            <Route path="/" element={<ListOfStudents studentData={studentData}/>} />
            <Route
              path="/:studentId"
              element={
                <StudentPage studentData={studentData} gradesData={gradesData}/>
              }
            />
          </Routes>
    </div>
  );
}

export default App;
