'use strict';
// Enemies our player must avoid

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random() * (500 - 5) + 5;
    this.y = 62;
    this.width = 90;
    this.height = 50;
    this.speed = setSpeed();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.----

    // update enemies by various means
    this.x += this.speed * dt;
    this.checkEnemyLocation();
};

// check and reset any enemies that have reached the end of the screen

Enemy.prototype.checkEnemyLocation = function() {
    if (this.x >= 505) {
        this.x = -80;
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

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    this.width = 70;
    this.height = 60;
    this.winner = false;
};

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

Player.prototype.checkBoundary = function() {
    if (this.x > 402) {
        this.x = 402;
    }
    if (this.x < -2) {
        this.x = -2;
    }
    if (this.y > 400) {
        this.y = 400;
    }
    if (this.y <= -15) {
        this.winner = true;
        this.y = -15;
    }
};

Player.prototype.checkWinner = function() {
    if (this.winner) {
        alert("You won!");
        this.reset();
    }
};

// resets the player to the bottom of the screen

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
    this.winner = false;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keypress) {
    switch (keypress) {
        case 'down':
            this.y += 83;
            break;
        case 'up':
            this.y -= 83;
            break;
        case 'left':
            this.x -= 101;
            break;
        case 'right':
            this.x += 101;
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

var player = new Player();

var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

enemy2.y += 83;
enemy3.y += 166;

var allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);

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
