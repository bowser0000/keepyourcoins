//Work In Progress!

function RandomDamage(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = RandomDamage(1, 7);
var path1a = Math.random();

var coins = 0;
function Game() {
  alert('You wake up, and find ' + var1 + ' coin(s) on your bed!');
  var coins = 0 + var1;
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
  var path1 = prompt('Do you take the [left] path or the [right] path?').lower();
  if (path1 == 'left') {
  	if(path1a => 0.25) {
  		alert('While walking, you find a monster.');
  		var path1m = prompt('Do you [run] or [attack]?').lower();
  		if (path1m == 'run') {
  			
  		} else if (path1m == 'attack') {
  			
  		} else {
  			throw new Error('Use [run] or [attack]!');
  		}
  	} else {
  		
  	}
  } else if (path1 == 'right') {
  	if(path1a => 0.25) {
  		alert('While walking, you find a monster.');
  		var path1ma = prompt('Do you [run] or [attack]?').lower();
  		if (path1ma == 'run') {
  			alert('You run away, but you drop ' + RandomDamage(3, 7) + ' coins on the way.');
  		} else if (path1ma == 'attack') {
  			
  		} else {
  			throw new Error('Use [run] or [attack]!');
  		}
  	} else {
  		
  	}
  } else {
  	throw new Error('Please use [left] or [right]!');
  }
  throw new Error('Work In Progress!');
}

Game();
