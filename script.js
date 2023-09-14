function showButtons() {
  // Show the set of buttons
  var buttonsDiv = document.querySelector(".buttons");
  if (buttonsDiv) {
      buttonsDiv.style.display = "block";
  }

  // Hide the "Show Buttons" button
  var showButtonsButton = document.getElementById("showButtons");
  if (showButtonsButton) {
      showButtonsButton.style.display = "none";
  }
}

function pakeisk(id) {
  // Hide all divs with class "buttonContent"
  var divs = document.querySelectorAll(".buttonContent");
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none";
  }

  // Show the selected div by id
  var selectedDiv = document.getElementById(id);
  if (selectedDiv) {
      selectedDiv.style.display = "block";
  }
}