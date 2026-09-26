// Offer Close

var promoBox = document.querySelector(".top-promo");

document.getElementById("promoCloseBtn").addEventListener("click", function () {
    promoBox.style.display = "none";
});


// Mobile Menu Open

var menuOpenBtn = document.getElementById("openMenuBtn");
var mobilePanel = document.querySelector(".mobile-panel");

menuOpenBtn.addEventListener("click", function () {
    mobilePanel.classList.add("active");
});


// Mobile Menu Close

document.getElementById("closeMenuBtn").addEventListener("click", function () {
    mobilePanel.classList.remove("active");
});


// Close Mobile Menu After Clicking a Link

var mobileLinks = document.querySelectorAll(".mobile-menu-item a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        mobilePanel.classList.remove("active");
    });

});


// Slider

var previousBtn = document.getElementById("prevSlideBtn");
var nextBtn = document.getElementById("nextSlideBtn");
var heroImages = document.querySelector(".hero-images");

var slidePosition = 0;


nextBtn.addEventListener("click", function () {

    slidePosition = slidePosition + 1;

    if (slidePosition > 2) {
        slidePosition = 0;
    }

    heroImages.style.transform =
        "translateX(-" + (slidePosition * 100) + "%)";

});


previousBtn.addEventListener("click", function () {

    if (slidePosition == 0) {
        slidePosition = 2;
    }
    else {
        slidePosition = slidePosition - 1;
    }

    heroImages.style.transform =
        "translateX(-" + (slidePosition * 100) + "%)";

});


// Most Wanted Heart

var wishlistButtons = document.querySelectorAll(".wishlist-icon");

wishlistButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");

        var heart = button.querySelector("i");

        if (button.classList.contains("active")) {

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");

        }
        else {

            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");

        }

    });

});


// Scroll Animation

window.addEventListener("scroll", function () {

    var revealItems = document.querySelectorAll(".reveal-section");

    revealItems.forEach(function (item) {

        var screenHeight = window.innerHeight;

        var itemPosition = item.getBoundingClientRect();

        if (screenHeight > itemPosition.top - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

});