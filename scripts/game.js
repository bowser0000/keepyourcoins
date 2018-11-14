//Work In Progress! Submit bugs to https://www.github.com/bowser0000/keepyourcoins/issues/

//Increasing maximum errors given in JSHint
/*jshint maxerr: 1000 */

//Random Damage: To be added (Maybe after first boss?)
//Random Damage Variable

//Every 5 HP is 1-2 power level
//Every 2 HP is 0-1 coin
function randomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var var1 = randomDamage(1, 7); //Starting Coins
var var2 = randomDamage(1, 3); //Coins in pants
var path1a = Math.random(); //Finding monster
var path1lose = Math.random(); //Determining if you lose or win coins
var xd123 = randomDamage(3, 7);  //Dropping coins by running/winning
var xd12344 = randomDamage(1, 5); //Finding coins by winning
var kill2 = Math.random(); //Killing stranger
var killwin = randomDamage(10, 15); //Money gained by killing him
var weapon = 'Wooden Sword'; //Current Weapon (Default Wooden Sword)
var coins = var1; //Coin Count (Default Starting Coins (var1))
var hp = 50; //Player HP
var damage = 3; //Damage for weapon
var fire = 0; //Extra Damage (Mr. Madden Sword only)
var damagedone; //Defining before done
var gain1; //Defining before done
var boss1hp = 25; //Dialva HP
var boss1attack = randomDamage(1, 2); //Dialva attack damage
var flipchance = Math.random(); //Flip-O-Rama Flip Chance
var powerlevel = 5; //Power Level (Increases damage by 1 every multiple of 10)
var realpowerlevel = 5; //Power Level which will reset to 0 after every damage increase.
var plsubtract;
var basedamage = 0;
var forcedmonster1hp = 15;
var route3a = Math.random();
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

//TODO Fix this
/*window.setTimeout(function checkPowerLevel(){
  plsubtract = Math.floor(realpowerlevel / 10);
  if(plsubtract >= 1) {
    damage = damage + plsubtract;
    plsubtract = plsubtract * 10;
    realpowerlevel = realpowerlevel - plsubtract;
    alert('You have gained one attack damage.');
  }
}, 100);*/

function game11() {
  alert('That\'s the end! You ended with ' + coins + ' coin(s)!');
  throw new Error('That\'s all folks!');
}

function game10() {
  alert('Everyday seems to get weirder and weirder. You wonder what will happen on the day of your death.');
  alert('You suddenly feel the same pain you had before.');
  alert('You look above you.');
  alert('There\'s some floating text above you, which looks kind of holographic.');
  alert('It says \'Power Level: ' + powerlevel + '.\'');
  alert('The text suddenly wisps away.');
  alert('You suddenly get extremely hungry. You rush to the nearest Clucken Bell to have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two numbers 45s, one with cheese, and a large soda.');
  alert('You get your order and you eat it very quickly.');
  alert('The text wisps back, but the number is different.');
  powerlevel = powerlevel + 5;
  realpowerlevel = realpowerlevel + 5;
  alert('It says \'Power Level: ' + powerlevel + '.\'');
  alert('Some new text appears under those words.');
  alert('Damage: ' + damage + ' + 1.');
  basedamage = basedamage + 1;
  alert('Damage: ' + damage + basedamage + '.');
  alert('You wonder about the power level.');
  alert('You try asking the people around you, but they don\'t seem to want to answer. One even kicks you in the head.');
  alert('It seems like everbody is trying to distance themselves away from you.');
  alert('You kick a hobo.'); //Please don't kick a hobo in real life.
  alert('He starts speaking in gibberish, until you can start to make out some words.');
  alert('Every... fniefmwimfw imwf... five power level... vkjnejfeklfmdew... gives you one damage... fweufnwkfnwoijfw');
  alert('You thank him and run off.');
  alert('You run home, and immediatly Google how to gain power level.');
  alert('Some stupid game called Trove shows up.');
  alert('It looks like you\'re the only one who has experianced this.');
  alert('As you get off your computer, you walk out of your room and downstairs.');
  alert('A monster appears, but you can only make out the silhouette of the figure.');
  alert('You lunge at it with your ' + weapon +'.');
  function forcedmonsterone() {
    var forcedmonster1 = prompt('Do you [run] or [attack]?').toLowerCase();
    if (forcedmonster1 == 'run') {
      alert('You run away, but you do not gain power level or coins.');
      game11();
    } else if (forcedmonster1 == 'attack') {
      alert('You attack the monster.');
      forcedmonster1hp = forcedmonster1hp - damage;
      alert('The monster has ' + forcedmonster1hp + ' left.');
      if (forcedmonster1hp <= 0) {
        alert('You beat the monster!');
        alert('You gained three power level and seven coins!');
        powerlevel = powerlevel + 3;
        realpowerlevel = realpowerlevel + 3;
        coins = coins + 7;
        game11();
      } else {
        forcedmonster1hp();
      }
    } else {
      alert('Please use [run] or [attack]!');
    }
  }
  forcedmonsterone();
}

