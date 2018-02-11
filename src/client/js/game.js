var socket = io.connect('http://localhost:8080');

function logIn(idDiv, idForm) {
  document.getElementById(idDiv).style.display = "none";
  console.log("Log in : " + idForm.pseudo.value);
  socket.emit('logIn', idForm.pseudo);
}

window.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
          console.log("Left step");
        break;
      case 38:
          console.log("Up step");
        break;
      case 39:
          console.log("Right step");
        break;
      case 40:
          console.log("Down step");
        break;
    }
};
