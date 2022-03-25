function sumUntil(maxValue) {
  let sum = 1;
  for (let i = 1; i <= maxValue; i++) {
    sum += i++;
    numbers.push("+"+i);
  }
  return numbers + "=" + sum;
}

console.log(sumUntil(5));