let menu = document.querySelector('.menu-icon');


menu.onclick = () => {
    menu.classList.toggle("move");
};
var swiper = new Swiper(".categorySwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       280: {
        slidesPerView:1,
        spaceBetween:10,
       } ,
       510: {
        slidesPerView:2,
        spaceBetween:10,
       } ,
       750: {
        slidesPerView:3,
        spaceBetween:15,
       } ,
       900: {
        slidesPerView:4,
        spaceBetween:20,
       },
    },
  });
  var swiper = new Swiper(".selling-slider", {
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       280: {
        slidesPerView:1,
        spaceBetween:10,
       } ,
       510: {
        slidesPerView:2,
        spaceBetween:10,
       } ,
       750: {
        slidesPerView:3,
        spaceBetween:15,
       } ,
       920: {
        slidesPerView:4,
        spaceBetween:20,
       },
    },
  });
  const animate = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:"2000",
    delay:"400",
  });
  animate.reveal(".nav,heading");
  animate.reveal(".backpack-content",{origin:"left"});
  animate.reveal(".hero-img img,.btn,.btn img, .backpack img",{origin:"bottom"});
  animate.reveal(".category-box,.product-box,.barnd-box,.blogs-box",{intreval:"100"});