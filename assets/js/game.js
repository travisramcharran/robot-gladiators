var playerName =  window.prompt("What is your robot's name?");
// note the lack of quotation marks around playerName

var playerHealth = 100;

var playerAttack = 10;

// I can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
//the enemyName variable is a String data type

var enemyHealth = 50; 
// the enemyHealth variable is a Number data type

var enemyAttack = 12;
// this is also a number data type

/* create function. This is a function expression: when we a create a fxn by assigning it a variable. */
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in 'enemyHealth' variable.
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Subtract the value of 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack

    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};
// this executes the function
fight();

// what is this? console.log shows developers where to debug
console.log(playerName);

console.log("this logs a string, good for leaving yourself a message");

//this will do math and log 20

console.log(10 + 10);

//what is this?

console.log("Our robot's name is " + playerName);




/* this creates a function, named "fight". This is a function declaration: when we create a fxn using the function keyword first */

function fight() {
    window.alert("The FIGHT has BEGUN!")
}
//fight();



// this will be 10, a number data type
console.log(4 + 6);

// this will be 46, a string data type
console.log("4" + 6);