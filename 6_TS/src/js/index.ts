import { CartProductType, ProductType } from "../types/product.js";
import { convertIntoSmallLength, getProducts, getLocalStorage, setLocalStorage } from "./utils.js";

$(document).ready(function () {
  let products: ProductType[];
  let cartProducts: CartProductType[] = getLocalStorage("cart-product");

  // append products in products page
  function appendProducts(products: ProductType[]) {
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
                <button  class="btn btn-primary addToCartBtn" id=${product.id} data-temp=${i}>Add to cart</button>
              </div>
            </div>
          </div>`);
    });
    updateAddToCartBtn();
  }

  // query product from api and load on DOM
  const loadProduct = async () => {
    $("#productContainer").text("Loading...");
    products = await getProducts();

    if (products?.length) {
      $("#productContainer").text("");
      appendProducts(products);
      // add to card btn action
      $(".card button").on("click", function () {
        addToCardProduct(Number($(this).attr("id")));
      });
      // load local storage data to DOM
      loadLocalStorageCartData();
    }
  };
  // first time fetch and load products
  loadProduct();
  // first time update cart count
  updateCartTotal();

  // filter a products --------------------------------------------------------------------
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

  // ---------------------------------------------------------------------------

  // add to cart ------------------------------------------------------------------------------------
  function appendCartProducts(products: CartProductType[]) {
    $("#cartProductContainer").html("");
    if (cartProducts.length === 0) {
      $("#cartProductContainer").html('<p class="card-text text-center text-black-50">Not have products selected.</p>');
    }
    products?.forEach((product, i) => {
      $("#cartProductContainer").append(`<div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-4 p-2">
                    <img
                      src=${product.image}
                      class="img-fluid rounded-start"
                      alt=${product.title}
                    />
                  </div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">${convertIntoSmallLength(product.title, 30)}</h5>
                      <div class="d-flex justify-content-between align-items-center my-2">
                        <h6 class="my-0">Price: $${product.price}</h6>
                        <p class="my-0">Rating: ${product.rating.rate}</p>
                      </div>
                      <div class="d-flex justify-content-between align-item-center my-3">
                        <div class="input-group">
                          <span data-temp=${i} class="incrementQuantity btn btn-outline-primary" id="basic-addon1">+</span>
                          <input
                            type="text"
                            disabled
                            class="form-control"
                            value=${product.quantity}
                            style="max-width: 50px; text-align: center"
                          />
                          <span data-temp=${i} class="decrementQuantity btn btn-outline-primary" id="basic-addon1">-</span>
                          </div>
                          <button data-temp=${
                            product.id
                          } class="removeItem btn btn-outline-primary" id="basic-addon1">remove</button>
                      </div>
                      <p class="card-text"><small class="text-body-secondary">${product.quantity} pice price is $${
        product.quantity * product.price
      }</small></p>
                    </div>
                  </div>
                </div>
              </div>`);
    });

    // increment product quantity in add to card
    $(".incrementQuantity").on("click", function () {
      const { quantity, price } = incrementCardProductQuantity(Number($(this).attr("data-temp")));
      // update in DOM
      $(this).siblings("input").val(quantity);
      $(this)
        .parentsUntil(".card")
        .children(".card-body")
        .children(".card-text")
        .children("small")
        .text(`${quantity} pice price is ${(price * quantity).toFixed(2)}`);
    });

    // decrement product quantity in add to card
    $(".decrementQuantity").on("click", function () {
      const { quantity, price } = decrementCardProductQuantity(Number($(this).attr("data-temp")));
      // update in DOM
      if (quantity >= 0) {
        $(this).siblings("input").val(quantity);
        $(this)
          .parentsUntil(".card")
          .children(".card-body")
          .children(".card-text")
          .children("small")
          .text(`${quantity} pice price is ${(price * quantity).toFixed(2)}`);
      }
    });

    // remove product from cart
    $(".removeItem").on("click", function () {
      removeCartProduct(Number($(this).attr("data-temp")));
    });

    updateCartTotal();
    updateCartProductCount();
  }

  // first time load data from localStorage
  function loadLocalStorageCartData() {
    appendCartProducts(cartProducts);
  }

  // add one product in cart
  function addToCardProduct(id: number) {
    const selectedProduct = products.filter((product) => product.id === id);
    const isExist = cartProducts.filter((product) => product.id === id);
    if (isExist.length) {
      removeCartProduct(id);
    } else {
      cartProducts.push({ ...selectedProduct[0], quantity: 1 });
      setLocalStorage("cart-product", cartProducts);
      appendCartProducts(cartProducts);
      $(`#${id}`).text("Remove");
    }
  }

  // increment cart product quantity
  function incrementCardProductQuantity(index: number): { quantity: number; price: number } {
    cartProducts[index].quantity += 1;
    updateCartTotal();
    setLocalStorage("cart-product", cartProducts);
    return {
      quantity: cartProducts[index].quantity,
      price: cartProducts[index].price,
    };
  }

  // decrement cart product quantity
  function decrementCardProductQuantity(index: number): { quantity: number; price: number } {
    if (cartProducts[index].quantity <= 0) {
      removeCartProduct(cartProducts[index].id);
    }
    cartProducts[index].quantity -= 1;
    updateCartTotal();
    setLocalStorage("cart-product", cartProducts);
    return {
      quantity: cartProducts[index].quantity,
      price: cartProducts[index].price,
    };
  }

  // cart total counter
  function removeCartProduct(id: number) {
    cartProducts = cartProducts.filter((product) => product.id != id);

    // update in DOM
    appendCartProducts(cartProducts);
    setLocalStorage("cart-product", cartProducts);
    // update add to cart btn on product page
    $(`#${id}`).text("Add to cart");
  }

  // cart total counter
  function updateCartTotal() {
    const total = cartProducts.reduce((acc, currentItem) => {
      return acc + currentItem.quantity * currentItem.price;
    }, 0);

    // update in DOM
    $("#cartTotalAmount").text(`Total amount: $${total.toFixed(2)}`);
  }

  // cart total counter
  function updateCartProductCount() {
    $("#cartCount").text(cartProducts.length);
  }

  // update add to cart btn from product page
  function updateAddToCartBtn() {
    console.log("update btn:");
    // update add to cart btn to remove btn
    cartProducts.forEach((product) => {
      console.log(`#${product.id}`);
      $(`#${product.id}`).text("Remove");
    });
  }
});
