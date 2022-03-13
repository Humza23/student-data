# Getting Started with Create React App
1. For the scope of this task, display 1 group of students within 1 homeroom in 1 school of the dataset
2. Each student must display the scholar's name, school, grade level, homeroom, yearly grades, and weekly attendance rate.

## Assumptions

1. One student can have only 1 unique student ID, as the given data set (Primary Key)

## Solution formulation

Steps I thought of and executed for displaying the correct information for each scholar:

1. For the scope of this project, I converted the desired excel data to CSV and then to JSON.
2. Get all scholar's names by unique student ID and iterate through them to display.
3. Each name Routes using react-router-dom to a Link with student ID as URL parameter
    - Created a Search Bar using React Hooks to simplify user experience allowing for search by student name.
4. Filter through JSON data to return correct student data according to student ID.
5. For ease of use, display print button allowing data to be printed in an easy to view manner

## Libraries/Tools used

* ReactJS - ES6 syntax with Functional components and React Hooks.
* React-Router-Dom for Dynamic routes to student pages
* CSV to JSON converter to access data provided
* Utilized Font Awesome and Google Fonts for basic styles
* Github Pages to deploy the project.

## How to setup locally

Run the following commands to setup, given `node` and `npm` is available:

1. git clone https://github.com/Humza23/student-data.git
2. cd student-data
3. npm install
4. npm start

or to view project

1. Navigate to https://humza23.github.io/student-data/

## If it was a bigger project

This is a coding task and scope is quite small. If it was a bigger real project, doing the following would be better:

1. If a RDBMS is used, it would be easier to scale this project with a relational database and a select SQL than on the code.
2. Further design the application to enhance the user experience and incorporate it as part of a larger application.