// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000,function(){
        $(this).remove();
    });
});

// lightbox
$(document).ready(function() {
    $('.show__lightbox').click(function(e){
        e.preventDefault(e);
        var imgSrc = $(this).attr("href");

        if ($('.lightbox').length > 0) {
            $('body').addClass('no-scroll').delay(300).queue(function(next){
                $('.lightbox').addClass('is-visible');
                $('.lightbox__content').html('<img src="' + imgSrc + '" />');
                next();
            });
        }

        else {
            var lightBox =
            '<div class="lightbox">' +
                '<a href="" id="closeLightboxBtn" class="lightbox__close-button"><i class="nc-icon nc-small-remove lg"></i></a>' +
                '<div class="lightbox__content">' +
                    '<img src="' + imgSrc +'" />' +
                '</div>' +
            '</div>';

            $('body').append(lightBox);
        }
    });

    $('.lightbox__close-button').click(function(e){
        e.preventDefault();
        $('.lightbox').removeClass('is-visible').delay(300).queue(function(next){
            $('body').removeClass('no-scroll');
            next();
        });
    });
});

