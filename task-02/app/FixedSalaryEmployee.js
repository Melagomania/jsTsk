var AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;

var FixedSalaryEmployee = function() {
  AbstractEmployee.call(this, arguments[0]);
};

FixedSalaryEmployee.prototype = Object.create(AbstractEmployee.prototype);
FixedSalaryEmployee.prototype.constructor = FixedSalaryEmployee;

FixedSalaryEmployee.prototype.getSalary = function() {
  return this.salary;
}

module.exports.FixedSalaryEmployee = FixedSalaryEmployee;