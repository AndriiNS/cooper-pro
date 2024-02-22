import mobileNav from "./modules/mobile-nav.js";
mobileNav();
//========================================================================================================================================================
//slider
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";
//========================================================================================================================================================
//swiper best sales
const swiper = new Swiper(".swiper", {
  // Optional parameters

  spaceBetween: 30,
  loop: true,

  speed: 1600,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev"
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
//========================================================================================================================================================
//swiper Newest
const swiperNewest = new Swiper(".swiper-newest", {
  spaceBetween: 30,

  loop: true,
  speed: 1600,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiperNewest-arrow-next",
    prevEl: ".swiperNewest-arrow-prev"
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
//========================================================================================================================================================
//swiper recommednded
const swiperRecommended = new Swiper(".swiper-recomended", {
  spaceBetween: 30,
  loop: true,

  speed: 1600,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiperRecomended-arrow-next",
    prevEl: ".swiperRecomended-arrow-prev"
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
//========================================================================================================================================================
//slider discount
const swiperDiscount = new Swiper(".swiper-discount", {
  spaceBetween: 30,

  speed: 1600,
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiperDiscount-arrow-next",
    prevEl: ".swiperDiscount-arrow-prev"
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
//========================================================================================================================================================
//slider opinion
const swiperOpinion = new Swiper(".swiper-opinion", {
  spaceBetween: 30,

  loop: true,
  speed: 1600,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiperOpinion-arrow-next",
    prevEl: ".swiperOpinion-arrow-prev"
  },
  breakpoints: {
    1240: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    450: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    }
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
//========================================================================================================================================================
const swiperHeader = new Swiper(".swiper-header", {
  slidesPerView: 1,
  spaceBetween: 100,
  speed: 1600,
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiperHeader-arrow-next",
    prevEl: ".swiperHeader-arrow-prev"
  },

  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
