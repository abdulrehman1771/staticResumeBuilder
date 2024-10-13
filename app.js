function addSkill() {
    var newNode = document.createElement('input');
    newNode.classList.add('skill');
    var newNodeBr = document.createElement('br');
    var skllOb = document.getElementById('skll');
    var addSkillButton = document.getElementById('addSkill');
    skllOb === null || skllOb === void 0 ? void 0 : skllOb.insertBefore(newNodeBr, addSkillButton);
    skllOb === null || skllOb === void 0 ? void 0 : skllOb.insertBefore(newNode, addSkillButton);
}
function addLanguage() {
    var newNode = document.createElement('input');
    newNode.classList.add('language');
    var newNodeBr = document.createElement('br');
    var langOb = document.getElementById('lang');
    var addLanguageButton = document.getElementById('addLanguage');
    langOb === null || langOb === void 0 ? void 0 : langOb.insertBefore(newNodeBr, addLanguageButton);
    langOb === null || langOb === void 0 ? void 0 : langOb.insertBefore(newNode, addLanguageButton);
}
function addEducation() {
    // Creating Education Level Label
    var newNodeEducationLevelLabel = document.createElement('label');
    newNodeEducationLevelLabel.setAttribute('for', 'educationLevel');
    newNodeEducationLevelLabel.textContent = 'Education Level';
    // Creating Education Level Input
    var newNodeEducationLevelInput = document.createElement('input');
    newNodeEducationLevelInput.setAttribute('id', 'educationLevel');
    newNodeEducationLevelInput.setAttribute('title', 'educationLevel');
    newNodeEducationLevelInput.setAttribute('type', 'text');
    newNodeEducationLevelInput.classList.add('educationLevel');
    // Creating Education Institute Label
    var newNodeEducationInstituteLabel = document.createElement('label');
    newNodeEducationInstituteLabel.setAttribute('for', 'educationInstitute');
    newNodeEducationInstituteLabel.textContent = 'Institute Name';
    // Creating Education Institute Input
    var newNodeEducationInstituteInput = document.createElement('input');
    newNodeEducationInstituteInput.setAttribute('id', 'educationInstitute');
    newNodeEducationInstituteInput.setAttribute('title', 'educationInstitute');
    newNodeEducationInstituteInput.setAttribute('type', 'text');
    newNodeEducationInstituteInput.classList.add('educationInstitute');
    var newNodeBr = document.createElement('br');
    var eduOb = document.getElementById('edu');
    var addEducationButton = document.getElementById('addEducation');
    // Adding Education Level Field
    eduOb === null || eduOb === void 0 ? void 0 : eduOb.insertBefore(newNodeEducationLevelLabel, addEducationButton);
    eduOb === null || eduOb === void 0 ? void 0 : eduOb.insertBefore(newNodeEducationLevelLabel, addEducationButton);
    eduOb === null || eduOb === void 0 ? void 0 : eduOb.insertBefore(newNodeEducationLevelInput, addEducationButton);
    // Adding Institute Field
    eduOb === null || eduOb === void 0 ? void 0 : eduOb.insertBefore(newNodeEducationInstituteLabel, addEducationButton);
    eduOb === null || eduOb === void 0 ? void 0 : eduOb.insertBefore(newNodeEducationInstituteInput, addEducationButton);
    // Adding Line Break
    eduOb === null || eduOb === void 0 ? void 0 : eduOb.insertBefore(newNodeBr, addEducationButton);
}
// Upload Image Function Starts
// HTML Elements
var imageInput = document.getElementById('image');
var profileImage = document.querySelector('.profile');
// Function to handle image upload and storage
function handleImageUpload(event) {
    var target = event.target;
    if (target.files && target.files[0]) {
        var file = target.files[0];
        var reader = new FileReader();
        // When file is successfully read
        reader.onload = function (e) {
            var _a;
            var base64Image = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Update the profile image src
            if (profileImage) {
                profileImage.src = base64Image;
            }
            // Store the image in localStorage
            localStorage.setItem('profileImage', base64Image);
        };
        // Read the file as a data URL (base64 encoded)
        reader.readAsDataURL(file);
    }
}
// Load the stored image from localStorage (if any)
function loadStoredImage() {
    var storedImage = sessionStorage.getItem('profileImage');
    if (storedImage && profileImage) {
        profileImage.src = storedImage;
    }
}
// Event listener for image upload input
if (imageInput) {
    imageInput.addEventListener('change', handleImageUpload);
}
// Load the image on page load
window.addEventListener('DOMContentLoaded', loadStoredImage);
// Upload Image Function Ends
/*  the "problem" is that typescript is typeSafe. :) So the document.getElementById() returns the type HTMLElement which does not contain a value property. The subtype HTMLInputElement does however contain the value property.

So a solution is to cast the result of getElementById() to HTMLInputElement like this:

var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
*/
function addExperience() {
    // Creating Year Label Tag
    var newNodeYearLabel = document.createElement('label');
    newNodeYearLabel.setAttribute('for', 'experienceYear');
    newNodeYearLabel.textContent = 'Year';
    // Creating Year Input Tag
    var newNodeYearInput = document.createElement('input');
    newNodeYearInput.setAttribute('class', 'experienceYear');
    newNodeYearInput.setAttribute('type', 'date');
    newNodeYearInput.setAttribute('title', 'experienceYear');
    // Creating Company Label Tag
    var newNodeCompanyLabel = document.createElement('label');
    newNodeCompanyLabel.setAttribute('for', 'experienceCompany');
    newNodeCompanyLabel.textContent = 'Company';
    // Creating Company Input Tag
    var newNodeCompanyInput = document.createElement('input');
    newNodeCompanyInput.setAttribute('class', 'experienceCompany');
    newNodeCompanyInput.setAttribute('type', 'text');
    newNodeCompanyInput.setAttribute('title', 'experienceCompany');
    // Creating Position Label Tag
    var newNodePositionLabel = document.createElement('label');
    newNodePositionLabel.setAttribute('for', 'experiencePosition');
    newNodePositionLabel.textContent = 'Position';
    // Creating Position Input Tag
    var newNodePositionInput = document.createElement('input');
    newNodePositionInput.setAttribute('class', 'experiencePosition');
    newNodePositionInput.setAttribute('type', 'text');
    newNodePositionInput.setAttribute('title', 'experiencePosition');
    var newNodeBr = document.createElement('br');
    var experienceOb = document.getElementById('experience');
    var addExperienceButton = document.getElementById('addExperienceButton');
    // Adding Space
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodeBr, addExperienceButton);
    // Adding Year 
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodeYearLabel, addExperienceButton);
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodeYearInput, addExperienceButton);
    // Adding Company
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodeCompanyLabel, addExperienceButton);
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodeCompanyInput, addExperienceButton);
    // Adding Position
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodePositionLabel, addExperienceButton);
    experienceOb === null || experienceOb === void 0 ? void 0 : experienceOb.insertBefore(newNodePositionInput, addExperienceButton);
}
function generateCv() {
    var _a;
    // Change Name
    var inputName1 = document.getElementById('name1').value;
    var cvName = document.getElementById('cvName');
    cvName.innerHTML = inputName1;
    // Change Niche
    var inputNiche = document.getElementById('niche').value;
    var cvNiche = document.getElementById('cvNiche');
    cvNiche.innerHTML = inputNiche;
    // Change Description
    var inputDescription = (_a = document.getElementById('description')) === null || _a === void 0 ? void 0 : _a.value;
    var cvDescription = document.getElementById('cvDescription');
    cvDescription.innerHTML = inputDescription;
    // // Interface Definitions for Strong Typing
    // interface HTMLInputElementWithValue extends HTMLInputElement {
    //     value: string;
    // }
    // interface HTMLTextAreaElementWithValue extends HTMLTextAreaElement {
    //     value: string;
    // }
    // // Function to safely get an element by ID and cast it to a specific type
    // function getElement<T extends HTMLElement>(id: string): T | null {
    //     return document.getElementById(id) as T | null;
    // }
    //     // Function to add a new experience entry
    // function addExperience(): void {
    //     const experienceContainer = getElement<HTMLDivElement>('experienceContainer');
    //     const addExperienceButton = getElement<HTMLButtonElement>('experienceAddButton');
    //     if (experienceContainer && addExperienceButton) {
    //         const newExperienceDiv = document.createElement('div');
    //         newExperienceDiv.classList.add('experience');
    //         // Year
    //         const yearLabel = document.createElement('label');
    //         yearLabel.textContent = 'Year';
    //         const yearInput = document.createElement('input');
    //         yearInput.type = 'date';
    //         yearInput.title = 'experienceYear';
    //         yearInput.classList.add('experienceYear');
    //         // Company
    //         const companyLabel = document.createElement('label');
    //         companyLabel.textContent = 'Company';
    //         const companyInput = document.createElement('input');
    //         companyInput.type = 'text';
    //         companyInput.title = 'experienceCompany';
    //         companyInput.classList.add('experienceCompany');
    //         companyInput.placeholder = 'Enter company name';
    //         // Position
    //         const positionLabel = document.createElement('label');
    //         positionLabel.textContent = 'Position';
    //         const positionInput = document.createElement('input');
    //         positionInput.type = 'text';
    //         positionInput.title = 'experiencePosition';
    //         positionInput.classList.add('experiencePosition');
    //         positionInput.placeholder = 'Enter position';
    //         // Append all elements to the new experience div
    //         newExperienceDiv.appendChild(yearLabel);
    //         newExperienceDiv.appendChild(yearInput);
    //         newExperienceDiv.appendChild(companyLabel);
    //         newExperienceDiv.appendChild(companyInput);
    //         newExperienceDiv.appendChild(positionLabel);
    //         newExperienceDiv.appendChild(positionInput);
    //         // Append the new experience div to the container
    //         experienceContainer.appendChild(newExperienceDiv);
    //     }
    // }
    // Change Experience
    // Getting CV Experience Object
    var cvExperienceOb = document.getElementById('cvExperience');
    var cvExperienceSpan = document.getElementById('cvExperienceSpan');
    // Getting Form Experience Object
    var formExperienceOb = document.getElementsByClassName('experience')[0].children;
    for (var i = 0; (i < formExperienceOb.length); i++) {
        var newNodeExperienceUl = document.createElement('ul');
        var newNodeExperienceBr = document.createElement('br');
        var newNodeExperienceLiYear = document.createElement('li');
        newNodeExperienceLiYear.setAttribute('class', 'cvExperienceYear');
        var newNodeExperienceLiCompany = document.createElement('li');
        newNodeExperienceLiCompany.setAttribute('class', 'cvExperienceCompany');
        var newNodeExperienceLiPosition = document.createElement('li');
        newNodeExperienceLiPosition.setAttribute('class', 'cvExperiencePosition');
        newNodeExperienceUl.appendChild(newNodeExperienceLiYear);
        newNodeExperienceUl.appendChild(newNodeExperienceLiCompany);
        newNodeExperienceUl.appendChild(newNodeExperienceLiPosition);
        try {
            var formExperienceYear = document.getElementsByClassName('experienceYear')[i].value;
            newNodeExperienceLiYear.innerHTML = formExperienceYear;
            var formExperienceCompany = document.getElementsByClassName('experienceCompany')[i].value;
            newNodeExperienceLiCompany.innerHTML = formExperienceCompany;
            var formExperiencePosition = document.getElementsByClassName('experiencePosition')[i].value;
            newNodeExperienceLiPosition.innerHTML = formExperiencePosition;
        }
        catch (_b) {
        }
        // // Skip undefined values
        // if (formExperienceYear) newNodeExperienceLiYear.innerHTML = formExperienceYear;
        // if (formExperienceCompany) newNodeExperienceLiCompany.innerHTML = formExperienceCompany;
        // if (formExperiencePosition) newNodeExperienceLiPosition.innerHTML = formExperiencePosition;
        if (cvExperienceOb) {
            cvExperienceOb.appendChild(newNodeExperienceUl);
            cvExperienceOb.appendChild(newNodeExperienceBr);
        }
    }
    // Change Contact Number
    var inputContactNumber = document.getElementById('contactNumber').value;
    var cvContactNumber = document.getElementById('cvContactNumber');
    cvContactNumber.innerHTML = inputContactNumber;
    // Change Contact Email
    var inputContactEmail = document.getElementById('contactEmail').value;
    var cvContactEmail = document.getElementById('cvContactEmail');
    cvContactEmail.innerHTML = inputContactEmail;
    // Change Contact Address
    var inputContactAddress = document.getElementById('contactAddress').value;
    var cvContactAddress = document.getElementById('cvContactAddress');
    cvContactAddress.innerHTML = inputContactAddress;
    // Change Education
    // Getting cvElements
    var cvEducationDiv = document.getElementById('cvEducationDiv');
    var cvEducationSpan = document.getElementById('cvEducationSpan');
    // Getting Form Elements
    var formEducationLevel = document.getElementsByClassName('educationLevel');
    var formEducationInstitute = document.getElementsByClassName('educationInstitute');
    for (var i = 0; i < formEducationInstitute.length; i++) {
        var newNodeCvEducationLevel = document.createElement('b');
        newNodeCvEducationLevel.setAttribute('id', 'cvEducationLevel');
        var newNodeCvEducationInstitute = document.createElement('p');
        newNodeCvEducationInstitute.setAttribute('id', 'cvEducationInstitute');
        var newNodeBr = document.createElement('br');
        newNodeCvEducationLevel.innerHTML = (formEducationLevel[i].value);
        // Adding Education Level
        cvEducationDiv.insertBefore(newNodeCvEducationLevel, cvEducationSpan);
        newNodeCvEducationInstitute.innerHTML = formEducationInstitute[i].value;
        // Adding Institute
        cvEducationDiv.insertBefore(newNodeCvEducationInstitute, cvEducationSpan);
        // Adding br
        cvEducationDiv.insertBefore(newNodeBr, cvEducationSpan);
    }
    // Adding Skills
    // Getting Form Skills
    var formSkills = document.getElementsByClassName('skill');
    // Getting cvSkills
    var cvSkillsOb = document.getElementById('cvSkills');
    // Getting Span Element
    var cvSkillSpan = document.getElementById('cvSkillSpan');
    for (var i = 0; i < formSkills.length; i++) {
        // Creating <li></li> Element
        var newNodeSkill = document.createElement('li');
        // Creating <li></li> Element
        var newNodeSkillBr = document.createElement('br');
        // Getting Skill Value
        var newSkill = formSkills[i].value;
        newNodeSkill.innerHTML = newSkill;
        // Adding Skill
        cvSkillsOb === null || cvSkillsOb === void 0 ? void 0 : cvSkillsOb.insertBefore(newNodeSkill, cvSkillSpan);
        cvSkillsOb === null || cvSkillsOb === void 0 ? void 0 : cvSkillsOb.insertBefore(newNodeSkillBr, cvSkillSpan);
    }
    // Adding Languages
    // Getting form language array
    var formLanguageArr = document.getElementsByClassName('language');
    // Getting CV Language Object
    var cvLangOb = document.getElementById('cvLanguages');
    // Getting CVLanguageSpan Element
    var cvLanguagesSpan = document.getElementById('cvLanguagesSpan');
    for (var i = 0; i < formLanguageArr.length; i++) {
        // Getting Form Input Values
        var formLanguage = formLanguageArr[i].value;
        // Creating <li></li> Element
        var newNodeLi = document.createElement('li');
        // Creating <br> Element
        var newNodeLiBr = document.createElement('br');
        newNodeLi.innerHTML = formLanguage;
        cvLangOb === null || cvLangOb === void 0 ? void 0 : cvLangOb.insertBefore(newNodeLi, cvLanguagesSpan);
        cvLangOb === null || cvLangOb === void 0 ? void 0 : cvLangOb.insertBefore(newNodeLiBr, cvLanguagesSpan);
    }
    if (!(inputName1 == "") && !(inputContactEmail == "")) {
        document.getElementById('resume').style.display = 'block';
    }
    else {
        alert("Please enter Your name and Email Address");
    }
}
// Get the color input and the div element
var colorPicker = document.getElementById('colorPicker');
var colorBox = document.getElementById('main');
// Add an event listener to the color input
colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.addEventListener('input', function () {
    // Change the background color of the div based on the selected color
    colorBox.style.backgroundColor = colorPicker.value;
});
// // Get references to form elements and the container where the CV will be generated
// const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
// const cvContainer = document.getElementById('resume') as HTMLDivElement;
//    // Show the container (since it was hidden initially)
//    cvContainer.style.display = 'block';
//     // Add click event listener to the generate button
//     generateButton.addEventListener('click', generateCv);
