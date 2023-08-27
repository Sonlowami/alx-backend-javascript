const express = require('express');
const countStudents = require('./3-read_file_async.js');

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    let msg = 'This is the list of our students\n';
    try {
      msg += await countStudents(process.argv[2]);
      res.send(msg);   
    } catch (err) {
        res.send(err.message);
    }
});

app.listen(1245);

module.exports = app;
