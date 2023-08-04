// Form validation
class FormValidation {
  constructor() {
    // Newsletter block
    this.newsletterBlock = document.querySelector('.newsletter');
    this.form = document.getElementById('newsletter');
    this.emailInput = document.getElementById('newsletter-input-email');
    this.errorMessage = document.getElementById('error-message');

    // Success block
    this.successBlock = document.querySelector('.success-message');
    this.emailRegistered = document.getElementById('email-registered');
    this.dismissButton = document.getElementById('dismiss-button');

    // Bind event listener to the form submit
    this.form.addEventListener('submit', this.handleSubmit.bind(this));

    // Bind event listener to the dismiss button
    this.dismissButton.addEventListener('click', this.dismissSuccessMessage.bind(this));
  }

  // Check email is valid
  checkEmail(email) {
    const validEmailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    return validEmailRegex.test(email);
  }

  // Show input success
  showSuccess(email) {
    this.newsletterBlock.style.display = 'none';
    this.successBlock.style.display = 'block';
    this.emailRegistered.innerHTML = email;
  }

  // Show input error message
  showError() {
    this.errorMessage.style.display = 'block';
    this.emailInput.classList.add('error');
  }

  // Handle form submit
  handleSubmit(e) {
    e.preventDefault();

    // Get email value
    const email = this.emailInput.value;

    // Check email is valid
    if (this.checkEmail(email)) {
      this.showSuccess(email);
    } else {
      this.showError();
    }
  }

  dismissSuccessMessage(e) {
    e.preventDefault();

    this.successBlock.style.display = 'none';
    this.newsletterBlock.style.display = 'flex';
  }
}

const form = new FormValidation();