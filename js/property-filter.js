$(document).ready(function() {
    
    // Property Filtering Logic
    $('.filter-btn').on('click', function() {
        const filterValue = $(this).attr('data-filter');
        
        // Update Active Button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        // Filter Items
        if (filterValue === 'all') {
            $('.property-item').fadeIn(400);
        } else {
            $('.property-item').hide();
            $('.property-item[data-category="' + filterValue + '"]').fadeIn(400);
        }
    });

    // Form Filtering (Search Bar in Hero/Properties page)
    $('#propertySearchForm').on('submit', function(e) {
        e.preventDefault();
        
        const type = $('#searchType').val().toLowerCase();
        const location = $('#searchLocation').val().toLowerCase();
        
        if (!type && !location) {
            $('.property-item').fadeIn(400);
            return;
        }

        $('.property-item').each(function() {
            const itemType = $(this).attr('data-category').toLowerCase();
            const itemLocation = $(this).find('.property-location').text().toLowerCase();
            
            let show = true;
            
            if (type && itemType !== type && type !== 'any') {
                show = false;
            }
            
            if (location && !itemLocation.includes(location)) {
                show = false;
            }
            
            if (show) {
                $(this).fadeIn(400);
            } else {
                $(this).hide();
            }
        });
    });

});
