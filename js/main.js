var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    loop:true,
    spaceBetween: 50,
    freeMode: true,
    centeredSlides: false,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    centeredSlides: false,
    loopAdditionalSlides: 5,
    breakpoints: {
        // Настройки для разных размеров экрана (опционально)
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView:'auto',
          spaceBetween: 50,
          centeredSlides: false, 
          slidesOffsetBefore: 0, 
          loop: true,
        },
        1920:{
            slidesPerView: 'auto',
            spaceBetween: 50,
            centeredSlides: false, 
            slidesOffsetBefore: 0, 
            loop: true,
            
        }
    },

});
