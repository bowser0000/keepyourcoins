//Work In Progress! Submit bugs to https://www.github.com/bowser0000/keepyourcoins/

/*jshint maxerr: 1000 */
function RandomDamage(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = RandomDamage(1, 7);
var var2 = RandomDamage(1, 3);
var path1a = Math.random();
var path1lose = Math.random();
var xd123 = RandomDamage(3, 7);
var xd12344 = RandomDamage(1, 5);
var kill2 = Math.random();
var killwin = RandomDamage(10, 15);
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

function RandomBattle() {
	alert('While adventuring, you found a monster!');
	// TODO: Random Encounter
}

function Game5() {
	alert('This is the end! You end with ' + coins + ' coin(s)!');
	throw new Error('Work in Progress!');
	// TODO: Bigger Story
}

function Game4() {
	alert('You walk towards a intersection.');
	var route3 = prompt('Do you go [straight], [left] or [right]?').toLowerCase();
	if (route3 == 'straight') {
		alert('You go straight, not worrying about the other paths.');
		alert('You get to an end. The only paths now are going left and right.');
		var route3s = prompt('Do you take the [left] or the [right]?');
		if (route3s == 'left') {
			alert('You can see the exit in your view. While getting closer, you feel a tug on your leg. 20 coins! It must be your lucky day!');
			coins = coins + 20;
			Game5();
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
			Game5();
		}
	} else if (route3 == 'right') {
		if (route3a <= 0.5) {
			alert('You take the right. You see a small pile of leaves. You decide to have some fun and jump right in the middle. You fall into a small put and die.');
			alert('You end with ' + coins + ' coin(s)!');
			throw new Error('You died!');
		} else {
			Game5();
		}
	} else {
		throw new Error('Use [straight], [left] or [right]!');
	}
}

function Game3() {
	alert('You have ' + coins + ' coin(s)!');
	alert('You continue onto the next path.');
	alert('You find a small sign with moss growing on it. You can see small words saying Route 3.');
	var dustoff = prompt('Do you [dust off] or [do not]?').toLowerCase();
	if (dustoff == 'dust off') {
		alert('You dust off the mold, finding a coin under the moss.');
		coins = coins + 1;
		alert('The sign says \"Entering: Route 3.\" You can see small dents under the words. You squint your eyes and look closer. \"Straight, left.\"');
		Game4();
	} else if (dustoff == 'do not') {
		alert('You don\'t dust off the sign, you continue on the path without glancing back.');
		Game4();
	} else {
		throw new Error('Use [dust off] or [do not]!');
	}
}

function Game2() {
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
			Game3();
		}
	} else if (kill == 'do not') {
		alert('You don\'t kill him, and the shopkeeper gives you no coins.');
		Game3();
	} else {
		throw new Error('Use [kill him] or [do not]!');
	}
}

function Game() {
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
  			Game2();
  		} else if (path1ma == 'attack') {
  			alert('You managed to fight off the monster.');
  			if (path1lose <= 0.25) {
  				alert('While fighting, you see that you lost 2 coins.');
  				coins = coins - 2;
					Game2();
  			} else {
  				alert('You find ' + xd12344 + ' coins!');
  				coins = coins + xd12344;
					alert('You have ' + coins + ' coins!');
  				Game2();
  			}
  		}
  	} else {
			Game2();
  	}
  } else if (path1 == 'right') {
  	if(path1a >= 0.25) {
		totalbattles = 1;
  		alert('While walking, you find a monster.');
  		var path1ma1 = prompt('Do you [run] or [attack]?').toLowerCase();
  		if (path1ma1 == 'run') {
  			alert('You run away, but you drop ' + xd123 + ' coins on the way.');
  			Game2();
  		} else if (path1ma1 == 'attack') {
  			alert('You managed to fight off the monster.');
  			if (path1lose <= 0.25) {
  				alert('While fighting, you see that you lost 2 coins.');
  				coins = coins - 2;
					Game2();
  			} else {
  				alert('You find ' + xd12344 + ' coins!');
  				coins = coins + xd12344;
					alert('You have ' + coins + ' coins!');
  				Game2();
  			}
  		}
  	} else {
  		throw new Error('Use [run] or [attack]!');
  	}
  } else {
	throw new Error('Use [left] or [right]!');
  }
}

Game();
