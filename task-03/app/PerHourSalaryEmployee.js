var AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;

var PerHourSalaryEmployee = function() {
  AbstractEmployee.apply(this, arguments);
};

PerHourSalaryEmployee.prototype = Object.create(AbstractEmployee.prototype);
PerHourSalaryEmployee.prototype.constructor = PerHourSalaryEmployee;

PerHourSalaryEmployee.prototype.getSalary = function() {
  return parseFloat((this.salary * 8 * 20.88).toFixed(2));
}

module.exports.PerHourSalaryEmployee = PerHourSalaryEmployee;