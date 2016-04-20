//Work In Progress! Submit bugs to https://www.github.com/bowser0000/keepyourcoins/

/*jshint maxerr: 1000 */
function randomDamage(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = randomDamage(1, 7);
var var2 = randomDamage(1, 3);
var path1a = Math.random();
var path1lose = Math.random();
var xd123 = randomDamage(3, 7);
var xd12344 = randomDamage(1, 5);
var kill2 = Math.random();
var killwin = randomDamage(10, 15);
var route3a = Math.random();
var weapon = 'Wooden Sword';
var coins = var1;
var battleswoodensword = 0;
var battlesironsword = 0;
var battlesdiamondsword = 0;
var battlesemeraldsword = 0;
var battlesharshansword = 0;
var battlesmrmaddensword = 0;
var woodenswordfire = 0;
var woodenswordfreeze = 0;
var ironswordfire = 0;
var ironswordfreeze = 0;
var diamondswordfire = 0;
var diamondswordfreeze = 0;
var emeraldswordfire = 0;
var emeraldswordfreeze = 0;
var totalbattles = 0;

function randomBattle() {
	alert('While walking, you find a monster.');
	var path1ma = prompt('Do you [run] or [attack]?').toLowerCase();
	if (path1ma == 'run') {
		alert('You run away, but you drop ' + '/*Random Var1*/' + ' coins on the way.');
		// NextFunction();
	} else if (path1ma == 'attack') {
		alert('You managed to fight off the monster.');
		if (path1lose <= 0.25) {
			alert('While fighting, you see that you lost 2 coins.');
			coins = coins - 2;
			// NextFunction();
		} else {
			alert('You find ' + '/*Random Var*/' + ' coins!');
			coins = coins + 0/*Random Var*/;
			alert('You have ' + coins + ' coins!');
			// NextFunction();
		}
	}
	// TODO: Random Encounter
}

function game6() {
		alert('This is the end! You end with ' + coins + ' coin(s)!');
		throw new Error('Work In Progress!');
}

function game5() {
	alert('A man comes up to you, asking what your name is.');
	var nick = prompt('What do you call yourself?');
	alert('The man says \"Hello ' + nick + '! Welcome to our town! Mount Kajamakam! Hope you enjoy your stay!\" He gives you a pass to a hotel just down the street.');
	alert('You walk towards the hotel.');
	alert('You see a someless guy, asking for money. His sign says \'Need Money for Kids.\'');
	var donate = prompt('Do you [give money] or [do not?]').toLowerCase();
	if (donate == 'give money') {
		alert('You give the man 2 coins.')
		alert('He replies with \'Hey bro. We\'re actually recording a video. Here\'s 10 coins because you donated!');
		coins = coins + 8;
		alert('You have ' + coins + ' coin(s)!');
		game6();
	} else if (donate == 'do not') {
		alert('You don\'t give the man any money. You don\'t even glance at him, trying not to make it more awkward.');
		game6();
	} else {
		throw new Error('Use [give money] or [do not]!');
	}
}

function game4() {
	alert('You walk towards a intersection.');
	var route3 = prompt('Do you go [straight], [left] or [right]?').toLowerCase();
	if (route3 == 'straight') {
		alert('You go straight, not worrying about the other paths.');
		alert('You get to an end. The only paths now are going left and right.');
		var route3s = prompt('Do you take the [left] or the [right]?');
		if (route3s == 'left') {
			alert('You can see the exit in your view. While getting closer, you feel a tug on your leg. 20 coins! It must be your lucky day!');
			coins = coins + 20;
			game5();
		} else if (route3s == 'right') {
			alert('You find yourself walking into a forest. The trees and leaves are getting thicker and thicker. You are looking straight up at the sky. Wondering how to get back home. Not paying attention to the ground, you fall down a cliff.');
			alert('You end with ' + coins + ' coin(s)!');
			throw new Error('You died!');
		} else {
			throw new Error('Use [left] or [right]!');
		}
	} else if (route3 == 'left') {
		if (route3a >= 0.5) {
			alert('You take the left. You see a small pile of leaves. You decide to have some fun and jump right in the middle. You fall into a small pit and die.');
			alert('You end with ' + coins + ' coin(s)!');
			throw new Error('You died!');
		} else {
			game5();
		}
	} else if (route3 == 'right') {
		if (route3a <= 0.5) {
			alert('You take the right. You see a small pile of leaves. You decide to have some fun and jump right in the middle. You fall into a small put and die.');
			alert('You end with ' + coins + ' coin(s)!');
			throw new Error('You died!');
		} else {
			game5();
		}
	} else {
		throw new Error('Use [straight], [left] or [right]!');
	}
}

function game3() {
	alert('You have ' + coins + ' coin(s)!');
	alert('You continue onto the next path.');
	alert('You find a small sign with moss growing on it. You can see small words saying Route 3.');
	var dustoff = prompt('Do you [dust off] or [do not]?').toLowerCase();
	if (dustoff == 'dust off') {
		alert('You dust off the mold, finding a coin under the moss.');
		coins = coins + 1;
		alert('The sign says \"Entering: Route 3.\" You can see small dents under the words. You squint your eyes and look closer. \"Straight, left.\"');
		game4();
	} else if (dustoff == 'do not') {
		alert('You don\'t dust off the sign, you continue on the path without glancing back.');
		game4();
	} else {
		throw new Error('Use [dust off] or [do not]!');
	}
}

function game2() {
	alert('You continue on the road.');
	alert('You find a little shop on the side.');
	alert('He says \"It\'s Christmas!\" He gives you a wooden sword for free!');
	alert('You inspect your ' + weapon + '.');
  alert('Coins: ' + coins + '\nWeapon: ' + weapon + '\nDamage: 1\nBattles Fought With: ' + battleswoodensword + '\nBattles Fought: ' + totalbattles);
	alert('The shop keeper tells you \'Hey, go kill that guy over there with that sword, and I\'ll give you a few coins ;)\'');
	var kill = prompt('Do you [kill him] or [do not]?').toLowerCase();
	if (kill == 'kill him') {
		if (kill2 >= 0.5) {
			alert('The guy manages to fight back, and kills you.');
			alert('You end with ' + coins + ' coin(s)!');
			throw new Error ('You died!');
		} else {
			alert('You kill kill him, and the shop keeper gives you ' + killwin + ' coins!');
			coins = coins + killwin;
			game3();
		}
	} else if (kill == 'do not') {
		alert('You don\'t kill him, and the shopkeeper gives you no coins.');
		game3();
	} else {
		throw new Error('Use [kill him] or [do not]!');
	}
}

function game() {
	alert('The goal of the game is to end with the most coins! The maximum amount you can get is 44.');
  alert('You wake up, and find ' + var1 + ' coin(s) on your bed!');
  alert('You now have ' + coins + ' coin(s)!');
  alert('You get out of bed and take a bath.');
  alert('While taking off your pants, you find ' + var2 + ' coin(s) in pocket!');
  coins = coins + var2;
  alert('You now have ' + coins + ' coin(s)!');
  alert('You go downstairs and find your XBOX gold ran out.');
  alert('You pay 6 coins and play some Titanfall.');
  coins = coins - 6;
  alert('You now have ' + coins + ' coin(s)!');
  alert('You walk outside. There is a path to the left and one to the right.');
  var path1 = prompt('Do you take the [left] path or the [right] path?').toLowerCase();
  if (path1 == 'left') {
		if(path1a >= 0.25) {
			totalbattles = 1;
  		alert('While walking, you find a monster.');
  		var path1ma = prompt('Do you [run] or [attack]?').toLowerCase();
  		if (path1ma == 'run') {
  			alert('You run away, but you drop ' + xd123 + ' coins on the way.');
  			game2();
  		} else if (path1ma == 'attack') {
  			alert('You managed to fight off the monster.');
  			if (path1lose <= 0.25) {
  				alert('While fighting, you see that you lost 2 coins.');
  				coins = coins - 2;
					game2();
  			} else {
  				alert('You find ' + xd12344 + ' coins!');
  				coins = coins + xd12344;
					alert('You have ' + coins + ' coins!');
  				game2();
  			}
  		}
  	} else {
			game2();
  	}
  } else if (path1 == 'right') {
  	if(path1a >= 0.25) {
		totalbattles = 1;
  		alert('While walking, you find a monster.');
  		var path1ma1 = prompt('Do you [run] or [attack]?').toLowerCase();
  		if (path1ma1 == 'run') {
  			alert('You run away, but you drop ' + xd123 + ' coins on the way.');
  			game2();
  		} else if (path1ma1 == 'attack') {
  			alert('You managed to fight off the monster.');
  			if (path1lose <= 0.25) {
  				alert('While fighting, you see that you lost 2 coins.');
  				coins = coins - 2;
					game2();
  			} else {
  				alert('You find ' + xd12344 + ' coins!');
  				coins = coins + xd12344;
					alert('You have ' + coins + ' coins!');
  				game2();
  			}
  		}
  	} else {
  		throw new Error('Use [run] or [attack]!');
  	}
  } else {
	throw new Error('Use [left] or [right]!');
  }
}

game();
