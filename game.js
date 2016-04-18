//Work In Progress! https://www.github.com/bowser0000/keepyourcoins/
//ryan pls

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
var weapon = 'Wooden Sword';
var coins = var1;
var battleswoodensword = 0;
var battlesironsword = 0;
var battlesdiamondsword = 0;
var battlesemeraldsword = 0;
var battlesharshansword = 0;
var battlesmrmaddonsword = 0;
var woodenswordfire = 0;
var woodenswordfreeze = 0;
var ironswordfire = 0;
var ironswordfreeze = 0;
var diamondswordfire = 0;
var diamondswordfreeze = 0;
var emeraldswordfire = 0;
var emeraldswordfreeze = 0;
var totalbattles = 0;

function Game3() {
	alert('You have ' + coins + ' coin(s!)');
	throw new Error('Work In Progress!');
}

function Game2() {
	alert('You continue on the road.');
	alert('You find a little shop on the side');
	alert('He says \"It\'s Christmas!\" He gives you a wooden sword for free!');
	alert('You inspect your ' + weapon);
  alert('Weapon: ' + weapon + '\nDamage: 1\nBattles Fought With: ' + battleswoodensword + '\nBattles Fought: ' + totalbattles);
	alert('The shop keeper tells you \'Hey, go kill that guy over there with that sword, and I\'ll give you a few coins ;)\'');
	var kill = prompt('Do you [kill him] or [do not]?').toLowerCase();
	if (kill == 'kill him') {
		if (kill2 >= 0.5) {
			alert('The guy manages to fight back, and kills you.\nGame Over.');
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
  alert('You wake up, and find ' + var1 + ' coin(s) on your bed!');
  alert('You now have ' + coins + ' coin(s)!');
  alert('You get out of bed and take a bath.');
  alert('While taking off your pants, you find ' + var2 + ' coin(s) in pocket!');
  coins = coins + var2;
  alert('You now have ' + coins + ' coins!');
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
