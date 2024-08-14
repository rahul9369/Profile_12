// script.js
document.querySelector(".edit-btn").addEventListener("click", function () {
  const inputs = document.querySelectorAll("form input");
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
  });
});

document.getElementById("profile-btn").addEventListener("click", function () {
  showSection("profile-section");
});

document.getElementById("orders-btn").addEventListener("click", function () {
  showSection("orders-section");
});

document.getElementById("address-btn").addEventListener("click", function () {
  showSection("address-section");
});

document.getElementById("account-btn").addEventListener("click", function () {
  showSection("account-section");
});

document.getElementById("password-btn").addEventListener("click", function () {
  showSection("password-section");
});

function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}
