function logIn(id ) {
  console.log("Log : " + id);
  document.getElementById(id).style.display = "none";
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
