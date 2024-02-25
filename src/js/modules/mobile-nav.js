function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");

  // Add click event to mobile nav button
  navBtn.onclick = function () {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  };

  // Add click event to nav links
  const navLinks = document.querySelectorAll(".mobile-nav__list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Close mobile nav after clicking a link
      nav.classList.remove("mobile-nav--open");
      menuIcon.classList.remove("nav-icon--active");
      document.body.classList.remove("no-scroll");
    });
  });
}

export default mobileNav;
