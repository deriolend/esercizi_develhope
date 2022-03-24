function getKeys(obj) {
  let listkey = "";
  for (let x in person) {
    listkey += person[x] + " ";
  }
  return listkey;
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

const keys = getKeys(person);
console.log(keys);
