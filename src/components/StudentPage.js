import React from 'react'
import { useParams } from 'react-router-dom';

const StudentPage = (props) => {
    const {studentData, gradesData, attendanceData} = props
  const { studentID } = useParams();
  
  const studentInfo = studentData.find(student => {
    return student.StudentID == studentID
  }) || {}
  
const gradesFiltered = gradesData.filter(grade => {
    return grade.StudentID == studentInfo.StudentID
})

const attendanceFiltered = attendanceData.filter(attendance => {
    return attendance.StudentID == studentID
  }) || {}

console.log('studentinfo', studentInfo);
console.log('grades', gradesFiltered);
console.log('attendance', attendanceFiltered);
console.log('studentpage ID', studentID);

  return (
    <div className='studentPage'>
        <h1 className='studentName'>
            {studentInfo.FirstName} {studentInfo.LastName}
        </h1>
        <div className='studentSchoolInfo'>
            <p>School: {studentInfo.BuildingCode} </p>
            <p>Grade: {studentInfo.GradeLevel}</p>
            <p>Home Room: {studentInfo.Homeroom}</p>
            
        </div>
            
            <div className='studentGrades'>

            {gradesFiltered.map(grade => (
                <p className='studentGradeInfo' key={Math.random()}> {grade.Subject}: {grade.Percent} </p>
                ))}
                
            </div>

            <div className='studentAttendance'>
                
            {attendanceFiltered.map(attendance => (
                <p className='studentAttendanceInfo' key={Math.random()}> {attendance.Date}: {attendance.Type} </p>
                ))}
            
            </div>


    </div>
  )
}

export default StudentPage