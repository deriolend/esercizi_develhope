function sum(...total) {
  let sum = 0;

  for (let x of total) sum += x;

  return sum;
}

console.log(sum(1, 2, 3, 4, 5));
