var     EmployeeCollection = require('./EmployeeCollection').EmployeeCollection,
        EmployeeData = require('./employees-collection');

var myCollection = new EmployeeCollection(EmployeeData);
console.log('Collection', myCollection);
