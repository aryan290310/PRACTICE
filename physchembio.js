var chemistrymark = 24;
var biomark = 24;
var physmark = 24;
var average = (chemistrymark + biomark + physmark) / 3;
//Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F
if (average >= 90) {
  console.log("Grade A");
} else if (average >= 80) {
  console.log("Grade B");
} else if (average >= 70) {
  console.log("Grade C");
} else if (average >= 60) {
  console.log("Grade D");
} else if (average >= 40) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}
