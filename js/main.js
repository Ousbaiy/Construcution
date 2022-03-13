let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let ContactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  ContactInfo.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
  ContactInfo.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  ContactInfo.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  ContactInfo.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  ContactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  ContactInfo.classList.remove("active");
};

// home section swiper
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//Gallery Swipper

lightGallery(document.querySelector(".projects .box-container"));

// Yearly & Monthly Toggle
let month = document.querySelector(".price-toggler .month");
let year = document.querySelector(".price-toggler .year");

let monthAmount = document.querySelectorAll(".pricing .box .month");
let yearAmount = document.querySelectorAll(".pricing .box .year");

year.onclick = () => {
  year.classList.add("active");
  month.classList.remove("active");

  monthAmount.forEach((m) => {
    m.style.display = "none";
  });
  yearAmount.forEach((y) => {
    y.style.display = "block";
  });
};
month.onclick = () => {
  month.classList.add("active");
  year.classList.remove("active");

  monthAmount.forEach((m) => {
    m.style.display = "block";
  });
  yearAmount.forEach((y) => {
    y.style.display = "none";
  });
};