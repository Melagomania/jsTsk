import {FixedSalaryEmployee} from './FixedSalaryEmployee';
import {PerHourSalaryEmployee} from './PerHourSalaryEmployee';

export class EmployeeCollection {
  constructor(data) {
    var info = getInfo();
    for(var i = 0; i < info.length; i++) {
      if(info[i].type === 'per-hour') {
        this[i] = new PerHourSalaryEmployee(info[i]);
      } else {
        this[i] = new FixedSalaryEmployee(info[i]);
      }
    }
    this.length = info.length; 
    sortCollection(this);

    function getInfo() {
      var result = data.slice();
      for(let i = 0; i < result.length; i++) {
        result[i].id = i;
      }
      return result;
    }

    // спросить у ребят, что за хуйня тут происходит
    function sortCollection(collection) {
      var changed = true;
      while(changed) {
        changed = false;
        for(let i = 0; i < collection.length - 1; i++) {
          if(collection[i].getSalary() > collection[i + 1].getSalary()) {
            swap(i);
            changed = true;                
          } else if (collection[i].getSalary() === collection[i + 1].getSalary() && collection[i].name > collection[i + 1].name) {
            swap(i);
            changed = true;            
          }
        }
      } 
      function swap(index) {
        var temp = collection[index];
        collection[index] = collection[index + 1];
        collection[index + 1] = temp;
      }
    }
  }

  static getCollectionData(collection) {
    var result = [];
    for(let i = 0; i < collection.length; i++) {
      result.push({
        id: collection[i].id,
        monthlySalary: collection[i].getSalary(),
        name: collection[i].name
      })
    }
    return result;
  } 

  static getFiveNames(collection) {
    if(collection.length < 5) {
      throw new Error('Not enough elements');
    }
    var result = [];
    for(let i = 0; i < 5; i++) {
      result.push(collection[i].name);
    } 
    return result; 
  }

  static getThreeIds(collection) {
    if(collection.length < 3) {
      throw new Error('Not enough elements');
    }
    var result = [];
    for(let i = collection.length - 1; i > collection.length - 4; i--) {
      result.push(collection[i].id);
    } 
    return result; 
  }

  static getCollectionAverage(collection) {
    var result = 0;
    for(let i = 0; i < collection.length; i++) {
      result += collection[i].getSalary();
    } 
    result /= collection.length;
    return parseFloat(result.toFixed(2)); 
  }
}