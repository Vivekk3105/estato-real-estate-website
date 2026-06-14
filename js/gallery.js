$(document).ready(function() {
    
    // Property Gallery Image Switcher
    $('.property-gallery-thumbs img').on('click', function() {
        // Remove active class from all thumbs
        $('.property-gallery-thumbs img').removeClass('active');
        
        // Add active class to clicked thumb
        $(this).addClass('active');
        
        // Change main image source
        const newSrc = $(this).attr('src');
        $('.property-gallery-main img').fadeOut(200, function() {
            $(this).attr('src', newSrc).fadeIn(200);
        });
    });

    // Simple Lightbox integration (Requires Bootstrap Modal in HTML)
    $('.property-gallery-main img').on('click', function() {
        const src = $(this).attr('src');
        const modalHtml = `
            <div class="modal fade" id="imageLightboxModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content bg-transparent border-0">
                        <div class="modal-header border-0">
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center p-0">
                            <img src="${src}" class="img-fluid rounded" alt="Property View">
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing if any
        $('#imageLightboxModal').remove();
        
        // Append to body and show
        $('body').append(modalHtml);
        const myModal = new bootstrap.Modal(document.getElementById('imageLightboxModal'));
        myModal.show();
    });

});
