const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  job: "Web Developer",
  fullName() {
    return person.firstName + " " + person.lastName;
  },
  info() {
    return this.fullName() + "," + " " + person.age + " - " + person.job;
  },
};

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer
