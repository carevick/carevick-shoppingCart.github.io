//toggle between show and hide cart content:
const main = document.querySelector("main");

function showCartItems() {
  main.classList.toggle("main-show");
}

//scroll to next/previous list item:
const ul = document.querySelector("ul");

function scrollUpButton() {
  document.querySelector(".scroll-up_button");

  ul.scrollBy({
    top: -132,
    left: 0,
    behavior: "smooth",
  });
}

function scrollDownButton() {
  document.querySelector(".scroll-down_button");

  ul.scrollBy({
    top: 133,
    left: 0,
    behavior: "smooth",
  });
}

//create header on top of cart-items container with number of items in list
const cartItems = document.querySelector(".cart-items");
const header = document.createElement("h2");
cartItems.insertBefore(header, cartItems.firstChild);

const listItem = document.querySelectorAll("li");
const numOfItems = listItem.length;

header.innerHTML = `My Cart (${numOfItems} items)`;
