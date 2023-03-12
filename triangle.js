var a = 4;
var b = 4;
var c = 4;
if (a == b && a == c) {
  console.log("Your triangle is equilateral!");
} else if (a == b || a == c || c == b) {
  console.log("Your triangle is iscosoles");
} else if (a != b && a != c && b != c) {
  console.log(" Your triangle is scalene");
}
