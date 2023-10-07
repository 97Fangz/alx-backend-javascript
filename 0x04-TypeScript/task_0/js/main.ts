interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Sandra",
  lastName: "Cherono",
  age: 17,
  location: "Nakuru",
};

const student2: Student = {
  firstName: "Ann",
  lastName: "Muthoni",
  age: 21,
  location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = 'First Name';
headerCell2.textContent = 'Location';

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);

