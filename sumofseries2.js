// 1 - 1/2 + 3 - 1/4 + 5......
sum = 1;
for (i = 1; i <= 20; i = i + 1) {
  if (i % 2 == 0) {
    sum = sum - (1 / i);
  } else {
    sum = sum + i;
  }
}
console.log(sum)
