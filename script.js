// Get form and preview elements
var form = document.getElementById("resumeForm");
var resumePage = document.getElementById("resumePage");
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeWorkExperience = document.getElementById("resumeWorkExperience");
var resumeSkills = document.getElementById("resumeSkills");
// Function to update the form fields with current resume data
function updateFormFromResume() {
    var _a, _b, _c;
    var _d = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(" from ")) || [], degree = _d[0], education = _d[1];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_b = resumeEmail.textContent) === null || _b === void 0 ? void 0 : _b.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_c = resumePhone.textContent) === null || _c === void 0 ? void 0 : _c.replace('Phone: ', '')) || '';
    document.getElementById("degree").value = degree || '';
    document.getElementById("education").value = education || '';
    document.getElementById("workExperience").value = resumeWorkExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
// Handle form submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Collect form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    var photoInput = document.getElementById("photo");
    // Handle photo
    var photoFile = photoInput.files ? photoInput.files[0] : null;
    var photoURL = photoFile ? URL.createObjectURL(photoFile) : '';
    // Populate the resume preview
    resumePhoto.src = photoURL;
    resumeName.textContent = name;
    resumeEmail.textContent = "Email: ".concat(email);
    resumePhone.textContent = "Phone: ".concat(phone);
    resumeEducation.textContent = "".concat(degree, " from ").concat(education);
    resumeWorkExperience.textContent = workExperience;
    resumeSkills.textContent = skills;
    // Hide form and show resume page
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    resumePage.classList.remove("hidden");
});
// Add back button functionality to go back to the form
var backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
    var _a;
    // Show the form again and hide the resume preview
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Add edit button functionality
var editButton = document.getElementById("editButton");
editButton.addEventListener("click", function () {
    var _a;
    // Populate the form with current resume data for editing
    updateFormFromResume();
    // Show the form again for editing
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumePage.classList.add("hidden");
});
// Make sections editable and update form on change
var editableElements = [
    { element: resumeName, id: "name" },
    { element: resumeEmail, id: "email" },
    { element: resumePhone, id: "phone" },
    { element: resumeEducation, id: "education" },
    { element: resumeWorkExperience, id: "workExperience" },
    { element: resumeSkills, id: "skills" },
];
editableElements.forEach(function (_a) {
    var element = _a.element, id = _a.id;
    element.addEventListener("input", function () {
        // Update the form field when the resume section is edited
        var formField = document.getElementById(id);
        if (formField) {
            formField.value = element.textContent || '';
        }
    });
});
