


function addSkill(){
    let newNode = document.createElement('input')
    newNode.classList.add('skill')
    
    let newNodeBr = document.createElement('br')

    let skllOb = document.getElementById('skll')
    let addSkillButton = document.getElementById('addSkill')
    

    skllOb?.insertBefore(newNodeBr, addSkillButton)
    skllOb?.insertBefore(newNode, addSkillButton)
}

function addLanguage(){
    let newNode = document.createElement('input')
    newNode.classList.add('language')
    
    let newNodeBr = document.createElement('br')
    

    let langOb = document.getElementById('lang')
    let addLanguageButton = document.getElementById('addLanguage')

    langOb?.insertBefore(newNodeBr, addLanguageButton)
    langOb?.insertBefore(newNode, addLanguageButton)
}



function addEducation(){
    // Creating Education Level Label
    let newNodeEducationLevelLabel = document.createElement('label')
    newNodeEducationLevelLabel.setAttribute('for','educationLevel')
    newNodeEducationLevelLabel.textContent = 'Education Level'

    // Creating Education Level Input
    let newNodeEducationLevelInput = document.createElement('input')
    newNodeEducationLevelInput.setAttribute('id','educationLevel')
    newNodeEducationLevelInput.setAttribute('title','educationLevel')
    newNodeEducationLevelInput.setAttribute('type','text')
    newNodeEducationLevelInput.classList.add('educationLevel')
    
    // Creating Education Institute Label
    let newNodeEducationInstituteLabel = document.createElement('label')
    newNodeEducationInstituteLabel.setAttribute('for','educationInstitute')
    newNodeEducationInstituteLabel.textContent = 'Institute Name'
    
    // Creating Education Institute Input
    let newNodeEducationInstituteInput = document.createElement('input')
    newNodeEducationInstituteInput.setAttribute('id','educationInstitute')
    newNodeEducationInstituteInput.setAttribute('title','educationInstitute')
    newNodeEducationInstituteInput.setAttribute('type','text')
    newNodeEducationInstituteInput.classList.add('educationInstitute')

    let newNodeBr = document.createElement('br')
    let eduOb = document.getElementById('edu')
    let addEducationButton = document.getElementById('addEducation')

    // Adding Education Level Field
    eduOb?.insertBefore(newNodeEducationLevelLabel, addEducationButton)
    eduOb?.insertBefore(newNodeEducationLevelLabel, addEducationButton)
    eduOb?.insertBefore(newNodeEducationLevelInput, addEducationButton)
    
    
    // Adding Institute Field
    eduOb?.insertBefore(newNodeEducationInstituteLabel, addEducationButton)
    eduOb?.insertBefore(newNodeEducationInstituteInput, addEducationButton)
    
    // Adding Line Break
    eduOb?.insertBefore(newNodeBr, addEducationButton)
    
}





// Upload Image Function Starts

// HTML Elements
const imageInput = document.getElementById('image') as HTMLInputElement;
const profileImage = document.querySelector('.profile') as HTMLImageElement;

