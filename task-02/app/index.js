var     EmployeeCollection = require('./EmployeeCollection').EmployeeCollection,
        EmployeeData = require('./employees-collection');
       
var     myEpmloyees = new EmployeeCollection(EmployeeData);
        collectionData = EmployeeCollection.getCollectionData(myEpmloyees),
        fiveNames = EmployeeCollection.getFiveNames(myEpmloyees),
        threeIds = EmployeeCollection.getThreeIds(myEpmloyees),
        averageSalary = EmployeeCollection.getCollectionAverage(myEpmloyees),

        namesField = document.getElementById('five-names'),
        idsField = document.getElementById('three-ids'),
        averageSalaryField = document.getElementById('collection-average'),
        collectionContent = document.getElementById('collection-content');

namesField.innerText = fiveNames;
idsField.innerText = threeIds;
averageSalaryField.innerText = averageSalary;
collectionContent.innerText = JSON.stringify(EmployeeData, null, '\t');
        


