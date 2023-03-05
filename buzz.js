// a buzz number is a number which is either divisible by 7 or the last digit is 7
var d = 14;
if (d % 7 == 0 || d % 10 == 7) {
  console.log("buzz");
} else {
  console.log("not a buzz number");
}
