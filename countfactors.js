//Write a PROGRAM TO INPUT A NUMBER and COUNT THE NUMBER OF FACTORS
x = 12;
factors = 0;
for (i = 0; i <= x; i = i + 1) {
  if (x % i == 0) {
    factors = factors + 1;
  }
}
console.log(factors);
