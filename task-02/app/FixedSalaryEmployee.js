var AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;

var FixedSalaryEmployee = function() {
  Animal.apply(this, arguments);
};

FixedSalaryEmployee.prototype = Object.create(AbstractEmployee.prototype);
FixedSalaryEmployee.prototype.constructor = FixedSalaryEmployee;

FixedSalaryEmployee.prototype.getSalary = function() {
  return this.salary;
}

module.exports.PerHourSalaryEmployee = FixedSalaryEmployee;