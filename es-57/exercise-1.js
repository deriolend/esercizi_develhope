const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

function fetchPersonById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(persons.find((person) => person.id === id)), 2000);
  });
}

console.log(fetchPersonById(1).then((result) => console.log(result)));
console.log(fetchPersonById(2).then((result) => console.log(result)));
console.log(fetchPersonById(3).then((result) => console.log(result)));
