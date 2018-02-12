function createBox() {
  textBox = document.createElement('input');
  textBox.setAttribute('value', "1")
  textBox.className = 'numeric';
  document.getElementById('textBoxes').appendChild(textBox);
}

function add() {
  boxes = Array.from(document.getElementByClassName('numeric'));
  sum = 0;
  boxes.forEach(function(elem) {
    return accum + parseInt(elem.value);
  });
  document.getElementById('answer').innerHTML = sum;
}
