interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Eric',
  lastName: 'Loi',
  age: 52,
  location: 'Jakarta'
}

const student2: Student = {
  firstName: 'Emily',
  lastName: 'Rowe',
  age: 20,
  location: 'UK'
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const th1 = document.createElement('th');
th1.innerText = 'Students';
const th2 = document.createElement('th');
th2.innerText = 'Location';
table.append(th1, th2);

for (let learner of studentsList) {
  let row = document.createElement('tr')
  row.innerHTML = `${learner.firstName}, ${learner.location}`
}

document.body.append(table);
