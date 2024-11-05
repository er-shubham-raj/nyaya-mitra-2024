// Ensure the DOM is fully loaded before executing any scripts
$(document).ready(function () {
    // Initialize the carousel
    $('#header-carousel').carousel({
        interval: 5000 // Change slide every 5 seconds
    });

    // Initialize datetime pickers for appointment form
    $('#date').datetimepicker({
        format: 'L', // Format for the date
        icons: {
            time: 'far fa-clock',
            date: 'far fa-calendar-alt',
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down',
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right',
            today: 'fas fa-calendar-check',
            clear: 'fas fa-trash',
            close: 'fas fa-times'
        }
    });

    $('#time').datetimepicker({
        format: 'LT', // Format for the time
        icons: {
            time: 'far fa-clock',
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down'
        }
    });

    // Form validation for appointment form
    $('form').on('submit', function (e) {
        e.preventDefault(); // Prevent default form submission
        var name = $(this).find('input[type="text"]').val();
        var email = $(this).find('input[type="email"]').val();

        if (name === '' || email === '') {
            alert('Please fill in all required fields.');
        } else {
            // Here you can add your AJAX call to submit the form
            alert('Appointment request submitted successfully!');
            $(this).trigger('reset'); // Reset the form fields
        }
    });

    // Back to Top button functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});