function game9() {
  alert('You feel something rise in you. You feel like you got much more ' + gain1 +'.');
  alert('You feel something else rise in you, like a dark power. Like a forbidden force only God can reach.');
  alert('You search up what you are feeling.');
  alert('"Ebola? Cancer? I don\'t think that I have any of those." you say out loud.');
  alert('The sensation inside you gets stronger. You can feel a small ball of metal sitting in your stomach.');
  alert('You feel like punching something, you can\'t hold in the pain anymore.');
  alert('Suddenly, the pain goes away. You are in the middle of the room, confused on what happened.');
  alert('You walk downstairs after taking a bath, and you are greeted by a game show contestant.');
  alert('"Welcome, welcome, welcome! To Flip-O-Rama! The game show where you have to flip a water bottle. If you do, you will win 15 coins! Land it on the cap and you win 30! One attempt only!"');
  var fliporama = prompt('Will you participate? [Yes] or [No]').toLowerCase();
  if (fliporama == 'yes') {
    alert('You step up to take the challenge.');
    alert('You prepare your wrist for the flick of your life.');
    alert('3... 2... 1... flip!');
    alert('It lands...');
    if (flipchance >= 0.25) {
      alert('but it falls off the table.');
      alert('"Ooh! Better luck next time!" he says.');
      game10();
    } else if (flipchance > 0.01 && flipchance <= 0.24) {
      alert('And it stays!');
      alert('"Congratulations! You just won 15 coins!"');
      coins = coins + 15;
      alert('You now have ' + coins + ' coin(s)!');
      game10();
    } else if (flipchance == 0.01) {
      alert('ON IT\'S CAP!');
      alert('"Wow! We\'ve never seen anything like it! Maybe we should have made it more rigged..." he says.');
      alert('"Anyways, you won 30 coins! Congratulations!"');
      coins = coins + 30;
      alert('You now have ' + coins +' coins!');
    }
  } else if (fliporama == 'no') {
    alert('You decided not to play.');
    game10();
  } else {
    alert('Use [Yes] or [No]!');
  }
}

function game8() {
  alert('You start to play around with your ' + weapon + '. You notice some small text near the handle.');
  alert('"あなたが成功した場合はるかに空白得ることができます。"');
  alert('You don\'t have time to translate it, so you walk back up to your room.');
  alert('"Man, this day was weird." you say.');
  alert('You go back to sleep.');
  var sleep1 = 50 - hp;
  alert('You gained ' + sleep1 + ' HP!');
  hp = 50;
  alert('You wake up the next day. You remember the text on your sword and you go to Google Translate.');
  alert('It\'s all normal, except for one part. It translates to \'You can get much more blank if you have success.\'');
  gain1 = prompt('Do you replace it with [strength], [stamina] or [famous]?').toLowerCase();
  if (gain1 == 'strength') {
    basedamage = basedamage + 4;
    game9();
  } else if (gain1 == 'stamina') {
    hp = hp + 10;
    game9();
  } else if (gain1 == 'famous') {
    coins = coins + 15;
    game9();
  }
}

