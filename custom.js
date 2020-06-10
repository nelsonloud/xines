// fecha a navbar ao clicar no link

$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});


// smooth scroll

$(document).ready(function() {
    
    //get the header height
    var navHeight = $('nav').outerHeight();    
   
    $('.nav-link').click(function(e) {
       
       var linkHref = $(this).attr('href');
       
       
       $('html, body').animate({
           scrollTop: $(linkHref).offset().top - navHeight + 5
       }, 1000);
       
       e.preventDefault();
   });
});

// ekko-lightbox

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });