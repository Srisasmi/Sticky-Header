document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const formStatus = document.getElementById('formStatus');
            formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
            contactForm.reset();
        });
    }

    // Booking Form Submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(bookingForm);
            alert('Your booking has been submitted successfully!');
            bookingForm.reset();
        });
    }

    // Sign-Up Form Submission
    const signUpForm = document.querySelector('.signup-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(signUpForm);
            alert('You have signed up successfully!');
            signUpForm.reset();
        });
    }

    // Log-In Form Submission
    const logInForm = document.querySelector('.login-form');
    if (logInForm) {
        logInForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(logInForm);
            alert('You have logged in successfully!');
            logInForm.reset();
        });
    }
});
