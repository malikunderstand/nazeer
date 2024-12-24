let menu = document.querySelector('#navmenu');
let nav = document.querySelector('#menu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('open');
};

function formValidation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var message = document.getElementById('message').value;

  if (name.trim().length === 0) {
    alert('Required Name');
    return false;
  }
  if (email.trim().length === 0) {
    alert('Required Email');
    return false;
  }
  if (number.trim().length === 0) {
    alert('Required Number');
    return false;
  }
  if (message.trim().length === 0) {
    alert('Required Message');
    return false;
  } else {
    document.getElementById('form').reset();
    alert('Form Is Submitted');
    return true;
  }
}

function formsValidation() {
  var name = document.getElementById('names').value;
  var email = document.getElementById('emails').value;
  var number = document.getElementById('numbers').value;
  var message = document.getElementById('messages').value;

  if (name.trim().length === 0) {
    alert('Required Name');
    return false;
  }
  if (email.trim().length === 0) {
    alert('Required Email');
    return false;
  }
  if (number.trim().length === 0) {
    alert('Required Number');
    return false;
  }
  if (message.trim().length === 0) {
    alert('Required Message');
    return false;
  } else {
    document.getElementById('forms').reset();
    alert('Form Is Submitted');
    return true;
  }
}
