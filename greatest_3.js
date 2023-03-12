var a = 2;
var b = 3;
var c = 4;
if (a == b && b == c && c == a) {
  console.log("All three numbers are the same");
} else if (a > b && a > c) {
  console.log(" A is the greatest number");
} else if (b > a && b > c) {
  console.log(" B is the greatest number");
} else if (c > a && c > b) {
  console.log(" C is the greatest number");
}