function game7() {
  if (weapon == 'Harshan Sword') {
    alert('You finished probably the easiest battle of your life.');
  } else {
    alert('You finished probably the toughest battle of your life.');
  }
  alert('A sketchy looking man approaches you.');
  alert('\"Hey man, you gotta buy this Iron Sword. I have to get the cops off- I mean, It\'s really good and does 5 damage. It\'s only 15 coins!\"');
  var isword = prompt('Will you buy the Iron Sword? [Yes] or [No]?').toLowerCase();
  if (isword == 'yes') {
    coins = coins - 15;
    if (weapon == 'Harshan Sword') {
      alert('You have the Harshan Sword, you did not equip the Iron Sword');
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
    game8();
  } else {
    alert('Please use [Yes] or [No]!');
  }
}

function game6() {
  alert('You walk towards the hotel, walking across a bridge, which seems to go across a river.');
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
  if (nick == 'John Cena') {
    window.location = "https://www.niceme.me";
  } else {
    alert('The man says \"Hello Eric!');
    alert('Was that not your name?');
    alert('What about Leric or Sheric?');
    alert('Oh! I see! Your name is ' + nick + '!');
    alert('Welcome to our town, \'Mount Kajamakam!\' Hope you enjoy your stay!\" He gives you a pass to a hotel just down the street.');
    alert('You walk towards the hotel.');
    alert('You see a someless guy, asking for money. His sign says \'Need Money for Squids.\'');
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
}

function game4() {
  alert('You walk towards a intersection.');
  var route3 = prompt('Do you go [straight], [left] or [right]?').toLowerCase();
  if (route3 == 'straight') {
    alert('You go straight, not worrying about the other paths.');
    alert('You get to an end. The only paths now are going left and right.');
    var route3s = prompt('Do you take the [left] or the [right] path?');
    if (route3s == 'left') {
      alert('You can see the exit in your view. While getting closer, you feel a tug on your leg. 20 coins! It must be your lucky day!');
      coins = coins + 5;
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
    if (weapon == 'Harshan Sword') {
      alert('Your Harshan Sword rips him in half, and the shop keeper gives you ' + killwin + ' coins!');
      coins = coins + killwin;
      game3();
    } else if (kill2 >= 0.5) {
      alert('The guy manages to fight back, and kills you.');
      alert('You ended with ' + coins + ' coin(s)!');
      throw new Error ('You died!');
    } else if(kill == 'do not') {
      alert('You don\'t kill him, and the shopkeeper gives you no coins.');
      game3();
    } else if(kill2 <= 0.5) {
      alert('You kill him, and the shop keeper gives you ' + killwin + ' coins!');
      coins = coins + killwin;
      game3();
    }
  } else if (kill == 'do not') {
    alert('You decide not to kill him.');
    game3();
  } else {
    alert('Use [kill him] or [do not]!');
  }
}

function game1() {
  damagedone = damage + fire + basedamage;
  alert('You wake up, and find ' + var1 + ' coin(s) on your bed!');
  alert('You now have ' + coins + ' coin(s)!');
  alert('You get out of bed and take a bath.');
  alert('While taking off your pants, you find ' + var2 + ' coin(s) in your pocket!');
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
  alert('The goal of the game is to end with the most coins! Try to get over 60!');
  alert('The game WILL close if you type something wrong. Capitals do not matter unless it is your name/nickname. Be careful when typing.');
  alert('Please report bugs to https://github.com/bowser0000/keepyourcoins/issues (This link is in the code.)');
  var name = prompt('What is your name?');
  //Get Harshan Sword
  if (name == 'Harshan') {
    weapon = 'Harshan Sword';
    damage = 9999;
    game1();
  } else if (name == 'Mr. Madden') {
    weapon = 'Mr. Madden Sword';
    damage = 15;
    fire = 5;
    game1();
  } else if (name == 'John Cena') {
    window.location = "https://www.niceme.me";
  } else if (name == 'bowser0000') {
    var test = true;
    while (test === true)
    {
      alert('Nice try. Try again another day. You can press the \'Prevent this page from additional dialogues,\' but what\'s the fun in that? I have an idea, if you can get through these finite number of messages, I will give you a sword that does something cool. Good luck.');
    }
  } else {
    game1();
  }
}

game();

//Looking at the source code, eh?
