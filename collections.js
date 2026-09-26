import { catalogProducts } from "./products.js";


/* Mobile Menu */

var collectionMenuOpen = document.getElementById("collectionMenuOpen");

var collectionMobilePanel = document.querySelector(".mobile-panel");


collectionMenuOpen.addEventListener("click", function () {

    collectionMobilePanel.classList.add("active");

});


document.getElementById("collectionMenuClose").addEventListener("click", function () {

    collectionMobilePanel.classList.remove("active");

});


var collectionMenuLinks = document.querySelectorAll(".mobile-menu-item a");


collectionMenuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        collectionMobilePanel.classList.remove("active");

    });

});


/* Display Products */

var productContainer = document.querySelector(".catalog-items");


catalogProducts.forEach(function (product) {

    var productCard = document.createElement("div");

    productCard.classList.add("catalog-card");

    productCard.innerHTML = `
        <img src="./Images/${product.src}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <span class="product-tags">${product.tags.join(",")}</span>
    `;

    productContainer.append(productCard);

});


/* Product Filter */

var selectedFilters = [];

var filterInputs = document.getElementsByName("tags");


filterInputs.forEach(function (filter) {

    filter.addEventListener("change", function (event) {

        if (event.target.checked) {

            selectedFilters.push(event.target.value);

        } else {

            selectedFilters = selectedFilters.filter(function (item) {

                return item !== event.target.value;

            });

        }

        updateProducts();

    });

});


/* Update Products */

function updateProducts() {

    var productCards = document.querySelectorAll(".catalog-card");


    productCards.forEach(function (card) {

        var productTags = card.querySelector(".product-tags").innerHTML;

        var tagArray = productTags.split(",");

        var showProduct = false;


        selectedFilters.forEach(function (selectedTag) {

            tagArray.forEach(function (productTag) {

                if (selectedTag === productTag) {

                    showProduct = true;

                }

            });

        });


        if (selectedFilters.length === 0) {

            card.style.display = "block";

        } else if (showProduct) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}