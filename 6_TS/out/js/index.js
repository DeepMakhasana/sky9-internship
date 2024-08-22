import { convertIntoSmallLength, getProducts } from "./utils.js";
$(document).ready(function () {
    let products;
    function appendProducts(products) {
        products?.forEach((product, i) => {
            $("#productContainer").append(`<div class="col-12 col-sm-6 col-md-4" style="max-width: 18rem">
            <div class="card">
              <div style="min-height: 200px" class="d-flex justify-content-center align-items-center">
                <img
                  src=${product.image}
                  style="object-fit: cover"
                  class="card-img-top w-50 mx-auto"
                  alt="product"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">${convertIntoSmallLength(product.title, 30)}</h5>
                <div class="d-flex justify-content-between align-items-center my-2">
                  <h6 class="my-0">Price: $${product.price}</h6>
                  <p class="my-0">Rating: ${product.rating.rate}</p>
                </div>
                <p class="card-text">
                  ${convertIntoSmallLength(product.description, 94)}
                </p>
                <button id=${product.id} data-temp=${i} class="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>`);
        });
    }
    const loadProduct = async () => {
        $("#productContainer").text("Loading...");
        products = await getProducts();
        if (products?.length) {
            $("#productContainer").text("");
            appendProducts(products);
        }
    };
    // first time fetch and load products
    loadProduct();
    // filter by rating
    $("#sortByRating").on("click", function () {
        $(this).addClass("btn-primary text-white");
        $("#priceAscending").removeClass("btn-primary text-white");
        $("#priceDescending").removeClass("btn-primary text-white");
        products = products.sort((p1, p2) => p2.rating.rate - p1.rating.rate);
        $("#productContainer").text("");
        appendProducts(products);
    });
    // filter by price low to high
    $("#priceAscending").on("click", function () {
        $(this).addClass("btn-primary text-white");
        $("#sortByRating").removeClass("btn-primary text-white");
        $("#priceDescending").removeClass("btn-primary text-white");
        products = products.sort((p1, p2) => p1.price - p2.price);
        $("#productContainer").text("");
        appendProducts(products);
    });
    // filter by price high to low
    $("#priceDescending").on("click", function () {
        $(this).addClass("btn-primary text-white");
        $("#priceAscending").removeClass("btn-primary text-white");
        $("#sortByRating").removeClass("btn-primary text-white");
        products = products.sort((p1, p2) => p2.price - p1.price);
        $("#productContainer").text("");
        appendProducts(products);
    });
});
