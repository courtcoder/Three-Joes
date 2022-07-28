var buttonClicked = document.querySelector("#menu-button");
var orderArr = [ ];    
var buttonHandler = function(event) {
    event.preventDefault();
    
    var wtf = event.target.id;
    //alert(wtf);
    console.log(wtf);
    getProductData(wtf);
};


function getProductData(pid) {
    
    fetch(`/api/products/${(pid)}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        var id = data.id;
        var prod_name = data.prod_name;
        var prod_desc = data.prod_desc;
        var price = data.price;

        var orderLine = {
            id: id,
            prod_name: prod_name,
            prod_desc: prod_desc,
            price: price
        };


        // just tests to confirm proper functionality
        // console.log(`orderLine: ${orderLine}`);

        orderArr.push(orderLine);

        console.log(`orderArr: ${JSON.stringify(orderArr)}`);

        // pushing data to the modal, but this doesn't display in the modal as the modal is part of the main.handlebars page. Was just a test to see if
        // I could call to another page.
        // addCartItem(orderArr);

    });
}









buttonClicked.addEventListener("click", buttonHandler);












