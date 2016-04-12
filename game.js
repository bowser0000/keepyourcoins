//Work In Progress!

function RandomDamage(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = RandomDamage(1, 7);
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
  throw new Error('Work In Progress!');
}

Game();
