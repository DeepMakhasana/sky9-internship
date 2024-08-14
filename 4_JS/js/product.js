import { getProduct, convertIntoSmallLength } from "./utils.js";

const productContainer = document.getElementById("productContainer");

// load list of product
function createProductElemet(product) {
  // product parent
  const productParent = document.createElement("div");
  productParent.setAttribute("class", "col-12 col-sm-6 col-md-4");
  productParent.setAttribute("style", "max-width: 18rem;");

  // product card
  const productCard = document.createElement("div");
  productCard.setAttribute("class", "card");

  // product card info
  const productCardInfoParent = document.createElement("div");
  productCardInfoParent.setAttribute("class", "card-body");

  // product card img
  const productCardImgParent = document.createElement("div");
  productCardImgParent.setAttribute(
    "class",
    "d-flex justify-content-center align-items-center"
  );
  productCardImgParent.setAttribute("style", "min-height: 200px;");

  // product img
  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);
  productImage.setAttribute("alt", product.title);
  productImage.setAttribute("class", "card-img-top w-50 mx-auto");

  //  product title
  const productTitle = document.createElement("h5");
  productTitle.setAttribute("class", "card-title");
  productTitle.innerText = convertIntoSmallLength(product.title, 20);

  //  product price
  const productPrice = document.createElement("h6");
  productPrice.innerText = product.price;

  // product description
  const productDescription = document.createElement("p");
  productDescription.setAttribute("class", "card-text");
  productDescription.innerText = convertIntoSmallLength(
    product.description,
    96
  );

  // appending child to parent
  productCardImgParent.appendChild(productImage);
  productCardInfoParent.appendChild(productTitle);
  productCardInfoParent.appendChild(productPrice);
  productCardInfoParent.appendChild(productDescription);

  productCard.appendChild(productCardImgParent);
  productCard.appendChild(productCardInfoParent);

  productParent.appendChild(productCard);

  return productParent;
}

addEventListener("load", async () => {
  productContainer.innerText = "Loading...";
  const products = await getProduct();
  if (products?.length) {
    productContainer.innerText = "";
  }
  products?.map((product) => {
    productContainer.appendChild(createProductElemet(product));
  });
});
