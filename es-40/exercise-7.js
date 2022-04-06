class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }
  set first(value) {
    this.firstName = value;
  }
  set last(value) {
    this.lastName = value;
  }
  set yearsOld(number) {
    this.age = number;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
