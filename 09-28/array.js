let students = ["문지영", "신현성", "임성민", "류한서"];

console.log(students.length);

students.push("강유림");
students.unshift("임다영");
students.unshift("고근국쌤");

students.splice(2, 0, "동동쌤");

// students.pop();
// students.shift();

console.log(students);
console.log(students.length);
