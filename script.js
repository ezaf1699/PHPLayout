// Authentication JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                handleFormSubmission(form);
            }
            form.classList.add('was-validated');
        });
    });

    // Password visibility toggle
    const toggleButtons = document.querySelectorAll('#togglePassword');
    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const passwordInput = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Password confirmation validation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            
            if (password !== confirmPassword) {
                this.setCustomValidity('Passwords do not match');
            } else {
                this.setCustomValidity('');
            }
        });
    }
});

// Handle form submissions
function handleFormSubmission(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(function() {
        if (form.id === 'resetForm') {
            showSuccessMessage();
        } else {
            // Simulate successful submission
            alert('Form submitted successfully! (This is a demo)');
        }
        
        // Reset button state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    }, 2000);
}

// Show success message for password reset
function showSuccessMessage() {
    const resetForm = document.getElementById('resetForm');
    const successMessage = document.getElementById('successMessage');
    
    if (resetForm && successMessage) {
        resetForm.classList.add('d-none');
        successMessage.classList.remove('d-none');
    }
}

// Show reset form again
function showResetForm() {
    const resetForm = document.getElementById('resetForm');
    const successMessage = document.getElementById('successMessage');
    
    if (resetForm && successMessage) {
        resetForm.classList.remove('d-none');
        successMessage.classList.add('d-none');
        
        // Reset form
        resetForm.reset();
        resetForm.classList.remove('was-validated');
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});