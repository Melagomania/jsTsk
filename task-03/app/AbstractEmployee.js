export class AbstractEmployee  {
  constructor(data) {
    if(data && typeof data.id === 'number' && typeof data.name === 'string' && typeof data.salary === 'number') {
      this.id = 'id' + data.id;
      this.name = data.name;
      this.salary = data.salary;
    } else {
      throw new Error('bla bla');
    }
  }
  getSalary() {
    throw new Error('Abstract method!');
  }
};