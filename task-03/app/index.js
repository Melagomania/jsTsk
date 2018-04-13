var     EmployeeCollection = require('./EmployeeCollection').EmployeeCollection,
        EmployeeData = require('./employees-collection');

        
var myEpmloyees = new EmployeeCollection(EmployeeData);
console.log('Collection:', myEpmloyees);

var collectionData = EmployeeCollection.getCollectionData(myEpmloyees);
console.log('Collection data', collectionData);

var fiveNames = EmployeeCollection.getFiveNames(myEpmloyees);
console.log('Last five names ', fiveNames);

var threeIds = EmployeeCollection.getThreeIds(myEpmloyees);
console.log('threeIds', threeIds);

var averageSalary = EmployeeCollection.getCollectionAverage(myEpmloyees);
console.log('Average salary', averageSalary);


