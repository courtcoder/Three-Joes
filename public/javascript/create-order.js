var buttonClicked = document.querySelector("#menu-button");
var orderArr = [];

var buttonHandler = function (event) {
  event.preventDefault();

  if (event.target.classList.contains("order-button")) {
    var wtf = event.target.id;
    //alert(wtf);
    getProductData(wtf);
  }
};

function getProductData(pid) {
  fetch(`/api/products/${pid}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var id = data.id;
      var prod_name = data.prod_name;
      var prod_desc = data.prod_desc;
      var img_id = data.img_id;
      var price = data.price;

      var orderLine = {
        id: id,
        prod_name: prod_name,
        prod_desc: prod_desc,
        img_id: img_id,
        price: price,
      };

      orderArr.push(orderLine);

      addCartItem(orderArr);
    });
}

buttonClicked.addEventListener("click", buttonHandler);
