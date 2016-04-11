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
}

Game();
