var title = document.getElementById("product_title");
var price = document.getElementById("product_price");
var product_url = document.getElementById("product_url");
var allItems = document.getElementsByClassName("product_img");
var balanceElement = document.getElementById("balance");
var cart = document.getElementById("cart");
var checkout = document.getElementById("checkout");
var currBalance = 0;
var numOfItems = allItems.length;
var items;

let name = localStorage.getItem("set")
document.getElementById("username").innerText = name


items = [
    {
        name: "olive oil",
        productPrice: "$25",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    },
    {
        name: "stylish Joggers",
        productPrice: "$15",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    },
    {
        name: "Handbag",
        productPrice: "$20",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    },
    {
        name: "Wall Decor",
        productPrice: "$10",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    },
    {
        name: "T900 Smart watch",
        productPrice: "$40",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    },
    {
        name: "Unisex Joggers",
        productPrice: "$30",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    },
    {
        name: "Mens Facewash",
        productPrice: "$5",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    },
    {
        name: "Handbag",
        productPrice: "$20",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    },
    {
        name: "Wall lamp",
        productPrice: "$35",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    },
    {
        name: "Travel charger",
        productPrice: "$25",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    },
    {
        name: "Gaming Controller",
        productPrice: "$50",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    },
    {
        name: "Back pack",
        productPrice: "$20",
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    },
];
var notify = function (msg) {
    document.getElementById("notification").classList.remove("hidden");
    document.getElementById("notification").innerText = msg;
    setTimeout(function () {
        document.getElementById("notification").classList.add("hidden");
    }, 3000);
};
var _loop_1 = function (i) {
    allItems[i].addEventListener("click", function () {
        title.innerText = items[i].name;
        price.innerText = items[i].productPrice;
        product_url.setAttribute("src", items[i].url);
        cart.onclick = function () {
            notify("".concat(items[i].name, " added to cart now checkout!"));
        };
        checkout.onclick = function (e) {
            e.stopPropagation();
            var product_price = items[i].productPrice;
            product_price = Number(product_price.slice(1));
            if (product_price > currBalance) {
                notify("You don't have enough balance to buy this product");
            }
            else {
                currBalance -= product_price;
                balanceElement.innerText = "$" + currBalance;
                notify("wow you bought ".concat(items[i].name));
            }
        };
    });
};
for (var i = 0; i <= numOfItems; i++) {
    _loop_1(i);
}
function incrementBalance() {
    currBalance++;
    balanceElement.innerText = "$" + currBalance;
}

/*SORTING products*/

function showAll(){
    for(let i =0;i<=numOfItems;i++){
        allItems[i].classList.remove("hidden");
    }
}

function showShoes(){
    for(let i =0;i<=numOfItems;i++){
        allItems[i].classList.add("hidden");
        if(i===1|i===5){
            allItems[i].classList.remove("hidden");
        }
    }
}
function showBags(){
    for(let i =0;i<=numOfItems;i++){
        allItems[i].classList.add("hidden");
        if(i===2|i===7|i===11){
            allItems[i].classList.remove("hidden");
        }
    }
}
function showElectronics(){
    for(let i =0;i<=numOfItems;i++){
        allItems[i].classList.add("hidden");
        if(i===4|i===8|i===9){
            allItems[i].classList.remove("hidden");
        }
    }
}
function showGaming(){
    for(let i =0;i<=numOfItems;i++){
        allItems[i].classList.add("hidden");
        if(i===10){
            allItems[i].classList.remove("hidden");
        }
    }
}

