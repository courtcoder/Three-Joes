var buttonClicked = document.querySelector("#menu-button");
var orderArr = [ ];    
var buttonHandler = function(event) {
    event.preventDefault();
    
    var wtf = event.target.dataset.id;
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

        console.log(`orderLine: ${orderLine}`);

        

        orderArr.push(orderLine);

        console.log(`orderArr: ${JSON.stringify(orderArr)}`);

    });
}









buttonClicked.addEventListener("click", buttonHandler);












