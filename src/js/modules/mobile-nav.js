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
    link.addEventListener("click", function (event) {
      // Close mobile nav after clicking a link
      nav.classList.remove("mobile-nav--open");
      menuIcon.classList.remove("nav-icon--active");
      document.body.classList.remove("no-scroll");

      // Check if the clicked link has the contact-link class
      if (event.target.classList.contains("contact-link")) {
        // Prevent the default link behavior and scroll to the bottom
        event.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      }
    });
  });
}

export default mobileNav;
