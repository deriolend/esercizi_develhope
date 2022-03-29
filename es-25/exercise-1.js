const person = {
  firstName: "",
  lastName: "",
  set first(value) {
    this.firstName = value;
  },
  set last(value) {
    this.lastName = value;
  },
  fullName() {
    return this.first + " " + this.last;
  },
};

const john = { ...person };
john.first = "John";
john.last = "Doe";
john.fullName = person.fullName;

const simon = { ...person };
simon.first = "Simon";
simon.last = "Collins";
simon.fullName = person.fullName;

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
