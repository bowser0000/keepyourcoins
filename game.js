//Work In Progress! https://www.github.com/bowser0000/keepyourocoins/

function RandomDamage(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = RandomDamage(1, 7);
var path1a = Math.random();
var path1lose = Math.random();
var xd123 = RandomDamage(3, 7);
var xd12344 = RandomDamage(1, 5);
var coins = 0 + var1;

function Game2() {
	throw new Error('Work In Progress!');

}

function Game() {
  alert('You wake up, and find ' + var1 + ' coin(s) on your bed!');
  alert('You now have ' + coins + ' coin(s)!');
  alert('You get out of bed and take a bath.');
  var var2 = RandomDamage(1, 3);
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
  				Game2();
  			}
  		}
  	} else {
			Game2();
  	}
  } else if (path1 == 'right') {
  	if(path1a >= 0.25) {
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
  				Game2();
  			}
  		}

  	} else {
  		throw new Error('Use [run] or [attack]!');
  	}
  	} else {
			Game2();
  	}
  throw new Error('Work In Progress!');
}

Game();
