function nicknameMap(persons) {
  const nickname = [];
  for (let nick of persons) {
    nickname.push(nick.name + "-" + nick.age);
  }
  return nickname;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const nicknames = nicknameMap(persons);

console.log(nicknames);
