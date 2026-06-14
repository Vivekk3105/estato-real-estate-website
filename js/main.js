// Main Scripts
$(document).ready(function() {
    
    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        
        // Scroll To Top Button Show/Hide
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });

    // Scroll To Top Action
    $('.scroll-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

    // Set Active Nav Link Based on URL
    const currentPage = window.location.pathname.split("/").pop();
    if(currentPage !== "") {
        $('.navbar-nav .nav-link').each(function() {
            const linkPage = $(this).attr('href');
            if (currentPage === linkPage) {
                $('.navbar-nav .nav-link').removeClass('active');
                $(this).addClass('active');
            }
        });
    }

    // Animated Counters
    const animateCounters = () => {
        $('.counter-value').each(function() {
            const $this = $(this);
            const target = parseInt($this.attr('data-target'));
            
            $({ countNum: $this.text()}).animate({
                countNum: target
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    };

    // Trigger counters when scrolled into view
    let counted = false;
    $(window).scroll(function() {
        if ($('.counter-section').length) {
            const oTop = $('.counter-section').offset().top - window.innerHeight;
            if (counted == false && $(window).scrollTop() > oTop) {
                animateCounters();
                counted = true;
            }
        }
    });

    // Initialize Tooltips (Bootstrap)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });

});
