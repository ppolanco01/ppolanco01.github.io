newGameObject = {};

function setup() {
  newGameObject = JSON.parse(JSON.stringify(yahtzee));
  loadPlayerInfo();
  loadDice();
  loadScorecard();
}

function loadPlayerInfo() {
  document.getElementById('playerName').innerHTML = yahtzee.player.name;
  document.getElementById('playerAvatar').src = yahtzee.player.avatar;
}

function loadDice() {
  dieImages = ['question-mark.jpeg', 'one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];
  yahtzee.dice.forEach(function (die, index) {
    img = document.getElementById('die' + index);
    img.src = dieImages[die.sideUp];
    if (die.saved) {
      img.className = "saved";
    } else {
      img.className = "";
    }
  });
  document.getElementById('throwsRemain').innerHTML = yahtzee.throwsRemainingInTurn;
  document.getElementById('throwsRemainLabel').innerHTML = yahtzee.throwsRemainingInTurn;
  document.getElementById('roll').disabled = (yahtzee.throwsRemainingInTurn <= 0);
  if (yahtzee.turnsRemaining == 0) {
    document.getElementById('game').className = "";
  } else {
    document.getElementById('game').className = "hide";
  }
}


function loadScorecard() {
  document.getElementById('scoreRows').innerHTML = "",
  yahtzee.scoreCard.forEach(function(scoreCardRow, index) {
    if (scoreCardRow.top) {
      if (scoreCardRow.scoreRecorded) {
        className = "scored";
      } else {
        className = "unscored";
      }
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score, (scoreCardRow.scoreRecorded ? "scored" : "unscored"), !scoreCardRow.scoreRecorded, index);
    }
  });
  buildScoreCardRow("Top Subtotal:", " ", "totals", false, 0);
  buildScoreCardRow("Top Bonus:", " ", "totals", false, 0);
  yahtzee.scoreCard.forEach(function(scoreCardRow, index) {
    if (!scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score, (scoreCardRow.scoreRecorded ? "scored" : "unscored"), !scoreCardRow.scoreRecorded, index);
    }
  });
  buildScoreCardRow("Total Score:", " ", "totals", false, 0);
}

function buildScoreCardRow(title, score, columnClassName, clickable, scorecardIndex) {
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = title;
  tr.appendChild(td1);
  td2 = document.createElement('td');
  td2.innerHTML = score;
  td2.className = columnClassName;
  if (clickable) {
    td2.setAttribute('data-scoreIndex', scorecardIndex);
    td2.onclick = saveScore;
  }
  tr.appendChild(td2);
  document.getElementById('scoreRows').appendChild(tr);
}

function saveScore() {
  if (yahtzee.throwsRemainingInTurn < 3) {
    index = this.getAttribute('data-scoreIndex');
    yahtzee.scoreCard[index].scoreRecorded = true;
    loadScorecard();
    yahtzee.throwsRemainingInTurn = 3;
    yahtzee.dice.forEach(function (die) {
      die.sideUp = 0;
      die.saved = false;
    });
    loadDice();
    yahtzee.turnsRemaining--;
  }
}

function rollDice() {
  rerolled = false;
  if (yahtzee.throwsRemainingInTurn > 0) {
    yahtzee.dice.forEach(function (die) {
      if (!die.saved) {
        die.sideUp = Math.floor(Math.random() * 6) + 1;
        rerolled = true;
        calculateScores();
      }
    });
    if (rerolled)
    yahtzee.throwsRemainingInTurn--;
    loadDice();
  }
}

function saveDie(dieIndex) {
  if (yahtzee.throwsRemainingInTurn != 3) {
    yahtzee.dice[dieIndex].saved = !yahtzee.dice[dieIndex].saved;
    loadDice();
  }
}

function calculateScores() {
  yahtzee.scoreCard.forEach(function (scoreCardRow) {
    if (!scoreCardRow.scoreRecorded) {
      if (conditionIsMet(scoreCardRow.scoreCondition)) {
        if (scoreCardRow.scoreMath[0] == 'const') {
          scoreCardRow.score = scoreCardRow.scoreMath[1];
        }
      }
      if (scoreCardRow.scoreMath[0] == 'sum') {
        scoreCardRow.score = sumOfDice(scoreCardRow.scoreMath[1]);
      }
    } else {
      scoreCardRow.score = 0;
    }
  });
  loadScorecard();
}

function sumOfDice(valueToMatch) {
  total = 0;
  yahtzee.dice.forEach(function (die) {
    if (die.sideUp == valueToMatch || valueToMatch === 0) {
      total += die.sideUp;
    }
  })
  return total;
}

function conditionIsMet (condition) {
  if (condition[0] == 'none') {
    return true;
  }
  if (condition[0] == 'ofAKind') {
    return ofAKind(condition);
  }
  if (condition[0] == 'inArow') {
    return inARow(condition);
  }
  return false;
}

function ofAKind(condition) {
  return false;
}

function inARow(condition) {
  return false;
}

function EndGame() {
  yahtzee = JSON.parse(JSON.stringify(newGameObject));
  setup();
}







function end() {

}
