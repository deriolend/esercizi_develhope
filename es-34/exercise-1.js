class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(`${developer.firstName} ${developer.lastName}`);
