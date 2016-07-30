//Work In Progress! Submit bugs to https://www.github.com/bowser0000/keepyourcoins/issues/

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
var hp = 50;
var damage = 3;
var fire = 0;
var boss1hp = 20;
var boss1attack = 2;
// Iron Sword : 5
// Diamond Sword : 7
// Emerald Sword : 10
// Mr. Madden Sword : 15 (+5 per turn)
var battleswoodensword = 0;
var battlesironsword = 0;
var battlesdiamondsword = 0;
var battlesemeraldsword = 0;
var battlesharshansword = 0;
var battlesmrmaddensword = 0;
var totalbattles = 0;

function game6() {
	alert('You walk towards the hotel, walking across a bridge, which seems to go across a river');
	alert('You enter your card, but it seems to not be working.');
	alert('You walk down the office to the front.');
	alert('You ask \"My card isn\'t working. Could you give me another?\"');
	alert('\"Sure thing! Here\'s your new card. But be wary. There is a rumor that a monster lives in this hotel. If you see him, he will instantly fight you.\" he replies.');
	alert('You walk to your room. \"10/10 would rent again.\" you say.');
	alert('You sleep for the night and wake up the next day.');
	alert('You walk downstairs..');
	alert('A giant monster appears. You are sucked into battle.');
	alert('You have ' + hp + ' HP and do ' + damage + ' damage.');
	function boss1() {
	var boss1 = prompt('Do you [run] or [attack]?');
	if (boss1 == 'run') {
		alert('You can\'t run from a boss battle!');
		boss1();
	} else if (boss1 == 'attack') {
		alert('You did ' + damage + ' damage!');
		boss1hp = boss1hp - damage;
		if (boss1hp <= 0) {
			alert('You beat Dialva!');
			alert('You got 20 coins!');
			coins = coins + 20;
			if (weapon == 'Wooden Sword') {
				battleswoodensword = battleswoodensword + 1;
				alert('This is the end! You ended with ' + coins + ' coin(s)!');
				throw new Error('Work In Progress!');
			} else if (weapon == 'Harshan Sword') {
				battlesharshansword = battlesharshansword + 1;
				alert('This is the end! You ended with ' + coins + ' coin(s)!');
				throw new Error('Work In Progress!');
			} else if (weapon == 'Mr. Madden Sword') {
				battlesmrmaddensword = battlesmrmaddensword + 1;
				alert('This is the end! You ended with ' + coins + ' coin(s)!');
				throw new Error('Work In Progress!');
			} else {
				throw new Error('You have no weapon');
			}
		} else {
			alert('Dialva has ' + boss1hp + ' HP left!');
			alert('Dialva did ' + boss1attack + ' damage to you!');
			hp = hp - boss1attack;
			alert('You have ' + hp + ' HP left!');
			boss1();
		}
	} else {
		alert('Please use [run] or [attack]!');
		boss1();
	}
}
	boss1();
}

function game5() {
	alert('A man comes up to you, asking what your name is.');
	var nick = prompt('What do you say?');
	alert('The man says \"Hello ' + nick + '! Welcome to our town, \'Mount Kajamakam!\' Hope you enjoy your stay!\" He gives you a pass to a hotel just down the street.');
	alert('You walk towards the hotel.');
	alert('You see a someless guy, asking for money. His sign says \'Need Money for Kids.\'');
	var donate = prompt('Do you [give money] or [do not?]').toLowerCase();
	if (donate == 'give money') {
		alert('You give the man 2 coins.');
		alert('He replies with \'Hey bro. We\'re actually recording a video, bro. Social experiment, bro! Here\'s 10 coins because you donated, bro!');
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
			alert('You find yourself walking into a forest. The trees and leaves are getting thicker and thicker. When you look back down, you realize you\'ve gotten lost.');
			alert('You ended with ' + coins + ' coin(s)!');
			throw new Error('You died!');
		} else {
			throw new Error('Use [left] or [right]!');
		}
	} else if (route3 == 'left') {
		if (route3a >= 0.5) {
			alert('You take the left. You see a small pile of leaves. You decide to have some fun and jump right in the middle. You fall into a small pit and die.');
			alert('You ended with ' + coins + ' coin(s)!');
			throw new Error('You died!');
		} else {
			game5();
		}
	} else if (route3 == 'right') {
		if (route3a <= 0.5) {
			alert('You take the right. You see a small pile of leaves. You decide to have some fun and jump right in the middle. You fall into a small put and die.');
			alert('You ended with ' + coins + ' coin(s)!');
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
  alert('Coins: ' + coins + '\nWeapon: ' + weapon + '\nDamage: ' + damage + '\nBattles Fought With: ' + battleswoodensword + '\nBattles Fought: ' + totalbattles);
	alert('The shop keeper tells you \'Hey, go kill that guy over there with that sword, and I\'ll give you a few coins ;)\'');
	var kill = prompt('Do you [kill him] or [do not]?').toLowerCase();
	if (kill == 'kill him') {
		if (kill2 >= 0.5) {
			alert('The guy manages to fight back, and kills you.');
			alert('You ended with ' + coins + ' coin(s)!');
			throw new Error ('You died!');
		} else {
			alert('You kill him, and the shop keeper gives you ' + killwin + ' coins!');
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

function game1() {
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

function game() {
	alert('The goal of the game is to end with the most coins! The maximum amount you can get is 64.');
	var name = prompt('What is your name?');
		if (name == 'Harshan') {
			weapon = 'Harshan Sword';
			damage = 9999;
			game1();
		} else if (name == 'Mr. Madden') {
			weapon = 'Mr. Madden Sword';
			damage = 15;
			fire = 5;
			game1();
		} else {
  		game1();
		}
}

game();

//Looking at the source code, eh? ( ͡° ͜ʖ ͡°)
