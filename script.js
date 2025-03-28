// menu

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});



// jQueryslide  slide 
$(document).ready(function(){
    $('.slide').first().addClass('active');

    $('#next').click(function(){
        let currentSlide = $('.slide.active');
        let nextSlide = currentSlide.next('.slide');

        if(nextSlide.length){
            currentSlide.removeClass('active');
            nextSlide.addClass('active');
        }
    });

    $('#prev').click(function(){
        let currentSlide = $('.slide.active');
        let prevSlide = currentSlide.prev('.slide');

        if(prevSlide.length){
            currentSlide.removeClass('active');
            prevSlide.addClass('active');
        }
    });
});