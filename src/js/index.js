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
  spaceBetween: 300,
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
//========================================================================================================================================================
$(document).ready(function () {
  let currentPage = 1;
  const buttonsToShowLarge = 5;
  const buttonsToShowSmall = 4;

  function changePage(offset) {
    currentPage += offset;
    showPage(currentPage);
  }

  function showPage(pageNumber) {
    const pages = $(".news__content");
    const pageButtonsContainer = $(".news-nav__inner");
    const totalButtons = window.innerWidth < 375 ? buttonsToShowSmall : buttonsToShowLarge;

    if (pageNumber < 1) {
      currentPage = 1;
    } else if (pageNumber > pages.length) {
      currentPage = pages.length;
    } else {
      currentPage = pageNumber;
    }

    pages.filter(":visible").fadeOut(300, function () {
      pages.eq(currentPage - 1).fadeIn(300);
    });

    pageButtonsContainer.empty();

    let startIndex = Math.max(1, currentPage - Math.floor(totalButtons / 2));

    if (startIndex + totalButtons > pages.length) {
      startIndex = Math.max(1, pages.length - totalButtons + 1);
    }

    const arrowLeft = $("<button>", {
      class: "news__btn arrow-left",
      html: '<img src="./img/news-page/arrow-left.svg" alt="prev" />'
    });

    arrowLeft.appendTo(pageButtonsContainer);

    for (let i = 0; i < totalButtons; i++) {
      const button = $("<button>", {
        class: "news__btn page-btn",
        "data-page": startIndex + i,
        text: startIndex + i
      });

      if (startIndex + i === currentPage) {
        button.addClass("active");
      }

      button.appendTo(pageButtonsContainer);
    }

    const arrowRight = $("<button>", {
      class: "news__btn arrow-right",
      html: '<img src="./img/news-page/arrow-right.svg" alt="next" />'
    });

    arrowRight.appendTo(pageButtonsContainer);
  }

  showPage(currentPage);

  $(".news-nav__inner").on("click", ".page-btn", function () {
    const page = parseInt($(this).data("page"));

    $(".page-btn").removeClass("active");
    $(this).addClass("active");

    changePage(page - currentPage);
  });

  $(".news-nav__inner").on("click", ".arrow-left", function () {
    changePage(-1);
  });

  $(".news-nav__inner").on("click", ".arrow-right", function () {
    changePage(1);
  });
});
//========================================================================================================================================================
$(function () {
  $(".heart-btn").each(function () {
    var heartBtn = $(this);
    var heartIcon = heartBtn.find(".heart-icon");
    var index = $(".heart-btn").index(heartBtn);
    var isHeartActive = localStorage.getItem("isHeartActive_" + index) === "true";

    if (isHeartActive) {
      heartIcon.css("background-image", 'url("./img/products/active-heart.svg")');
    }

    heartBtn.click(function () {
      isHeartActive = !isHeartActive;

      if (isHeartActive) {
        heartIcon.css("background-image", 'url("./img/products/active-heart.svg")');
        displayNotification("Додано в обране", index);
      } else {
        heartIcon.css("background-image", 'url("./img/products/black-heart.svg")');
        displayNotification("Видалено з обраного", index);
      }

      localStorage.setItem("isHeartActive_" + index, isHeartActive.toString());
    });
  });
});

function displayNotification(message, index) {
  var notificationContainer = $("<div>").addClass("notification-container");
  var notificationMessage = $("<div>").addClass("notification-message").text(message);

  notificationContainer.append(notificationMessage);
  $("body").append(notificationContainer);

  setTimeout(function () {
    notificationContainer.remove();
  }, 2000);
}
