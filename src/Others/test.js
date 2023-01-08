const employees = [
  { name: 'ABC', jobrole: 'Officer', salary: '$200', dob: '10-05-1990' },
  { name: 'DEF', jobrole: 'Clerk', salary: '$100', dob: '12-08-1992' },
  { name: 'GHI', jobrole: 'Manager', salary: '$300', dob: '01-01-1992' },
  { name: 'JKL', jobrole: 'Clerk', salary: '$100', dob: '12-03-1991' },
  { name: 'MNO', jobrole: 'Officer', salary: '$200', dob: '11-09-1991' },
];

console.log(
  'Ex: Using map method to create a new Array of all the Employee names'
);
const mapEmployeeNames = employees.map((employee) => {
  if (employee.jobrole === 'Clerk') {
    return { salary: employee.salary, name: employee.name };
  } else {
    return { salary: employee.salary, name: 'bad' };
  }
});

console.log(mapEmployeeNames);
