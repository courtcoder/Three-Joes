const cartButton = document.querySelector("#cart-button");
const submitOrder = document.querySelector("#submit-order");
const exitModal = document.querySelectorAll("#exit-modal");
const proceedToPayment = document.querySelector("#proceed-button");

let prodArray = [];
let previewHtml = [];
let breakdownHtml = [];
let priceArray = [];

for (i of exitModal) {
  i.addEventListener("click", function () {
    closeModal();
  });
}

function activateModal() {
  previewHtml = [];
  breakdownHtml = [];
  document.getElementById("product-display").innerHTML = "";
  proceedToPayment.classList.remove("is-hidden");

  const modal = document.querySelector(".modal");
  modal.classList.add("is-active");

  generateItems();
  generateTotal();
}

function addCartItem(item) {
  prodArray = [];
  priceArray = [];
  for (let i = 0; i < item.length; i++) {
    const newItem = Object.values(item[i]);
    prodArray.push([newItem[1], newItem[3], newItem[4]]);

    let stringToNumber = parseFloat(newItem[4]);
    priceArray.push(stringToNumber);
    console.log(priceArray);
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("is-active");

  proceedToPayment.innerHTML = "PROCEED TO PAYMENT";
  document.getElementById("product-display").classList.remove("is-hidden");
  document.getElementById("order-breakdown").classList.remove("is-hidden");
  document.getElementById("payment-info").classList.add("is-hidden");
}

generateItems = () => {
  if (prodArray.length === 0) {
    console.log("no items in cart");

    document.getElementById(
      "product-display"
    ).innerHTML = `<div class="column is-full has-text-centered">
      <p>Your cart is empty!? Better go order some cheese sticks like rn!</p>
    </div>`;

    document.getElementById("order-breakdown").classList.add("is-hidden");
  } else {
    document.getElementById("order-breakdown").classList.remove("is-hidden");

    populateModalFields();
  }
};

populateModalFields = () => {
  prodArray.forEach((item) => {
    let itemPreview = `<div class="column is-one-quarter ">
        <div class="box has-text-centered">
          <img src="../images/${item[1]}.jpg" alt="${item[1]}" />
          <div class="mt-3">${item[0]}</div>
        </div>
      </div>`;

    previewHtml.push(itemPreview);

    let itemBreakdown = `<div class="column is-four-fifths">
      <p class="title is-5" id="item-name">
        ${item[0]}
      </p>
    </div>
    <div class="column is-one-fifth">
      <p class="title is-5" id="item-price">
        ${item[2]}
      </p>
    </div>`;

    breakdownHtml.push(itemBreakdown);
  });
  document.getElementById("product-display").innerHTML = previewHtml.join("");
  document.getElementById("item-breakdown").innerHTML = breakdownHtml.join("");
};

generateTotal = () => {
  let priceTotal = 0;

  console.log(priceArray);

  for (let i = 0; i < priceArray.length; i++) {
    priceTotal += priceArray[i];
  }

  document.getElementById(
    "order-total"
  ).innerHTML = `<p>Total: <span class="has-text-success">$${priceTotal.toFixed(
    2
  )}</span></p>`;

  document.getElementById(
    "secondary-total"
  ).innerHTML = `<p>Total: <span class="has-text-success">$${priceTotal.toFixed(
    2
  )}</span></p>`;
};

makePayment = () => {
  proceedToPayment.classList.add("is-hidden");

  document.getElementById("payment-info").classList.remove("is-hidden");
  document.getElementById("product-display").classList.add("is-hidden");
  document.getElementById("order-breakdown").classList.add("is-hidden");
};

cartButton.addEventListener("click", activateModal);
proceedToPayment.addEventListener("click", makePayment);
