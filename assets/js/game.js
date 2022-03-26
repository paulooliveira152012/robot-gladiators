//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
/*------------------------------ Global Variables ------------------------------------------------------------------*/


  // function to generate a random numeric value
  // this is a global function that can be aclled locally and adjusted with local paramters.
  var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

var shop = function() {

  window.alert('you have $ ' + playerInfo.money + " to spend!");
  console.log("available money: $" + playerInfo.money);

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  // use switch to carry out action
switch (shopOptionPrompt) {
  case "refill":
  case "REFILL": //new case
    playerInfo.refillHealth();
    break;
  case "upgrade":
  case "UPGRADE":
    playerInfo.upgradeAttack();
    break;
  
  case "leave":
  case "LEAVE":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}
};


/*---------------fightOrSkip Function right before fight function---------------------------*/
var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // Validate prompt answer
if (promptFight === "" || promptFight === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  //use return to call it again and stop the rest of this function from runing
  return fightOrSkip();
}

  // Convert promptFight to all lowercase so we can check with less options
  promptFight = promptFight.toLocaleLowerCase()

  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping, but not leting them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      // stop while() loop using break; and enter next fight
      
      // return true if player wants to leave
      return true;
      }
    }
    return false;
  };
/* fightOrSkip checked ___________________________________________________________________________________________ */

/*--------Fight function (before the "for" loop because it will be called inside the loop) ------------------------------------------------------------------*/
var fight = function(enemy) {
  
// repeat and execute as long as the enemy-robot is alive 
  while (playerInfo.health > 0 && enemy.health > 0) {
     // ask player if they'd like to fight or skip using fightOrSkip function
  if (fightOrSkip()) {
    // if true, leave fight by breaking loop
    break
  }
/* Fight function up to here checked ___________________________________________________________________________________________ */

  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // if player picks "skip" confirm and then stop the loop
 // generate random damage value based on player's attack power
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
       break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

   // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, enemy.health - damage);
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() loop if player is dead
      //  break; breakpoint no longer needed
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  } // end of while loop
}; // end of fight function
/*------------------------------ Entering the "for" loop into the game ------------------------------------------------------------------*/
/*------------------------------ fight each enemy-robot by looping over them and fighting them one at a time ----------------------------*/

//---------------------------Getting valid player name---------------------------
// function to set name
var getPlayerName = function() {
  var name = "";

// ***************************************
while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
}
// ***************************************

  console.log("Your robot's name is " + name);
  return name;
};

//---------------------------function to start the game---------------------------


/* GAME INFORMATION / VARIABLES */
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};
// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

var startGame = function () { //3rd (loops for each player)
  // reset player stats
 playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    }

    // Adding message stating player has lost
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    var pickedEnemyObj = enemyInfo[i];

    //making enemyHealth a rendom number up to 59 by entering (Math.random()*21+40)
    // avoiding decimal numbers by using Math.floor() --> Math.floor()
    // the random number will vary from 0 to 20 --> math.random()21 
    // Making the random number at least 40 by adding the +40
    pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);

    // if we're not at the last enemy in the array
    // if player is still alive and we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
    }
}

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame()
};

/*---------------------------------------------------------------------------------------------------------------------------------------*/

// function to end the entire game   !!!! WHERE do I place this block of code?
var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
      playerInfo.money +
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
startGame(); //2nd




/*------------------adding mwindow alert to see how you did during the game------------------------------------------------------*/



// i'm in feature/random branch
// complete work until now


/* notes and questions:
1. Why it seems like my initial variables at the top of the page isn't affecting
the game at all, instead, the variables at variable "startGame" (which i assume would apply 
  only when restarting the game after it has ended) are?

2. Why am I still being attacked by the the enemy even after he has been defeated?

3. On "check enemy's health" instead of making the attack value = null after oponent has died
I want to prevent the attack from happening at all

*/





/*
this block of code was being repeated! this one was right below the original one


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

*/