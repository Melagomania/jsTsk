var AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;

var PerHourSalaryEmployee = function() {
  Animal.apply(this, arguments);
};

PerHourSalaryEmployee.prototype = Object.create(AbstractEmployee.prototype);
PerHourSalaryEmployee.prototype.constructor = PerHourSalaryEmployee;

PerHourSalaryEmployee.prototype.getSalary = function() {
  return this.salary * 8 * 20.88;
}

module.exports.PerHourSalaryEmployee = PerHourSalaryEmployee;