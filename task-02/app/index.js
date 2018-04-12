var     EmployeeCollection = require('./EmployeeCollection').EmployeeCollection,
        EmployeeData = require('./employees-collection');

var myEpmloyees = new EmployeeCollection(EmployeeData);
var collectionData = EmployeeCollection.getCollectionData(myEpmloyees);
var fiveNames = EmployeeCollection.getFiveNames(myEpmloyees);
var ids = EmployeeCollection.getThreeIds(myEpmloyees);
var avr = EmployeeCollection.getCollectionAverage(myEpmloyees);

console.log('Collection', myEpmloyees);
console.log(collectionData);
console.log(fiveNames);
console.log(ids);
console.log(avr);

