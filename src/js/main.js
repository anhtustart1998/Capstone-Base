document.addEventListener("DOMContentLoaded", () => {
  // const header = document.getElementById("header");
  // const navigation = document.getElementById("navigation");
  // const hamburger = document.getElementById("hamburger");
  // const pagesDropdown = document.getElementById("pagesDropdown");
  // const dropdown = document.getElementById("dropdown");
  // const themeToggleBtn = document.getElementById("theme-toggle");
  // const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  // const themeToggleLightIcon = document.getElementById(
  //   "theme-toggle-light-icon"
  // );

  // // Sticky header
  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset > 20) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // });

  // // Mobile menu toggle
  // hamburger.addEventListener("click", () => {
  //   navigation.classList.toggle("h-auto");
  //   navigation.classList.toggle("invisible");
  // });

  // // Pages dropdown toggle
  // pagesDropdown.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   dropdown.classList.toggle("hidden");
  //   dropdown.classList.toggle("flex");
  // });

  // // Dark mode toggle
  // function setDarkMode(isDark) {
  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //     themeToggleLightIcon.classList.remove("hidden");
  //     themeToggleDarkIcon.classList.add("hidden");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     themeToggleLightIcon.classList.add("hidden");
  //     themeToggleDarkIcon.classList.remove("hidden");
  //   }
  //   localStorage.setItem("darkMode", isDark);
  // }

  // // Check for saved dark mode preference or use system preference
  // if (
  //   localStorage.getItem("darkMode") === "true" ||
  //   (!("darkMode" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   setDarkMode(true);
  // } else {
  //   setDarkMode(false);
  // }

  // // Toggle theme
  // themeToggleBtn.addEventListener("click", () => {
  //   setDarkMode(!document.documentElement.classList.contains("dark"));
  // });

  // // Price Switcher
  // const toggle = document.getElementById("toggle");
  // const starterCost = document.getElementById("starter-cost");
  // const growthCost = document.getElementById("growth-cost");
  // const businessCost = document.getElementById("business-cost");

  // toggle.addEventListener("change", function () {
  //   if (this.checked) {
  //     starterCost.innerHTML = `$149
  //                 <span
  //                   class="inline-block text-sm text-black dark:text-white"
  //                   >/per year</span
  //                 >`;
  //     growthCost.innerHTML = `$608
  //                 <span
  //                   class="inline-block text-sm text-black dark:text-white"
  //                   >/per year</span
  //                 >`;
  //     businessCost.innerHTML = `$1568
  //                 <span
  //                   class="inline-block text-sm text-black dark:text-white"
  //                   >/per year</span
  //                 >`;
  //   } else {
  //     starterCost.innerHTML = `$29
  //                 <span
  //                   class="inline-block text-sm text-black dark:text-white"
  //                   >/per month</span
  //                 >`;
  //     growthCost.innerHTML = `$59
  //                 <span
  //                   class="inline-block text-sm text-black dark:text-white"
  //                   >/per month</span
  //                 >`;
  //     businessCost.innerHTML = `$139
  //                 <span
  //                   class="inline-block text-sm text-black dark:text-white"
  //                   >/per month</span
  //                 >`;
  //   }
  // });

  // Tab Button Operation
  var projectTabBTN = document.querySelectorAll(".project-tab-btn");
  var projectsWrapper = document.querySelector(".projects-wrapper");

  var iso = new Isotope(projectsWrapper, {
    itemSelector: ".project-item",
    masonry: {
      columnWidth: ".project-sizer",
    },
  });

  projectTabBTN.forEach(function (btn) {
    btn.addEventListener("click", function () {
      projectTabBTN.forEach(function (btn) {
        btn.classList.remove("bg-primary", "text-white");
      });

      btn.classList.add("bg-primary", "text-white");

      var selector = btn.getAttribute("data-filter");

      iso.arrange({
        filter: selector,
      });
    });
  });
  // Testimonial Swiper
  const testimonial01 = new Swiper(".testimonial-01", {
    loop: true,
    spaceBetween: 50,
    centeredSlides: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// Scroll to Top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function toggleScrollToTopButton() {
  if (window.pageYOffset > 50) {
    scrollToTopBtn.classList.remove("hidden");
    scrollToTopBtn.classList.add("flex");
  } else {
    scrollToTopBtn.classList.remove("flex");
    scrollToTopBtn.classList.add("hidden");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleScrollToTopButton);

// Scroll Reveal
window.sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: false,
});

sr.reveal(`.animate_top`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.animate_left`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.animate_right`, {
  origin: "right",
  interval: 100,
});
