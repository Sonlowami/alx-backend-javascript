const { ShouldThrow, expect } = require('chai');
const sinon = require('sinon');

const countStudents = require('./2-read_file.js');

describe('countStudents', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs to the console the number of students', () => {
    countStudents('./database.csv');

    expect(consoleSpy.calledWith('Number of students: 10')).to.be.true;
  });
it('logs to the console the students in first group', () => {
    countStudents('./database.csv');

    expect(consoleSpy.calledWith('Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie')).to.be.true;
  });
it('logs to the console the students in the second group', () => {
    countStudents('./database.csv');

    expect(consoleSpy.calledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')).to.be.true;
  });

});
