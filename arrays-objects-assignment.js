// ===== QUESTION 1: Student objects =====
// Array of 5 students, each with id, name, age and 3 grades
const students = [
  { id: 1, name: 'Alice Johnson', age: 20, grades: [85, 92, 78] },
  { id: 2, name: 'Bashir Musa', age: 22, grades: [55, 62, 48] },
  { id: 3, name: 'Chioma Okafor', age: 21, grades: [95, 98, 91] },
  { id: 4, name: 'David Adeyemi', age: 19, grades: [72, 68, 75] },
  { id: 5, name: 'Fatima Bello', age: 23, grades: [40, 52, 35] },
];
console.log('Students:', students);

// ===== QUESTION 2: Calculate averages =====
// Adds up grades with reduce(), divides by the count, rounds to 2 decimals
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return Number((total / grades.length).toFixed(2));
}

// map() returns a new array; spread copies each student so the original isn't changed
const studentsWithAverage = students.map(student => {
  return { ...student, average: calculateAverage(student.grades) };
});
console.log('With averages:', studentsWithAverage);

// ===== QUESTION 3: Filter passing students =====
// filter() keeps only students with an average of 60 or more
function getPassingStudents(students) {
  return students.filter(student => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);
console.log('Passing students:', passing);

// ===== QUESTION 4: Functions and callbacks =====
// Applies the callback to every student and returns a new array
function processStudents(students, callback) {
  return students.map(student => callback(student));
}

// Callback 1: adds a letterGrade based on the average
function addLetterGrade(student) {
  let letterGrade;
  if (student.average >= 90) letterGrade = 'A';
  else if (student.average >= 80) letterGrade = 'B';
  else if (student.average >= 70) letterGrade = 'C';
  else if (student.average >= 60) letterGrade = 'D';
  else letterGrade = 'F';
  return { ...student, letterGrade };
}

// Callback 2: adds a status of "Pass" or "Fail"
function addStatus(student) {
  return { ...student, status: student.average >= 60 ? 'Pass' : 'Fail' };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log('With letter grades:', studentsWithGrades);

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log('With status:', studentsWithStatus);

// Proof the originals were not mutated
console.log('Original untouched:', studentsWithAverage[0]);