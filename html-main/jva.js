  // script.js

document.addEventListener("DOMContentLoaded", function () {

    // Handle form submission for repair requests
    const repairForm = document.getElementById("repair-form");
    repairForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const hospitalName = document.getElementById("hospital-name").value;
        const equipmentType = document.getElementById("equipment-type").value;
        const issueDescription = document.getElementById("issue-description").value;
  
        if (hospitalName && equipmentType && issueDescription) {
            alert(`Repair Request Submitted for ${equipmentType} at ${hospitalName}. We'll get back to you soon.`);
            repairForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
  
    // Handle "Browse Technicians" button click
    const browseTechniciansButton = document.getElementById("browse-technicians");
    browseTechniciansButton.addEventListener("click", function () {
        alert("Redirecting to the list of technicians... (This feature is under development)");
    });
  
    // Handle form submission for contact
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const contactName = document.getElementById("contact-name").value;
        const contactEmail = document.getElementById("contact-email").value;
        const contactMessage = document.getElementById("contact-message").value;
  
        if (contactName && contactEmail && contactMessage) {
            alert(`Thank you for reaching out, ${contactName}. We will reply to you soon.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields before sending.");
        }
    });
  
  });
