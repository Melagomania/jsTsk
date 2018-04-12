var     FixedSalaryEmployee = require('./FixedSalaryEmployee').FixedSalaryEmployee,
        PerHourSalaryEmployee = require('./PerHourSalaryEmployee').PerHourSalaryEmployee,
        AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;


var EmployeeCollection = function(data) {
  function getInfo() {
    var res = data.slice();
    for(let i = 0; i < res.length; i++) {
      res[i].id = i;
    }
    return res;
  }

  var info = getInfo();

  for(var i = 0; i < info.length; i++) {
    if(info[i].type === 'per-hour') {
      this[i] = new PerHourSalaryEmployee(info[i]);
    
    } else {
      this[i] = new FixedSalaryEmployee(info[i]);
    }
  }
}

module.exports.EmployeeCollection = EmployeeCollection;



