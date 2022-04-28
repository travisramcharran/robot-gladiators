var playerName =  window.prompt("What is your robot's name?");
// note the lack of quotation marks around playerName

var playerHealth = 100;

var playerAttack = 10;

var playerMoney = 10;

// I can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
//the enemyName variable is a String data type

var enemyHealth = 50; 
// the enemyHealth variable is a Number data type

var enemyAttack = 12;
// this is also a number data type

console.log(enemyName, enemyAttack, enemyHealth);

/* create function. This is a function expression: when we a create a fxn by assigning it a variable. */
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or SKIP to choose.");
    // to read back what the user input, use console.log, as shown below
    console.log(promptFight);

    //if player choses to fight, then fight
 if (promptFight === "fight" || promptFight === "FIGHT") 
    {

        //remove enemys health by subtracting the amount set in the playerAttack variable
     enemyHealth = enemyHealth - playerAttack;

     // Log a resulting message to the console so we know that it worked.
     console.log(
         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
     );
    
     //check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " had died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
     // Subtract the value of 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
     playerHealth = playerHealth - enemyAttack

     // Log a resulting message to the console so we know that it worked.
     console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
     );
    
     // check players health
     if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
     }
     else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
     }
    
     //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        console.log(playerMoney);
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } 
     // if player did not choose a correct reply
     else {
        window.alert("You need to choose a valid option. Try Again!");
     }
    
    
    

     

    

    
    
};
// this executes the function
fight();
