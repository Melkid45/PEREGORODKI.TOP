function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}



SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 600,
    // Размер шага в пикселях 
    stepSize         : 45,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 100,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})

$('.form__open').on('click', function(e){
    $('.feedback').addClass('active')
    $('body').addClass('hidden')
})
$('.feedback__body-close').on('click', function(e){
    $('.feedback').removeClass('active')
    $('body').removeClass('hidden')
})
$('.header__body-btns-burger').on('click', function(e){
    $('.header__body-menu').toggleClass('active')
    $(this).toggleClass('active')
})




var splide = new Splide( '#works', {
    pagination: false,
    focus: 'center'
    } );
    
    splide.mount();
var splide = new Splide( '#splide1', {
    pagination: false,
    } );
    
    splide.mount();
var splide = new Splide( '#splide2', {
    pagination: false,
    } );
    
    splide.mount();
var splide = new Splide( '#splide3', {
    pagination: false,
    } );
    
    splide.mount();