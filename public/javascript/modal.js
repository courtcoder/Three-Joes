const cartButton = document.querySelector("#cart-button");
const submitOrder = document.querySelector("#submit-order");
const exitModal = document.querySelectorAll("#exit-modal");

let prodArray = [];
let htmlArr = [];

for (i of exitModal) {
  i.addEventListener("click", function () {
    closeModal();
  });
}

function activateModal() {
  htmlArr = [];
  document.getElementById("product-display").innerHTML = "";

  console.log("button clicked");
  const modal = document.querySelector(".modal");
  modal.classList.add("is-active");

  prodArray.forEach((item) => {
    console.log(item[1]);
    let htmltemplate = `<div class="column is-one-quarter ">
        <div class="box has-text-centered">
          <img src="../images/${item[1]}.jpg" alt="Def not a kitty" />
          <div class="mt-3">${item[0]}</div>
        </div>
      </div>`;

    htmlArr.push(htmltemplate);
  });

  console.log(htmlArr);
  document.getElementById("product-display").innerHTML = htmlArr.join("");
}

function addCartItem(item) {
  console.log(item);
  prodArray = [];
  for (let i = 0; i < item.length; i++) {
    const newItem = Object.values(item[i]);
    prodArray.push([newItem[1], newItem[3]]);
  }
}

function proceedToPayment() {
  console.log("this works");
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.remove("is-active");
}

cartButton.addEventListener("click", activateModal);
submitOrder.addEventListener("click", proceedToPayment);
