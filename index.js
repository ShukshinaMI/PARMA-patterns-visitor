import './style.css';

const Employee = function (name, salary, vacation) {
  const self = this;

  this.accept = function (visitor) {
    visitor.visit(self);
  };

  this.getName = function () {
    return name;
  };

  this.getSalary = function () {
    return salary;
  };

  this.setSalary = function (sal) {
    salary = sal;
  };

  this.getVacation = function () {
    return vacation;
  };

  this.setVacation = function (vac) {
    vacation = vac;
  };
};

const ExtraSalary = function () {
  this.visit = function (employee) {
    employee.setSalary(employee.getSalary() * 1.1);
  };
};

const ExtraVacation = function () {
  this.visit = function (employee) {
    employee.setVacation(employee.getVacation() + 2);
  };
};

function privilegeForEmployees() {
  const employees = [
    new Employee('John', 10000, 10),
    new Employee('Mary', 20000, 21),
    new Employee('Boss', 250000, 51),
  ];

  const visitorSalary = new ExtraSalary();
  const visitorVacation = new ExtraVacation();

  employees.forEach((employee) => {
    employee.accept(visitorSalary);
    employee.accept(visitorVacation);

    console.log(
      `${employee.getName()}: $${employee.getSalary()} and ${employee.getVacation()} vacation days`
    );
  });
}

privilegeForEmployees();
