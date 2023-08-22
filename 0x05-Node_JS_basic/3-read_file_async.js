const fs = require('fs').promises

function findNumberOfStudents(file) {
  const rows = file.split('\n');
  const students = []
  for (let i = 1; i < rows.length; i++) {
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
    let field = about[about.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  return fields;
}

async function isFilePresent(path) {
  await fs.access(path, fs.constants.F_OK, (err) => {
    if (err) { return false; }
    return true;
  });

async function countStudents(path) {
  if (await isFilePresent(path)) {
    throw new Error('Cannot load the database');
  }
  const db = await fs.readFile(path, { encoding: 'utf-8' });
  const students = findNumberOfStudents(db);
  const fields = groupStudentsPerField(students);
  return new Promise((resolve) => {
    const log = `Number of students: ${students.length}\n`;
    Object.keys(fields).forEach((key) => {
      log += `Number of students in ${key}: ${fields[key].length}. `;
      log += `List: ${fields[key].join(', ')}`;
    });
    resolve(log);
  });
}

module.exports = countStudents
