var AbstractEmployee = function(data) {
  if (this.constructor === AbstractEmployee) {
    throw new Error('Can\'t instantiate abstract class!');
  }
  if(data && typeof data.id === 'number' && typeof data.name === 'string' && typeof data.salary === 'number') {
    this.id = 'id' + data.id;
    this.name = data.name;
    this.salary = data.salary;
  } else {
    throw new Error('bla bla');
  }
};
  
AbstractEmployee.prototype.getSalary = function() {
  throw new Error('Abstract method!');
}

module.exports.AbstractEmployee = AbstractEmployee;