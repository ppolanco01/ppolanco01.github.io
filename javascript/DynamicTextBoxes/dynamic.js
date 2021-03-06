function createBox() {
  textBox = document.createElement('input');
  textBox.setAttribute('value', getRand(1000));
  textBox.setAttribute('onkeyup', 'validateTextbox(this)');
  textBox.className = 'numeric';
  document.getElementById('textBoxes').appendChild(textBox);
}

function getRand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function add() {
  boxes = Array.from(document.getElementsByClassName('numeric'));
  sum = 0;
  boxes.forEach(function(elem) {
    sum += parseInt(elem.value);
  });
  document.getElementById('answer').innerHTML = sum;
}

function average() {
  boxes = Array.from(document.getElementsByClassName('numeric'));
  sum = 0;
  boxes.forEach(function(elem) {
    sum += parseInt(elem.value);
  });
  avg = sum / boxes.length;
  document.getElementById('answer').innerHTML = avg;
}

function Median() {
  boxes = Array.from(document.getElementsByClassName('numeric'));
  anArray = [];
  boxes.forEach(function(elem) {
    anArray.push(parseInt(elem.value));
  });
  anArray.sort(function (a, b) {
    return a-b;
  });
  med = anArray[Math.floor(anArray.length / 2)];
  document.getElementById('answer').innerHTML = med;
}


function validateTextbox(textBox) {
  num = textBox.value;
  if (isNaN(num)) {
    textBox.className = 'numeric invalid';
  } else {
    textBox.className = 'numeric';
  }
  setButtonState();
}

function setButtonState() {
  invalids = document.getElementsByClassName('invalid');
  if (invalids.length > 0) {
    document.getElementById('addButton').disabled = true;
  } else {
    document.getElementById('addButton').disabled = false;
  }
}

function chooseAction() {
  choice = document.getElementById('actionChoice');
  action = choice[choice.selectedIndex];
  button = document.getElementById('addButton');
  if (action.value == 'add') {
    button.innerHTML = "Add Up Contents";
    button.setAttribute('onclick', 'add()');
  }
  if (action.value == 'average') {
    button.innerHTML = "Average Contents";
    button.setAttribute('onclick', 'average()');
  }
  if (action.value == 'median') {
    button.innerHTML = "Get Median";
    button.setAttribute('onclick', 'median()');
  }
}

function setup() {
  chooseAction();
}
