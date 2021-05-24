window.addeventlistener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

$(document).ready(function(){
    $("#news-slider").owlCarousel({
       items:3,
       navigation:true,
       navigationText:["",""],
       autoPlay:true
    });
 });