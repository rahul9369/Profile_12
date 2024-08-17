// Load data from localStorage when the page loads
window.addEventListener("load", function () {
  loadInformation();
});

// Toggle the disabled state of input fields when "Change Information" is clicked
document.querySelector(".edit-btn").addEventListener("click", function () {
  const inputs = document.querySelectorAll("form input");
  const isDisabled = inputs[0].disabled;

  // Toggle the disabled state of all inputs
  inputs.forEach((input) => {
    input.disabled = !isDisabled;
  });

  // Change the button text based on the state
  this.textContent = isDisabled ? "Save Information" : "Change Information";

  // If saving information, store the updated values
  if (isDisabled) {
    saveInformation();
  }
});

// Function to show the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

// Function to save the updated information to localStorage
function saveInformation() {
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Save the data to localStorage
  localStorage.setItem(
    "profileData",
    JSON.stringify({ name, dob, gender, phone, email })
  );

  // Example: Display a confirmation message
  alert("Your information has been saved successfully.");
}

// Function to load the saved information from localStorage
function loadInformation() {
  const profileData = JSON.parse(localStorage.getItem("profileData"));

  if (profileData) {
    document.getElementById("name").value = profileData.name;
    document.getElementById("dob").value = profileData.dob;
    document.querySelector(
      `input[name="gender"][value="${profileData.gender}"]`
    ).checked = true;
    document.getElementById("phone").value = profileData.phone;
    document.getElementById("email").value = profileData.email;
  } else {
    // If no data is found in localStorage, you may want to set default values
    console.log("No previous data found, using default values.");
  }
}
