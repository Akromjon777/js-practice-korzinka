window.addEventListener("DOMContentLoaded", () => {
  const elProducts = document.querySelectorAll(".product");
  const elBtns = document.querySelectorAll("button");
  const elOpenBtn = document.querySelector(".open");

  function createCart() {
    let newCart = document.createElement("div");
    let newField = document.createElement("div");
    let newHeading = document.createElement("h2");
    let newBtn = document.createElement("button");

    newCart.classList.add("cart");
    newField.classList.add("cart-field");
    newBtn.classList.add("close");

    newHeading.textContent = "Your cart";
    newBtn.textContent = "Close";

    newCart.appendChild(newHeading);
    newCart.appendChild(newField);
    newCart.appendChild(newBtn);
    document.body.appendChild(newCart);
  }
  createCart();
  let newField = document.querySelector(".cart-field");
  let cart = document.querySelector(".cart");
  let closeBtn = document.querySelector(".close");

  elOpenBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  elBtns.forEach((el,i) => {
    el.addEventListener("click", () => {
        let cloneItem = elProducts[i].cloneNode(true);
        let btn = cloneItem.querySelector("button");
    btn.remove()
    newField.appendChild(cloneItem)
    elProducts[i].remove()
    })
  })
});
