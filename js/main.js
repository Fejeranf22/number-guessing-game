// create the secret Numbers
var myNumber = 5;

// ask the user for the guess
var guess = Number(prompt(" Im thinking of a number between 1 and 9. Can you Guess what it is???"));
// check if it is the correct guess
if (guess === myNumber) {
  alert("Great job you '2' have guessed correctly!!!!!!");
}
// check if the myNumber is too low
else if (guess < myNumber) {
  alert("Oops!! You're too low. Refresh page to guess again!");
}
// check if myNumber is too high
else {
  alert("Nope too high. Refresh page to guess again!");
}