// Function to handle image upload and storage
function handleImageUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();

        // When file is successfully read
        reader.onload = function(e) {
            const base64Image = e.target?.result as string;

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
    const storedImage = sessionStorage.getItem('profileImage');
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
function addExperience(){
    // Creating Year Label Tag
    let newNodeYearLabel = document.createElement('label');
    newNodeYearLabel.setAttribute('for', 'experienceYear')
    newNodeYearLabel.textContent = 'Year'
    
    // Creating Year Input Tag
    let newNodeYearInput = document.createElement('input');
    newNodeYearInput.setAttribute('class', 'experienceYear')
    newNodeYearInput.setAttribute('type', 'date')
    newNodeYearInput.setAttribute('title', 'experienceYear')
    
    
    // Creating Company Label Tag
    let newNodeCompanyLabel = document.createElement('label');
    newNodeCompanyLabel.setAttribute('for', 'experienceCompany')
    newNodeCompanyLabel.textContent = 'Company'
    
    // Creating Company Input Tag
    let newNodeCompanyInput = document.createElement('input');
    newNodeCompanyInput.setAttribute('class', 'experienceCompany')
    newNodeCompanyInput.setAttribute('type', 'text')
    newNodeCompanyInput.setAttribute('title', 'experienceCompany')
    
    
    // Creating Position Label Tag
    let newNodePositionLabel = document.createElement('label');
    newNodePositionLabel.setAttribute('for', 'experiencePosition')
    newNodePositionLabel.textContent = 'Position'
    
    // Creating Position Input Tag
    let newNodePositionInput = document.createElement('input');
    newNodePositionInput.setAttribute('class', 'experiencePosition')
    newNodePositionInput.setAttribute('type', 'text')
    newNodePositionInput.setAttribute('title', 'experiencePosition')
    
    
    let newNodeBr = document.createElement('br')
    let experienceOb = document.getElementById('experience')
    let addExperienceButton = document.getElementById('addExperienceButton')

    // Adding Space
    experienceOb?.insertBefore(newNodeBr, addExperienceButton)
    
    // Adding Year 
    experienceOb?.insertBefore(newNodeYearLabel, addExperienceButton)
    experienceOb?.insertBefore(newNodeYearInput, addExperienceButton)
    
    // Adding Company
    experienceOb?.insertBefore(newNodeCompanyLabel, addExperienceButton)
    experienceOb?.insertBefore(newNodeCompanyInput, addExperienceButton)
    
    // Adding Position
    experienceOb?.insertBefore(newNodePositionLabel, addExperienceButton)
    experienceOb?.insertBefore(newNodePositionInput, addExperienceButton)
    
}
















function generateCv(){

    // Change Name
    let inputName1 = (<HTMLInputElement>document.getElementById('name1')).value;
    let cvName = document.getElementById('cvName');
    
    cvName!.innerHTML = inputName1
    
    
    
    // Change Niche
    let inputNiche = (<HTMLInputElement>document.getElementById('niche')).value;
    let cvNiche = document.getElementById('cvNiche');
    
    cvNiche!.innerHTML = inputNiche
    
    
    
    // Change Description
    let inputDescription = (<HTMLInputElement>document.getElementById('description'))?.value;
    let cvDescription = document.getElementById('cvDescription')
    
    cvDescription!.innerHTML = inputDescription
    
    
    



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
    let cvExperienceOb = document.getElementById('cvExperience')
    let cvExperienceSpan = document.getElementById('cvExperienceSpan')

    // Getting Form Experience Object
    let formExperienceOb = document.getElementsByClassName('experience')[0].children

    
    for(let i = 0; (i < formExperienceOb.length); i++){
        
        let newNodeExperienceUl = document.createElement('ul')
        let newNodeExperienceBr = document.createElement('br')
        
        let newNodeExperienceLiYear = document.createElement('li')
        newNodeExperienceLiYear.setAttribute('class','cvExperienceYear')
        
        let newNodeExperienceLiCompany = document.createElement('li')
        newNodeExperienceLiCompany.setAttribute('class','cvExperienceCompany')
        
        let newNodeExperienceLiPosition = document.createElement('li')
        newNodeExperienceLiPosition.setAttribute('class','cvExperiencePosition')
    
        newNodeExperienceUl.appendChild(newNodeExperienceLiYear)
        newNodeExperienceUl.appendChild(newNodeExperienceLiCompany)
        newNodeExperienceUl.appendChild(newNodeExperienceLiPosition)
        
        try{
        let formExperienceYear = (<HTMLInputElement>document.getElementsByClassName('experienceYear')[i]).value
        newNodeExperienceLiYear.innerHTML= formExperienceYear
        
        let formExperienceCompany = (<HTMLInputElement>document.getElementsByClassName('experienceCompany')[i]).value
        newNodeExperienceLiCompany.innerHTML = formExperienceCompany
        
        let formExperiencePosition = (<HTMLInputElement>document.getElementsByClassName('experiencePosition')[i]).value
        newNodeExperienceLiPosition.innerHTML = formExperiencePosition
        } catch{
            
        }


        
        
        
        
        // // Skip undefined values
        // if (formExperienceYear) newNodeExperienceLiYear.innerHTML = formExperienceYear;
        // if (formExperienceCompany) newNodeExperienceLiCompany.innerHTML = formExperienceCompany;
        // if (formExperiencePosition) newNodeExperienceLiPosition.innerHTML = formExperiencePosition;
    
    
    if(cvExperienceOb){
            cvExperienceOb.appendChild(newNodeExperienceUl)
            cvExperienceOb.appendChild(newNodeExperienceBr)
        }
        
    }

    

















































    // Change Contact Number
    let inputContactNumber = (<HTMLInputElement>document.getElementById('contactNumber')).value;
    let cvContactNumber = document.getElementById('cvContactNumber')

    cvContactNumber!.innerHTML = inputContactNumber

    // Change Contact Email
    let inputContactEmail = (<HTMLInputElement>document.getElementById('contactEmail')).value;
    let cvContactEmail = document.getElementById('cvContactEmail')
    
    cvContactEmail!.innerHTML = inputContactEmail
    
    
    // Change Contact Address
    let inputContactAddress = (<HTMLInputElement>document.getElementById('contactAddress')).value;
    let cvContactAddress = document.getElementById('cvContactAddress')
    
    cvContactAddress!.innerHTML = inputContactAddress
    
    
    
    // Change Education
    // Getting cvElements
    let cvEducationDiv = document.getElementById('cvEducationDiv')
    let cvEducationSpan = document.getElementById('cvEducationSpan')
    
    // Getting Form Elements
    let formEducationLevel = document.getElementsByClassName('educationLevel')
    let formEducationInstitute = document.getElementsByClassName('educationInstitute')

    for(let i = 0; i<formEducationInstitute.length; i++){
        
        let newNodeCvEducationLevel = document.createElement('b');
        newNodeCvEducationLevel.setAttribute('id','cvEducationLevel')
        
        let newNodeCvEducationInstitute = document.createElement('p')
        newNodeCvEducationInstitute.setAttribute('id','cvEducationInstitute')

        let newNodeBr = document.createElement('br')
        
        newNodeCvEducationLevel.innerHTML = ((<HTMLInputElement>formEducationLevel[i]).value)
        
        // Adding Education Level
        cvEducationDiv!.insertBefore(newNodeCvEducationLevel, cvEducationSpan)
        
        newNodeCvEducationInstitute.innerHTML = (<HTMLInputElement>formEducationInstitute[i]).value;

        // Adding Institute
        cvEducationDiv!.insertBefore(newNodeCvEducationInstitute, cvEducationSpan);
        
        
        // Adding br
        cvEducationDiv!.insertBefore(newNodeBr, cvEducationSpan)
        
    }


    
    // Adding Skills

    // Getting Form Skills
    let formSkills = document.getElementsByClassName('skill')

    // Getting cvSkills
    let cvSkillsOb = document.getElementById('cvSkills')
    
    // Getting Span Element
    let cvSkillSpan = document.getElementById('cvSkillSpan')

    for(let i = 0; i<formSkills.length; i++){
        // Creating <li></li> Element
        let newNodeSkill = document.createElement('li')

        // Creating <li></li> Element
        let newNodeSkillBr = document.createElement('br')
        
        // Getting Skill Value
        let newSkill = (<HTMLInputElement>formSkills[i]).value
        newNodeSkill.innerHTML = newSkill

        // Adding Skill
        cvSkillsOb?.insertBefore(newNodeSkill, cvSkillSpan)
        cvSkillsOb?.insertBefore(newNodeSkillBr, cvSkillSpan)
    }
    
    // Adding Languages
    
    // Getting form language array
    let formLanguageArr = document.getElementsByClassName('language')

    // Getting CV Language Object
    let cvLangOb = document.getElementById('cvLanguages')

    // Getting CVLanguageSpan Element
    let cvLanguagesSpan = document.getElementById('cvLanguagesSpan')

    for(let i = 0; i<formLanguageArr.length; i++){
        
        // Getting Form Input Values
        let formLanguage = (<HTMLInputElement>formLanguageArr[i]).value
        
        // Creating <li></li> Element
        let newNodeLi = document.createElement('li')
        
        // Creating <br> Element
        let newNodeLiBr = document.createElement('br')

        newNodeLi.innerHTML = formLanguage
        
        cvLangOb?.insertBefore(newNodeLi, cvLanguagesSpan)
        cvLangOb?.insertBefore(newNodeLiBr, cvLanguagesSpan)

    }
    
    
    
    document.getElementById('resume')!.style.display = 'block';
}



// Get the color input and the div element
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('main');

// Add an event listener to the color input
colorPicker?.addEventListener('input', function() {
  // Change the background color of the div based on the selected color
  colorBox!.style.backgroundColor = (<HTMLInputElement>colorPicker).value;
});




// // Get references to form elements and the container where the CV will be generated
// const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
// const cvContainer = document.getElementById('resume') as HTMLDivElement;

//    // Show the container (since it was hidden initially)
//    cvContainer.style.display = 'block';
    
//     // Add click event listener to the generate button
//     generateButton.addEventListener('click', generateCv);