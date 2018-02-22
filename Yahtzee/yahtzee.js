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
}

 function loadScorecard() {
   // make TR and TD and insert into scoreRows
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
