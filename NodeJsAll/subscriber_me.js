// Subscriber code

var r = require("./pubslisher_onlinestore");

var results = r.onlineStore();   // onlineStore is function in another js

console.log("Lets start");

/*results.on("scratchcard",function()
{
  console.log("he hey begins");
});*/

results.on("cash",function(num)
{
  console.log("Cash is  :"+num);
});

results.on("food",function(num)
{
  console.log("Food Voucher is :"+num);
  console.log("Ends here !!");
});