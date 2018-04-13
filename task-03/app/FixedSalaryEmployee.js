import {AbstractEmployee} from './AbstractEmployee';

export class FixedSalaryEmployee extends AbstractEmployee {
  constructor(data) {
    super(data);
  }
  getSalary() {
    return this.salary;
  }
};