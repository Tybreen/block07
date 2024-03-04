/* 
# Pseudocode:

Write out the message using console.log()

Have three variables equal the corresponding combinations

Output the combination using console.log()


* Stretch goals:

Prompt the viewer for the cast of the password.

Using an if statement to see if they're right and if they are, display that they are correct.

And if they are wrong, display that they are wrong.

*/

// Here to let the viewer know to look in the console.
alert("Look at the console!");

// Displaying the important information using console.log() which is written in the console.
console.log("You have received this message because you have been chosen to open an important vault. Here is the secret combination:");

// Using three variables that cannot be changed to create our three combinations.
const digit_1 = 3 + 7; // 10
const digit_2 = 4 * 10; // 40
const digit_3 = 40 - 1; // 39

// Displaying our final combination.
console.log(`${digit_1} - ${digit_2} - ${digit_3}`);

//# ----- Stretch goals ----------------------------------------------------

const guess = prompt("Please guess the code.\n'digit' - 'digit' - 'digit'");

if(guess == `${digit_1} - ${digit_2} - ${digit_3}`) alert("You are correct!!!");

else alert("You are wrong.");