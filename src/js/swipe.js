var swiperAboutRight = new Swiper('.swiper-about-right', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var swiperAboutLeft = new Swiper('.swiper-about-left', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  var swiperHotleLeft = new Swiper('.swiper-hotel-left', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  var swiperHotleRight = new Swiper('.swiper-hotel-right', {
    slidesPerView: 'auto',
    spaceBetween: 24,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  var swiperMainRight = new Swiper('.swiper-details-right', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    mousewheel: {
      sensitivity: 1,
    },
    breakpoints: {
      1024: {
        spaceBetween: 34,
      },
      1280: {
        spaceBetween: 86,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  var swiperRoom = new Swiper('.room-hero-swiper', {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
      nextEl: document.querySelector('.room-hero-right'),
      prevEl: document.querySelector('.room-hero-left'),
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  