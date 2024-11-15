const firstname = document.getElementById("firstname");
const displayFirstname = document.getElementById("display-firstname");
const age = document.getElementById("age");
const aHardTruth = document.getElementById("a-hard-truth");
const pwd = document.getElementById("pwd");
const pwdConfirmation = document.getElementById("pwd-confirm");
const select = document.getElementById("toggle-darkmode");

firstname.addEventListener("keyup", () => {
  displayFirstname.textContent = firstname.value;
});

age.addEventListener("keyup", () => {
  if (age.value < 18) {
    aHardTruth.style.visibility = "hidden";
  } else {
    aHardTruth.style.visibility = "visible";
  }
});

pwd.addEventListener("keyup", () => {
  pwd.style.backgroundColor = pwd.value.length < 6 ? "red" : "white";
});

pwdConfirmation.addEventListener("input", () => {
  pwdConfirmation.style.backgroundColor =
    pwd.value.length < 6 ? "red" : "white";
});

select.addEventListener("change", () => {
  if (select.value === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
