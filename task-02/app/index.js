var     EmployeeCollection = require('./EmployeeCollection').EmployeeCollection,
        EmployeeData = require('./employees-collection');

// console.log(employeeData);
var myCollection = new EmployeeCollection(EmployeeData);
console.log(myCollection);

console.log(myCollection[3].getSalary());

