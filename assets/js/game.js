//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
/*------------------------------ Global Variables ------------------------------------------------------------------*/
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);
var pickedEnemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


/*--------Fight function (before the "for" loop because it will be called inside the loop) ------------------------------------------------------------------*/
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      //  break; breakpoint no longer needed
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      //  break; breakpoint no longer needed
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while loop
}; // end of fight function
/*------------------------------ Entering the "for" loop into the game ------------------------------------------------------------------*/
/*------------------------------ fight each enemy-robot by looping over them and fighting them one at a time ----------------------------*/
//function to start the game
var startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < pickedEnemyName.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }

    // Adding message stating player has lost
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    console.log(pickedEnemyName[i]);

    enemyHealth = 50;
    fight(pickedEnemyName[i]);

    fight(pickedEnemyName);
}

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame()
};

/*---------------------------------------------------------------------------------------------------------------------------------------*/

// function to end the entire game   !!!! WHERE do I place this block of code?
var endGame = function () {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// start the game when the page loads
startGame();

/*------------------adding mwindow alert to see how you did during the game------------------------------------------------------*/
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}

var shop = function() {
  console.log("entered the shop");
};


//STUCK - while trying to add the store feature I started getting error messages.




// i'm in feature/shop branch
// complete work until now






/* notes and questions:
1. Why it seems like my initial variables at the top of the page isn't affecting
the game at all, instead, the variables at variable "startGame" (which i assume would apply 
  only when restarting the game after it has ended) are?
*/


