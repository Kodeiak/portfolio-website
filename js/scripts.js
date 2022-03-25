(function () {
  let form = document.querySelector('.contact_form');
  let nameInput = document.querySelector('#name');
  let emailInput = document.querySelector('#email');

  // event listeners that will validate as soon as user starts typing
  emailInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  
  
  function validateEmail() {
    // emailInput is defined node as per above.  
    let value = emailInput.value; // .value allows us to access user input

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    // check to see if input has '@' and '.'.  i.e. find the index of @.    
    if (value.indexOf('@') === -1 || value.indexOf('.') === -1) { //If it exists, it will be > -1.  Else, -1
      showErrorMessage(emailInput, 'You must enter a valid email address.')
      return false
    }

    showErrorMessage(emailInput, null);    
    return true;
  }

  function validateName() {
    let value = nameInput.value;

    if (!value) {
      showErrorMessage(nameInput, 'Name is a required field');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }
    
  function validateForm() {
    let isValidName = validateName();
    let isValidEmail = validateEmail();
    return isValidEmail && isValidName;
  }

  function showErrorMessage(input, message) {
    let container = input.parentElement; 
    
    // Remove existing error
    // assign node with class .error-message
    let error = container.querySelector('.error-message');
    // if that node exists, remove it
    if (error) {
      container.removeChild(error);
    }

    // add custom error message
    if (message) {
      // create new error node
      let error = document.createElement('div');
      // add class .error-message
      error.classList.add('error-message');
      error.innerText = message; // give error message content 
      container.appendChild(error); // add newly created node
    }
    
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    // if validateForm which includes both validate email and password functions is true
    if (validateForm()) {
      alert('Success!');
    }
  })
  
})();