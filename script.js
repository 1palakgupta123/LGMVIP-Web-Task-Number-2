// Get form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const skillsInputs = document.querySelectorAll('input[name="skills"]');
const imageInput = document.getElementById('image');
const registrationForm = document.getElementById('registrationForm');
const displayNameElement = document.getElementById('displayName');
const displayEmailElement = document.getElementById('displayEmail');
const displayGenderElement = document.getElementById('displayGender');
const displaySkillsElement = document.getElementById('displaySkills');
const displayImageElement = document.getElementById('displayImage');
const displayDataElement = document.getElementById('displayData');

// Add event listener for form submission
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const gender = Array.from(genderInputs).find(input => input.checked).value;
    const skills = Array.from(skillsInputs)
        .filter(input => input.checked)
        .map(input => input.value)
        .join(', ');
    const image = imageInput.files[0];

    // Display data in ID card
    displayNameElement.textContent = name;
    displayEmailElement.textContent = email;
    displayGenderElement.textContent = gender;
    displaySkillsElement.textContent = skills;
    displayImageElement.src = URL.createObjectURL(image);
    displayDataElement.classList.remove('hidden');
});

// Add event listener for image input change
imageInput.addEventListener('change', () => {
    const image = imageInput.files[0];
    displayImageElement.src = URL.createObjectURL(image);
});