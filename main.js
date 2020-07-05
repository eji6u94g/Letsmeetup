// console.log('dojkfnosdnjfgnoriwngfi')
$('.howitworks').click(function(){
$('html,body').animate({scrollTop:$('#howitworks').offset().top},"slow");
});
$('.faq').click(function(){
$('html,body').animate({scrollTop:$('#faq').offset().top},"slow");
});

$(function(){
    $('.navbar li a').on('click', function(){
        if($(window).width() < 800){
            $('.navbar-toggle').click();
        }
    });
});
