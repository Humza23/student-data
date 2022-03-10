import React from 'react'
// import studentData from '../data/students.json'
import { Link } from 'react-router-dom'



const ListOfStudents = (props) => {
    const {studentData} = props
    
  return (
    <div>
      { studentData.map(student => (
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