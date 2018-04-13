var AbstractEmployee = require('./AbstractEmployee').AbstractEmployee;

class FixedSalaryEmployee extends AbstractEmployee {
  constructor(data) {
    super(data);
  }
  getSalary() {
    return this.salary;
  }
};

module.exports.FixedSalaryEmployee = FixedSalaryEmployee;