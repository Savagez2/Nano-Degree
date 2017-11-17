'use strict';
var Hardness_Level;
var userInput = prompt("Please select your hardness level\n1: Easy\n2: Medium\n3: Hard", "1");
if (userInput === "1" || userInput === "2" || userInput === "3") {
    Hardness_Level = parseInt(userInput);
}
else {
    alert("You didn't have a valid input. Hardess level set to Easy");
    Hardness_Level = 1;
  }
var score = 0;

//Map dimention variables
var rowHeight = 83;
var columnWidth = 101;
var mapWidth = 505;

var playerStartX = columnWidth * 2;
var playerStartY = rowHeight * 5;

// Enemies our player must avoid
var Enemy = function(row) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random() * mapWidth;
    this.y = row * rowHeight + -25;
    this.width = 80;
    this.height = 40;
    this.speed = setSpeed();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    this.checkEnemyLocation();
};

// check and reset any enemies that have reached the end of the map
Enemy.prototype.checkEnemyLocation = function() {
    if (this.x >= mapWidth) {
        this.x =-columnWidth;
        this.speed = setSpeed();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.reset();
    this.sprite = 'images/char-boy.png';
    this.x = playerStartX;
    this.y = playerStartY;
    this.width = 75;
    this.height = 65;
    this.win = false;
};

//This function will run through and verify if the player
//has collided, won or within the boundry
Player.prototype.update = function() {
    this.checkWinner();
    this.checkCollision();
    this.checkBoundary();
};

// check if any enemies collide with the player and reset those that do
Player.prototype.checkCollision = function() {
    var len = allEnemies.length;
    for (var i = 0; i < len; i++) {
        if (this.x < allEnemies[i].x + allEnemies[i].width  && this.x + this.width  > allEnemies[i].x &&
            this.y < allEnemies[i].y + allEnemies[i].height && this.y + this.height > allEnemies[i].y) {
            this.reset();
        }
    }
};

//Verifies the player remains within the map boundry
Player.prototype.checkBoundary = function() {
    if (this.x > 404) {
        this.x = 404;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y > 404) {
        this.y = 404;
    }
    if (this.y <= 0) {
        this.win = true;
        this.y = 0;
    }
};

Player.prototype.checkWinner = function() {
    if (this.win) {
        score++;
          if(score == 10) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        this.reset();
    }
};

// resets the player to the bottom of the screen

Player.prototype.reset = function() {
    this.x = playerStartX;
    this.y = playerStartY;
    this.win = false;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keypress) {
    switch (keypress) {
        case 'down':
            this.y += rowHeight;
            break;
        case 'up':
            this.y -= rowHeight;
            break;
        case 'left':
            this.x -= columnWidth;
            break;
        case 'right':
            this.x += columnWidth;
            break;
        default:
            break;
    }
};

// function to randomly generate an objects speed value
var setSpeed = function() {
   return (Math.random() * (600 - 50) + 50);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player();

// Populate the enemies.
for (var row = 1; row < 4; row++) {
  //Additional loops will generate more enemies based on the
  //Hardness level 1=easy, 2=medium, 3=hard
  for (var x = 1; x < Hardness_Level + 1; x++)
    allEnemies.push(new Enemy(row));
}

function drawScore() {
    ctx.clearRect(0, 0, 200, 25);
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Safe Passages: " + score, 8, 20);
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
