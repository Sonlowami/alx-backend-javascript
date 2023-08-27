import readDatabase from '../utils.js';

export default class StudentController {

  static async getAllStudents (req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let msg = 'This is the list of our students\n';
      Object.keys(students).forEach((k) => {
        msg += `Number of students in ${k}: ${students[k].length}. `;
        msg += `List: ${students[k].sort().join(', ')}\n`;
      });
      res.statusCode = 200;
      res.send(msg);
    } catch (err) {
      res.statusCode = 500;
      res.send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      console.log(req.params)
      const major = req.params.major;
      if (major !== 'CS' && major !== 'SWE') {
        res.statusCode = 500;
        res.send('Major parameter must be CS or SWE');
      }
      else {
        const classmates = students[major];
        res.statusCode = 200;
        res.send(`List: ${classmates.sort().join(', ')}/n`)
      }
    } catch (err) {
      res.statusCode = 500;
      res.send('Cannot load the database');
    }
  }
}
