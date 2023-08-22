const fs = require('fs')

function findNumberOfStudents(file) {
  const rows = file.split('\n');
  const students = []
  for (let i = 1; i < rows.length; i++) {
    if (rows[i] !== '') {
      students.push(rows[i]);
    }
  }
  process.stdout.write(`Number of students: ${students.length}\n`);
  return students;
}

function groupStudentsPerField(students) {
  const fields = {};
  let name; let about;
  students.forEach((student) => {
    [name, ...about] = student.split(',');
    let field = about[about.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  Object.keys(fields).forEach((key) => {
    const log = `${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`
    process.stdout.write(`Number of studens in ${log}\n`)
  });
}

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const db = fs.readFileSync(path, encoding='utf-8');
  const students = findNumberOfStudents(db);
  groupStudentsPerField(students);
}

module.exports = countStudents
