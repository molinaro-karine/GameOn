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
  const span = document.querySelector(".close");
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // Lancement formulaire (display en block)
  function launchModal() {
	modalbg.style.display = "block";
  }
  
  // Fermer le formulaire 
  span.onclick = function() {
	modalbg.style.display = "none";
  }
  
  
  // form elements
  const form = document.getElementById("form");
  const firstName = document.getElementById ('first');
  const lastName = document.getElementById ('last');
  const email = document.getElementById ('email');
  const birthdate = document.getElementById ('birthdate');
  const quantity = document.getElementById ('quantity');
  //const villes = document.getElementById ('location');
  const CGV = document.getElementById ('checkbox1');
  
  //Création expression reguliere
  const regexEmail = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
  
  //Fonction pour empêcher le formulaire de se soumettre automatiquement
  form.addEventListener('submit', (e) =>{
	  e.preventDefault();
  
	  validateInputs();
	  
  })
  
  
  
  const validateInputs = () =>{
	  //trim pour supprimer les espaces blancs
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const emailValue = email.value.trim();
   const birthdateValue = birthdate.value.trim();
   const quantityValue = quantity.value.trim();
   //const villesValue = villes.value.trim();
   const checkbox1Value = checkbox1.value.trim();
  
   //Création expression reguliere
  let regexEmail = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
  let regexBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  
   if (firstNameValue === '') {
	   setError (firstName, 'Le champ prénom est requis');
  
  }else if (firstNameValue.length <= 1){
	  setError(firstName, 'Veuillez entrer 2 caratères ou plus.')
  }else {
	  setSuccess(firstName);
  }
  
  if (lastNameValue === '') {
	  setError(lastName, 'Le champ nom est requis');
  
  }else if(lastNameValue.length <= 1){
	  setError(lastName, 'Veuillez entrer 2 caratères ou plus.')
  }else{
	 setSuccess(lastName);
  }
  
  if(emailValue ==='') {
	  setError(email, 'Renseigner un email');
  }else if (!regexEmail.test(emailValue)){
	  setError(email, 'Renseigner une adresse email valide.');
  }else {
	  setSuccess(email);
  }
  
  if(birthdateValue.trim().length !== 10) {
	  setError(birthdate, 'Renseigner une date ');
  }else if (!regexBirthdate.test(birthdateValue)){
	  setError(birthdate, 'Renseigner une date valide.');
  }else {
	  setSuccess(birthdate);
  }
  
  
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
	  setError(quantity, 'Renseigner une quantité.');
  }else{
	  setSuccess(quantity);
  }
  
  if(checkbox1Value.checked === false) {
	  
	  setError(checkbox1, 'Renseigner une adresse email valide.');
  }else {
	  setSuccess(checkbox1);
  }
  
  };
  //Définir les états d'erreur ou de réussite des contrôles d'entrée
  const setError = (element, message) => {
	  const formData = element.parentElement;
	  const errorDisplay = formData.querySelector('.error');
  
	  errorDisplay.innerText = message;
	  error.classList.add('error');
	  error.classList.remove('success')
  }
  const setSuccess = element =>{
	  const error =element.parentElement;
	  const errorDisplay = error.querySelector('.error');
  
	  errorDisplay.innerText = '';
	  error.classList.add('success');
	  error.classList.remove('error');
  };