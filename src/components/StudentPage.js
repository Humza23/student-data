import React from 'react'
import { useParams } from 'react-router-dom';

const StudentPage = (props) => {
    const {studentData, gradesData} = props
  const { studentID } = useParams();
  
  const studentInfo = studentData.find(student => {
    return student.StudentID == studentID
  }) || {}
  
const gradesFiltered = gradesData.filter(grade => {
    return grade.StudentID == studentInfo.StudentID
})

console.log('studentinfo', studentInfo);
console.log('grades', gradesFiltered);
console.log('studentpage ID', studentID);

  return (
    <div>
        StudentPage
        <h1>
            {studentInfo.FirstName} {studentInfo.LastName}
            {gradesFiltered.map(grade => (
                <p key={Math.random()}> {grade.Subject}: {grade.Percent} </p>
            ))}
        </h1>



    </div>
  )
}

export default StudentPage