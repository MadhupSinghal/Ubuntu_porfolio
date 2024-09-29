var contbtn = document.getElementById("contactBtn");
var contform = document.getElementById("contactPopup");
var closeBtn = document.getElementById("close");
var response = document.getElementById("submitBtn");

//Open the form with button
contbtn.onclick = function () {
  contform.style.display = "block";
};

//Closing the form
closeBtn.onclick = function () {
  contform.style.display = "none";
};

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name_val = document.getElementById("name").value;
    const email_val = document.getElementById("email").value;
    const message_val = document.getElementById("message").value;

    const formData = {
      name: name_val,
      email: email_val,
      message: message_val,
    };
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    document.getElementById("contactForm").reset();
  });

document.getElementById("fonts").addEventListener("change", function () {
  var selectedFont = this.value;
  console.log(selectedFont);
  document.body.style.fontFamily = selectedFont;
});

document.querySelectorAll('input[name="lang"]').forEach(function (radio) {
  radio.addEventListener("change", function () {
    var selectedLang = document.querySelector(
      'input[name="lang"]:checked'
    ).value;
    document.body.style.fontFamily = selectedLang;
  });
});
