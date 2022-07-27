const cartButton = document.querySelector("#cart-button");
const submitOrder = document.querySelector("#submit-order");
const exitModal = document.querySelectorAll("#exit-modal");

for (i of exitModal) {
  i.addEventListener("click", function () {
    closeModal();
  });
}

function activateModal() {
  console.log("button clicked");
  const modal = document.querySelector(".modal");
  modal.classList.add("is-active");
}

function addCartItem(item) {
  // test to make sure it reaches the modal script
  console.log(`item on modal: ${JSON.stringify(item)}`);
  

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
