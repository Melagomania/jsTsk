var     FixedSalaryEmployee = require('./FixedSalaryEmployee').FixedSalaryEmployee,
        PerHourSalaryEmployee = require('./PerHourSalaryEmployee').PerHourSalaryEmployee,
        AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;


var EmployeeCollection = function(data) {
  var info = getInfo();
  for(var i = 0; i < info.length; i++) {
    if(info[i].type === 'per-hour') {
      this[i] = new PerHourSalaryEmployee(info[i]);
    } else {
      this[i] = new FixedSalaryEmployee(info[i]);
    }
  }
  this.length = info.length; 
  sortCollection(this);

  function getInfo() {
    var result = data.slice();
    for(let i = 0; i < result.length; i++) {
      result[i].id = i;
    }
    return result;
  }

  // спросить у ребят, что за хуйня тут происходит
  function sortCollection(collection) {
    var changed = true;
    while(changed) {
      changed = false;
      for(let i = 0; i < collection.length - 1; i++) {
        if(collection[i].getSalary() > collection[i + 1].getSalary()) {
          swap(i);
          changed = true;                
        } else if (collection[i].getSalary() === collection[i + 1].getSalary() && collection[i].name > collection[i + 1].name) {
          swap(i);
          changed = true;            
        }
      }
    } 
    function swap(index) {
      var temp = collection[index];
      collection[index] = collection[index + 1];
      collection[index + 1] = temp;
    }
  }
}


module.exports.EmployeeCollection = EmployeeCollection;



