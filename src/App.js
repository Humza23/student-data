import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import ListOfStudents from './components/ListOfStudents'
import StudentPage from './components/StudentPage'

function App() {
  return (
    <div className="App">

<Routes>
            <Route path="/" element={<ListOfStudents />} />
            <Route
              path="/:studentId"
              element={
                <StudentPage/>
              }
            />
          </Routes>
    </div>
  );
}

export default App;
