// var sample = "Hello Codeup";
// var lengthOfString = sample.length;
//
// console.log(sample.toLowerCase())


// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaidDays = 3;
var brotherBearDays = 5;
var herculeDays = 1;
var pricePerMovie = 3;

var littleMermaidTotal = littleMermaidDays * pricePerMovie;
var brotherBearTotal = brotherBearDays * pricePerMovie;
var herculesTotal = herculeDays * pricePerMovie;

var grandTotal = littleMermaidTotal + brotherBearTotal + herculesTotal;

console.log("The total for movies is " + grandTotal);


//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;

var googleTotal = googleRate * googleHours;
var amazonTotal = amazonRate * amazonHours;
var facebookTotal = facebookRate * facebookHours;

var payment = googleTotal + amazonTotal + facebookTotal;

console.log("My payment is " + payment);


// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classNotFull = true;
var noConflict = true;

var enrollment = classNotFull == true && noConflict == true;

console.log("Student can be enrolled: " + enrollment);


//     A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var items2 = true;
var notExpired = true;
var premium = true;

var offerApplied = (items2 && notExpired) || premium

console.log("Offer can be applied: " + offerApplied);


// Use the following code to follow the instructions below:
var username = 'codeup ';
var password = 'notastrongpassword';

// Create a variable that holds a boolean value for each of the following conditions:
//
// the password must be at least 5 characters
var passwordLength = password.length >= 5;
console.log("The passwort is at least 5 characters: " + passwordLength);

// the password must not include the username
var conflict = password.indexOf('codeup') == -1;
console.log("The password does not include the username: " + conflict);

// the username must be no more than 20 characters
var usernameLength = username.length <= 20;
console.log("The username isn't longer than 20 characters: " + usernameLength);

// neither the username or password can start or end with whitespace
var whitespace = (username.indexOf(" ") !== 0) && (username.indexOf(" ") !== (username.length - 1)) && (password.indexOf(" ") !== 0) && (password.indexOf(" ") !== (password.length - 1));

console.log("The username and password don't start or end with whitespace " + whitespace);
