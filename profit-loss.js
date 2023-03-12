var costprice = 500;
var saleprice = 600;
if (costprice == saleprice) {
  console.log(" You have not made any profit, nor loss!");
} else if (costprice > saleprice) {
  console.log("You have made a loss!");
  var loss = costprice - saleprice;
  console.log(" You have made a loss of " + loss);
} else {
  console.log("You have made a profit! Congrats!");
  var profit = saleprice - costprice;
  console.log(" You have made a profit of " + profit);
}
