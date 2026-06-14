$(document).ready(function() {
    
    // Form Validation for Contact and Inquiry Forms
    $('.needs-validation').on('submit', function(e) {
        let isValid = true;
        
        $(this).find('.form-control').each(function() {
            // Remove previous error states
            $(this).removeClass('is-invalid');
            
            // Name validation
            if ($(this).attr('name') === 'name' && $(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            }
            
            // Email validation
            if ($(this).attr('name') === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test($(this).val().trim())) {
                    isValid = false;
                    $(this).addClass('is-invalid');
                }
            }

            // Phone validation (basic)
            if ($(this).attr('name') === 'phone') {
                const phoneRegex = /^[\d\+\-\s]+$/;
                if ($(this).val().trim() !== '' && !phoneRegex.test($(this).val().trim())) {
                    isValid = false;
                    $(this).addClass('is-invalid');
                }
            }
            
            // Message validation
            if ($(this).attr('name') === 'message' && $(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('is-invalid');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
            
            // Show error message alert if exists
            const alertBox = $(this).find('.alert-danger');
            if(alertBox.length) {
                alertBox.removeClass('d-none');
            } else {
                $(this).prepend('<div class="alert alert-danger">Please fix the errors in the form.</div>');
            }
        } else {
            // Prevent actual submit for demo purposes, show success
            e.preventDefault();
            $(this).find('.alert-danger').addClass('d-none');
            
            const successBox = $(this).find('.alert-success');
            if(successBox.length) {
                successBox.removeClass('d-none');
            } else {
                $(this).prepend('<div class="alert alert-success">Message sent successfully!</div>');
            }
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                $(this).find('.alert-success').addClass('d-none');
            }, 5000);
        }
    });

    // Newsletter Validation
    $('.newsletter-form').on('submit', function(e) {
        e.preventDefault();
        const emailInput = $(this).find('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(emailInput.val().trim())) {
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
