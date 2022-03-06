// Edit Nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch modal form lancer le formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
	modalbg.style.display = 'none';
  }
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//form elements
const form = document.getElementById("form");
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById ('quantity');
const city = document.getElementById ('location1');
const checkbox1 = document.getElementById ('checkbox1');
const response = document.getElementById('error')

// Form fields validation
function validFirstName(){
 if (firstName.value.trim() === '') {
	setError(firstName, 'Veuillez entrer un prénom.');
	 return false;

}else if (firstName.value.length <= 2){
	setError(firstName, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
	return false;
}
setSuccess(firstName);
   return true;}


function validLastName(){
if (lastName.value.trim()=== '') {
	setError(lastName, 'Veuillez entrer un nom.');
	return false;

}else if(lastName.value.length <= 1){
	setError(lastName, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
	return false;
}
   setSuccess(lastName);
   return true;
	
}

function validEmail(){
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
if(email.value ==='') {
	setError(email, 'Veuillez entrer une adresse email')
	return false;
}else if (!email.value.match(mailRegex)){
	setError(email, 'Veuillez entrer une adresse email valide.');
	return false;
}
	setSuccess(email);
	return true;
	
}

function validBirthdate(){
const regexBirthdate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
if( (!birthdate.value)) {
	setError(birthdate, 'Vous devez entrer votre date de naissance.');
	return false;
}else if (!birthdate.value.match(regexBirthdate)){
	setError(birthdate, 'Veuillez entrer une date de naissance valide.');
	return false;
}
	setSuccess(birthdate);
	return true;
	
}

function validQuantity(){
if (!quantity.value) {
	setError(quantity, 'Veuillez renseigner à combien de tournois vous avez participé.');
	return false;
} 
	setSuccess(quantity);
		return true;
}

function validLocation(){
let radioCheck = document.querySelector('input[name = "location"]:checked');
if(radioCheck === null){
	setError(city, 'Vous devez choisir une option.');
	return false;
}
	setSuccess(city);
		return true;
}


function validCheckBox() {
if (checkbox1.checked === false) {
	setError(checkbox1, 'Vous devez vérifier que vous acceptez les termes et conditions.');
	return false;
}
	setSuccess(checkbox1);
	return true;
}

// For all fields validation
function forAllFieldsValidation() {
	validFirstName();
	validLastName();
	validEmail();
	validBirthdate();
	validQuantity();
	validLocation();
	validCheckBox();
  }
  
  function formValidation() {
if (validFirstName() === true &&
	validLastName() === true &&
	validEmail() === true &&
	validBirthdate() === true &&
	validQuantity() === true &&
    validLocation() === true &&
    validCheckBox() === true) {
    return true;
}
    return false;
}

// Send form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});
  
//Set error or success states for input checks
const setError = (element, message) => {
	const formData = element.parentElement;
	const errorDisplay = formData.querySelector('.error');

	errorDisplay.innerText = message;
}
const setSuccess = element =>{
	const error =element.parentElement;
	const errorDisplay = error.querySelector('.error');

	errorDisplay.innerText = '';
	error.classList.add('success');
	error.classList.remove('error');
};


//Dom elements submitted confirmation
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

//Submitted confirmation //
function displayModalSubmit() {
    modalbg.style.display = 'none';
    modalSubmit[0].style.display = 'block';
}

// Close submit
function closeSubmit() {
    modalSubmit[0].style.display = 'none';
  }

//close modal submit 
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);





 




	
	
	


  