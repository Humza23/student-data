import React from 'react'
// import studentData from '../data/students.json'
import { Link } from 'react-router-dom'



const ListOfStudents = (props) => {
    const {studentData} = props
    const sortedStudentData = studentData.sort((a, b) => a.FirstName.localeCompare(b.FirstName))
    
  return (
    <div className='studentList'>
      <h1 style={{textDecoration: 'underline'}}>
      NY01MS 07 - New York University Students
      </h1>
      { sortedStudentData.map(student => (
        <div className='studentName' key={student.StudentID} onClick={()=>console.log(student.StudentID)}>
                <Link to={`/${student.StudentID}`}>

            <p> {student.FirstName} {student.LastName} </p>

            </Link>

            </div>
      ))
      }
</div>
      );
};

export default ListOfStudents