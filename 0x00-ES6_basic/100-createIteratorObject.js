export default function createIteratorObject(report) {
  let employees = [];
  for (const dept in report) {
    employees = employees.concat(report[dept]);
  }

  let index = 0;

  return {
    next: function() {
      return {
        value: employees[index],
        done: index++ >= employees.length
      };
    }
  };
}
