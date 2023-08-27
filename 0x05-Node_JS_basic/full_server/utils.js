const fs = require('fs').promises;

function findNumberOfStudents(file) {
  const rows = file.split('\n');
  const students = [];
  for (let i = 1; i < rows.length; i += 1) {
    if (rows[i] !== '') {
      students.push(rows[i]);
    }
  }
  return students;
}

function groupStudentsPerField(students) {
  const fields = {};
  let name; let about;
  students.forEach((student) => {
    [name, ...about] = student.split(',');
    const field = about[about.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  return fields;
}

export default async function readDatabase(path) {
  try {
    const db = await fs.readFile(path, { encoding: 'utf-8' });
    const students = findNumberOfStudents(db);
    const fields = groupStudentsPerField(students);
    return new Promise((resolve) => {
      resolve(fields);
    });
  } catch (err) {
    return new Promise((reject) => {
      throw new Error(err.message)
    })
  }
}
