interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: 'Eric',
  lastName: 'Loi',
  age: '52',
  location: 'Jakarta'
}

const student2: Student = {
  firstName: 'Emily',
  lastName: 'Rowe',
  age: '20',
  location: 'UK'
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
table.append(document.createElement('th').innerHTML('Student'),
  document.createElement('th').innerHTML('Location'));

for item of studentList:
  table.append(document.createElement('tr').innerHTML(
    item.firstName, item.lastName));

document.body.append(table);
