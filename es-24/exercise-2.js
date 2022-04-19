const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (let values of Object.values(person)) {
    console.log(values);
}
