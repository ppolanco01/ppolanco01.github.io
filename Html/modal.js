function loadModal() {
  modal = document.getElementsByClassName('modal-wrapper')[0];
  modal.style.display = "block";
}

function closeModal() {
  name = document.getElementById('nameInput').value;
  if (name.length > 0) {
    document.getElementById('name').innerHTML = name;
    checkedImage = document.querySelector('input[name=avatar][checked]').value;
    document.getElementById('avatar').src = checkedImage;
    modal = document.getElementsByClassName('modal-wrapper')[0];
    modal.style.display = "none";
  }
}
