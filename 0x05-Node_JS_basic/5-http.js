const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const { url } = req;
  let msg = 'This is the list of our students\n';
  switch (url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    case '/students':
      try {
        msg += await countStudents(process.argv[2]);
        res.end(msg);
        break;
      } catch {
        res.end(err.message);
        break;
      }
    default:
      break;
  }
});

app.listen(1245);

module.exports = app;
