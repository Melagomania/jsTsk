import {AbstractEmployee} from './AbstractEmployee'

export class PerHourSalaryEmployee extends AbstractEmployee {
  constructor(data) {
    super(data);
  }
  getSalary() {
    return parseFloat((this.salary * 8 * 20.88).toFixed(2));
  }
};