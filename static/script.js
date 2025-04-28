//---------------- Footer Start ----------------------------------------------
document.getElementById('accessibility-button').addEventListener('click', function() {
    const options = document.getElementById('accessibility-options');
    const isExpanded = thistoggleAccessibility().getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    options.hidden = isExpanded;
});
function toggleAccessibility() {
    document.getElementById('accessibility-options').classList.toggle('hidden');
}
function changeContrast() {
  console.log('Change contrast');
}

function increaseFontSize() {
    document.body.style.fontSize = 'larger';
}

function decreaseFontSize() {
    document.body.style.fontSize = 'smaller';
}

function readText() {
    const text = document.body.innerText;
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// ---------------Footer End ------------------------------------------- 

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
function GoBack(){
  window.history.back();
}
function showMessage() {
      var dialog = document.getElementById("messageDialog");
      dialog.showModal();  // This makes it a modal dialog
}
  
  // Close the dialog when the close button is clicked
document.getElementById("closeDialog").addEventListener("click", () => {
    // console.log("Closing the dialog...");
    // var dialog = document.getElementById("messageDialog");
    favDialog.close();  // Close the dialog
});

document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
