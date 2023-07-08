const form = document.querySelector("form");
const fname = document.getElementById("fname");
const Uname = document.getElementById("Uname");
const psw = document.getElementById("psw");
const cpsw = document.getElementById("cpsw");
const num = document.getElementById("num");
const email = document.getElementById("email");
var genderRadios = document.querySelectorAll('input[name="Gender"]');
var checkboxInput = document.getElementById("agreements");
const para = document.querySelector("p");
let valid = true;

form.addEventListener("submit", (e) => {
var cnt = 0;

  // Clear previous error message
  para.textContent = "";

  // Validate full name
  if (fname.value.trim() === "") {
    e.preventDefault();
    valid = false;
    showError("Please enter your full name.");
    cnt++;
  }

  // Validate username
  if (Uname.value.trim() === "") {
    e.preventDefault();
    valid = false;
    showError("Please enter a username.");
    cnt++;
  }

  // Validate password
  if (psw.value === "") {
    e.preventDefault();
    valid = false;
    showError("Please enter a password.");
    cnt++;
  }

  // Validate confirm password
  if (cpsw.value === "") {
    e.preventDefault();
    valid = false;
    showError("Please confirm your password.");
    cnt++;
  } else if (cpsw.value !== psw.value) {
    e.preventDefault();
    valid = false;
    showError("Passwords do not match.");
    cnt++;
  }

  // Validate gender selection
  let isGenderSelected = false;
  genderRadios.forEach((radio) => {
    if (radio.checked) {
      isGenderSelected = true;
    }
  });
  if (!isGenderSelected) {
    e.preventDefault();
    valid = false;
    showError("Please select your gender.");
    cnt++;
  }

  // Validate phone number
  if (num.value.trim() === "") {
    e.preventDefault();
    valid = false;
    showError("Please enter your phone number.");
    cnt++;
  }
  else if (num.value < 5111111111) {
    e.preventDefault();
    valid = false;
    showError("Please enter valid phone number.");
    cnt++;
  }

  // Validate email
  if (email.value.trim() === "") {
    e.preventDefault();
    valid = false;
    showError("Please enter your email address.");
    cnt++;
  } else if (!isValidEmail(email.value.trim())) {
    e.preventDefault();
    valid = false;
    showError("Please enter a valid email address.");
    cnt++
  }

  // Validate state selection
  const stateDropdown = document.getElementById("stateDropdown");
  if (stateDropdown.value === "") {
    e.preventDefault();
    valid = false;
    showError("Please select a state.");
    cnt++;
  }

  // Validate agreement checkbox
  if (!checkboxInput.checked) {
    e.preventDefault();
    valid = false;
    showError("Please accept the agreements.");
    cnt++;
  }
  if (valid) {
    alert("Redirecting to Login page...");
    redirect();
  }
});

function check() {
    checkboxInput.checked = true;
}

function redirect() {
    window.location.replace("../AWT/login.html");
}

function showError(message) {
  para.innerHTML += message + '<br>';
  
}

function isValidEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
