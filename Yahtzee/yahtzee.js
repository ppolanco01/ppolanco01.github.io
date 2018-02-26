function setup() {
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
  document.getElementById('throwsRemain').innerHTML = yahtzee.throwsRemaniningInTurn;
  document.getElementById('throwsRemainLabel').innerHTML = yahtzee.throwsRemaniningInTurn;
  document.getElementById('roll').disabled = (yahtzee.throwsRemaniningInTurn <= 0);
}

function loadScorecard() {
  yahtzee.scoreCard.forEach(function(scoreCardRow) {
    if (scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score);
    }
  });
  buildScoreCardRow("Top Subtotal", " ");
  buildScoreCardRow("Top Bonus", " ");
  yahtzee .scoreCard.forEach(function(scoreCardRow) {
    if (!scoreCardRow.top) {
      buildScoreCardRow(scoreCardRow.title, scoreCardRow.score);
    }
  })
  buildScoreCardRow("Total Score", " ");
}

function buildScoreCardRow(title, score) {
  tr = document.createElement('tr');
  td1 = document.createElement('td');
  td1.innerHTML = title;
  tr.appendChild(td1);
  td2 = document.createElement('td');
  td2.innerHTML = score;
  tr.appendChild(td2);
  document.getElementById('scoreRows').appendChild(tr);
}

function rollDice() {
  if (yahtzee.throwsRemaniningInTurn > 0) {
    yahtzee.dice.forEach(function (die) {
      if (!die.saved) {
        die.sideUp = Math.floor(Math.random() * 6) + 1;

      }
    });
    if (rerolled)
    yahtzee.throwsRemaniningInTurn--;
    loadDice();
  }
}

function saveDie(dieIndex) {
  if (yahtzee.throwsRemaniningInTurn != 3) {
    yahtzee.dice.forEach(function (die) {
      if (!die.saved) {
        die.sideUp = Math.floor(Math.random() * 6) + 1;
      }
    }
}
}
