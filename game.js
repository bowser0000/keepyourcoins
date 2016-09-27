//Work In Progress! Submit bugs to https://www.github.com/bowser0000/keepyourcoins/issues/

//Increasing maximum errors given in JSHint
/*jshint maxerr: 1000 */

//Random Damage: To be added (Maybe after first boss?)
function randomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = randomDamage(1, 7); //Starting Coins
var var2 = randomDamage(1, 3); //Coins in pants
var path1a = Math.random(); //Finding monster
var path1lose = Math.random(); //Losing money against monster
var xd123 = randomDamage(3, 7);  //Dropping coins by running
var xd12344 = randomDamage(1, 5); //Finding coins by winning
var kill2 = Math.random(); //Killing stranger
var killwin = randomDamage(10, 15); //Money gained by killing him
var route3a = Math.random();  //If dying in forest
var weapon = 'Wooden Sword'; //Current Weapon (Default Wooden Sword)
var coins = var1; //Coin Count (Default Starting COins (var1))
var hp = 50; //Player HP
var damage = 3; //Damage for weapon
var fire = 0; //Extra Damage (Mr. Madden Sword only)
var damagedone = damage + fire; //Damage dealt per turn
var boss1hp = 25; //Dialva HP
var boss1attack = 2; //Dialva attack damage
/* Weapon Damage
Wooden Sword : 3
Iron Sword : 5
Diamond Sword : 7
Emerald Sword : 10
Mr. Madden Sword : 15 (+5 per turn)
Harshan Sword : 9999
*/
var battleswoodensword = 0; //Battles done with each weapon
var battlesironsword = 0;
var battlesdiamondsword = 0;
var battlesemeraldsword = 0;
var battlesharshansword = 0;
var battlesmrmaddensword = 0;
var totalbattles = 0; //Total Battles with every weapon

function game8() {
  alert('Work In Progress!');
  throw new Error('Work in Progress!');
}

function game7() {
    alert('You finished probably the toughest battle of your life.');
    alert('A sketchy looking man approaches you.');
    alert('\"Hey man, you gotta buy this Iron Sword. I have to get the cops off- I mean, It\'s really good and does 5 damage. It\'s only 15 coins!');
    var isword = prompt('Will you buy the Iron Sword? [Yes] or [No]?').toLowerCase();
    if (isword == 'yes') {
      coins = coins - 15;
      if (weapon == 'Harshan Sword') {
        alert('You have have the Harshan Sword, you did not equip the Iron Sword');
        game8();
      } else if (weapon == 'Mr. Madden Sword') {
        alert('You have the Mr. Madden Sword, you did not equip the Iron Sword');
        game8();
      } else {
        alert('You equipped the Iron Sword.');
        damage = 5;
        weapon = 'Iron Sword';
        game8();
      }
    } else if (isword == 'no') {
      alert('You decided not to buy the Iron Sword.');
    } else {
      alert('Please use [Yes] or [No]!');
      game7();
    }
}

function game6() {
  alert('You walk towards the hotel, walking across a bridge, which seems to go across a river');
  alert('You enter your card, but it seems to not be working.');
  alert('You walk down the office to the front.');
  alert('You ask \"My card isn\'t working. Could you give me another?\"');
  alert('\"Sure thing! Here\'s your new card. But be wary. There is a rumor that a monster lives in this hotel. If you see him, he will instantly fight you.\" he replies.');
  alert('You walk to your room. \"10/10 would rent again.\" you say.');
  alert('You sleep for the night and wake up the next day.');
  alert('You walk downstairs..');
  //Boss Battle against Dialva Starts
  alert('A giant monster appears. You are sucked into battle.');
  alert('You have ' + hp + ' HP and do ' + damage + ' damage.');
  function boss1func() {
    var boss1 = prompt('Do you [run] or [attack]?');
    if (boss1 == 'run') {
      alert('You can\'t run from a boss battle!');
      boss1func();
    } else if (boss1 == 'attack') {
      alert('You did ' + damagedone + ' damage!');
      boss1hp = boss1hp - damagedone;
      if (boss1hp <= 0) {
        alert('You beat Dialva!');
        alert('You got 20 coins!');
        coins = coins + 20;
        if (weapon == 'Harshan Sword') {
          battlesharshansword = battlesharshansword + 1;
          totalbattles = totalbattles + 1;
          game7();
        } else if (weapon == 'Mr. Madden Sword') {
          battlesmrmaddensword = battlesmrmaddensword + 1;
          totalbattles = totalbattles + 1;
          game7();
        } else {
          battleswoodensword = battleswoodensword + 1;
          totalbattles = totalbattles + 1;
          game7();
        }
      } else {
        alert('Dialva has ' + boss1hp + ' HP left!');
        alert('Dialva did ' + boss1attack + ' damage to you!');
        hp = hp - boss1attack;
        alert('You have ' + hp + ' HP left!');
        boss1func();
      }
    } else {
      alert('Please use [run] or [attack]!');
      boss1func();
    }
  }
  boss1func();
}

function game5() {
  alert('A man comes up to you, asking what your name is.');
  var nick = prompt('What do you say?');
  alert('The man says \"Hello Eric!');
  alert('Was that not your name?');
  alert('What about Leric or Sheric?');
  alert('Oh! I see! Your name is ' + nick + '!');
  alert('Welcome to our town, \'Mount Kajamakam!\' Hope you enjoy your stay!\" He gives you a pass to a hotel just down the street.');
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
    alert('Please use [give money] or [do not]!');
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
      alert('Use [left] or [right]!');
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
    alert('Use [straight], [left] or [right]!');
    game4();
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
    alert('Use [dust off] or [do not]!');
  }
}

function game2() {
  alert('You continue on the road.');
  alert('You find a little shop on the side.');
  alert('He says \"It\'s Christmas!\" He gives you a ' + weapon + ' for free!');
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
    alert('Use [kill him] or [do not]!');
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
                    alert('Use [run] or [attack]!');
                  }
                } else {
                    alert('Use [left] or [right]!');
            }
}

function game() {
  //Instructions
  alert('The goal of the game is to end with the most coins! The maximum amount you can get is 64.');
  alert('The game WILL close if you type something wrong. Capitals do not matter unless it is your name/nickname. Be careful when typing.');
  var name = prompt('What is your name?');
  //Get Harshan Sword
    if (name == 'Harshan') {
      weapon = 'Harshan Sword';
      damage = 9999;
      game1();
    } else if (name == 'Mr. Madden') {
      //Get Mr. Madden Sword
      weapon = 'Mr. Madden Sword';
      damage = 15;
      fire = 5;
      game1();
    } else if (name == 'John Cena') {
      window.location = "https://www.niceme.me";
    } else {
      game1();
    }
}

game();

//Looking at the source code, eh? ( ͡° ͜ʖ ͡°)
