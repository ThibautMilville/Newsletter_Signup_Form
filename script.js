class form_validation {
  constructor() {
    this.form = document.getElementById('newsletter');
    this.email = document.getElementById('newsletter-email').value;
  }

  // Check email is valid
  checkEmail(input) {
    const valid_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (valid_email.test(input)) {
      this.showSuccess(input);
    }
    else {
      this.showError(input, 'Email is not valid');
    }
  }

  // Event listeners
  eventListeners() {
    this.form.addEventListener('submit', (e) => {
      console.log('Form submitted');
      e.preventDefault();
  
      // Check email is valid
      this.checkEmail(this.email);
    });
  }
}

const form = new form_validation();
form.eventListeners();