const blackDice = [0, 1, 1, 1, 2, 2];
const blueDice = [1, 1, 2, 2, 2, 3];
const orangeDice = [1, 2, 2, 3, 3, 4];

function diceRoll() {
  let dice = Math.random() * 6 - 0.5;
  dice = Math.round(dice);
  return dice;
  // $('.mode').text(dice);
  //simulates a dice roll
}

function simulateRolls(black, blue, orange, modifier) {
  let blackTotal = 0;
  let i = 0;
  for (i = 0; i !== black; i++) {
    blackTotal += blackDice[diceRoll()];
  }
  let blueTotal = 0;
  let j = 0;
  for (j = 0; j !== blue; j++) {
    blueTotal += blueDice[diceRoll()];
  }
  let orangeTotal = 0;
  let k = 0;
  for (k = 0; k !== orange; k++) {
    orangeTotal += orangeDice[diceRoll()];
  }

  return blackTotal + blueTotal + orangeTotal + modifier;
}

function average(rolls) {
  let averageRoll = 0;
  let i = 0;
  for (i = 0; i < rolls.length; i++) {
    averageRoll += rolls[i];
  }
  return averageRoll / rolls.length;
}

function median(rolls) {
  rolls.sort(function (a, b) {
    return a - b;
  });
  return rolls[rolls.length / 2];
}

function variance(rolls, average) {
  let u = 0;
  // rolls2 = runFiftyRolls();
  let variance = 0;
  while (u < rolls.length) {
    variance += (average - rolls[u]) ** 2;
    u++;
  }
  return Math.round(1000 * (variance / rolls.length)) / 1000;
}

function percentRoll(rolls, desiredRoll) {
  if (desiredRoll == 0) {
    return false;
  } else {
    rolls.sort(function (a, b) {
      return a - b;
    });
    let i = 0;
    for (i = 0; desiredRoll !== rolls[i] && i < rolls.length; i++) {}
    return (rolls.length - i) / 50;
  }
}

function mode(rolls) {
  const numberCounts = [];

  let i = 0;
  for (i = 0; i < rolls.length; i++) {
    let y = 0;
    while (y < numberCounts.length) {
      if (numberCounts[y].number == rolls[i]) {
        numberCounts[y].numberCount += 1;
        break;
        //check numberCounts to see if this roll has already been seen before, if it has increment the numberCount, break out of the loop
      }
      y++;
    }
    if (y == numberCounts.length) {
      numberCounts.push({
        number: rolls[i],
        numberCount: 1,
      });
    } // if this roll was not added previously, it will be added here.  If y == numberCounts.length that means it went all the way to the end of the array and did not add it, meaning we have to add it.
  }
  numberCounts.sort(function (a, b) {
    return b.numberCount - a.numberCount;
  });
  return numberCounts[0].number;
}

export function calculateStats(black, blue, orange, modifier, desiredRoll) {
  let cumulativeRolls = [];
  let i = 0;
  for (i = 0; i < 5000; i++) {
    cumulativeRolls.push(simulateRolls(black, blue, orange, modifier));
  }

  let mean = average(cumulativeRolls);

  let calculations = {
    average: mean,
    median: median(cumulativeRolls),
    variance: variance(cumulativeRolls, mean),
    percentRoll: percentRoll(cumulativeRolls, desiredRoll),
    mode: mode(cumulativeRolls),
  };

  return calculations;
}
