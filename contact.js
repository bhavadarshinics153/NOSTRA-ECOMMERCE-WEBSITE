var contactMenuOpen = document.getElementById("contactMenuOpen");

var contactMobilePanel = document.querySelector(".mobile-panel");

contactMenuOpen.addEventListener("click", function () {

    contactMobilePanel.classList.add("active");

});


document.getElementById("contactMenuClose").addEventListener("click", function () {

    contactMobilePanel.classList.remove("active");

});


var contactMenuLinks = document.querySelectorAll(".mobile-menu-item a");

contactMenuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        contactMobilePanel.classList.remove("active");

    });

});



