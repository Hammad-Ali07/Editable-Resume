// Get form and preview elements
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;

// Function to update the form fields with current resume data
function updateFormFromResume() {
    const [degree, education] = resumeEducation.textContent?.split(" from ") || [];
    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
    (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
    (document.getElementById("degree") as HTMLInputElement).value = degree || '';
    (document.getElementById("education") as HTMLInputElement).value = education || '';
    (document.getElementById("workExperience") as HTMLTextAreaElement).value = resumeWorkExperience.textContent || '';
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';
}

// Handle form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault();

    // Collect form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const photoInput = document.getElementById("photo") as HTMLInputElement;

    // Handle photo
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    const photoURL = photoFile ? URL.createObjectURL(photoFile) : '';

    // Populate the resume preview
    resumePhoto.src = photoURL;
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = `${degree} from ${education}`;
    resumeWorkExperience.textContent = workExperience;
    resumeSkills.textContent = skills;

    // Hide form and show resume page
    document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");
});

// Add back button functionality to go back to the form
const backButton = document.getElementById("backButton") as HTMLButtonElement;
backButton.addEventListener("click", () => {
    // Show the form again and hide the resume preview
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});

// Add edit button functionality
const editButton = document.getElementById("editButton") as HTMLButtonElement;
editButton.addEventListener("click", () => {
    // Populate the form with current resume data for editing
    updateFormFromResume();

    // Show the form again for editing
    document.querySelector(".container")?.classList.remove("hidden");
    resumePage.classList.add("hidden");
});

// Make sections editable and update form on change
const editableElements = [
    { element: resumeName, id: "name" },
    { element: resumeEmail, id: "email" },
    { element: resumePhone, id: "phone" },
    { element: resumeEducation, id: "education" },
    { element: resumeWorkExperience, id: "workExperience" },
    { element: resumeSkills, id: "skills" },
];

editableElements.forEach(({ element, id }) => {
    element.addEventListener("input", () => {
        // Update the form field when the resume section is edited
        const formField = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
        if (formField) {
            formField.value = element.textContent || '';
        }
    });
});
