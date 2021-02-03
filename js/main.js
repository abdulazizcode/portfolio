function overlay() {
    var checkBox = document.getElementById("close");
    var overlay = document.querySelector(".overlay");
    if (checkBox.checked == true){
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
  }