//Write a program to input a number and chedk whether x is a prime number or not
x = 7;
factors = 0;
for (i = 1; i <= x; i = i + 1) {
  if (x % i == 0) {
    factors = factors + 1;
  }
}
if (factors == 2) {
  console.log("Your Number is prime");
} else {
  console.log("Your number is not prime");
}
