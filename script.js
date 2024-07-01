let students = [];

// Func to add Stud
let addStud = (id, name, grades = {}) => {
  let stud = {
    id: id,
    name: name,
    grades: grades,
  };
  students.push(stud);
  console.log(`Added Student: ${stud.name}`);
};

// Func to remove Stud

let removeStud = (id) => {
  let inititalLength = students.length;
  students = students.filter((stud) => stud.id !== id);
  if (students.length < inititalLength) {
    console.log(`Removed student with id: ${id}`);
  } else {
    console.log(`Student with id: ${id} not found`);
  }
};

addStud(1, "Faizal", { math: 90, english: 75, computer: 95 });
addStud(2, "Chirag", { math: 95, english: 82, computer: 90 });
addStud(2, "Rahul", { math: 90, english: 85, computer: 92 });

console.log("Students:", students);

removeStud(1);

console.log("Students after removel:", students)