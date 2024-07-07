export {};
var title = document.getElementById("product_title");
var price = document.getElementById("product_price");
var product_url = document.getElementById("product_url");
var allItems = document.getElementsByClassName("product_img");
var balanceElement = document.getElementById("balance");
var cart = document.getElementById("cart");
var checkout = document.getElementById("checkout")
var currBalance: number = 0;
var numOfItems = allItems.length;
var items: any;
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

const notify = (msg) => {
  document.getElementById("notification")!.classList.remove("hidden");
  document.getElementById("notification")!.innerText = msg;
  setTimeout(() => {
    document.getElementById("notification")!.classList.add("hidden");
  }, 3000);
};

for (let i = 0; i <= numOfItems; i++) {
  allItems[i].addEventListener("click", () => {
    title!.innerText = items[i].name;
    price!.innerText = items[i].productPrice;
    product_url!.setAttribute("src", items[i].url);
    cart!.onclick = () => {
      notify(`${items[i].name} added to cart now checkout!`);
    };
    checkout!.onclick = (e)=>{
      e.stopPropagation()
      let product_price = items[i].productPrice
      product_price = Number(product_price.slice(1))
      if(product_price>currBalance){
          notify("You don't have enough balance to buy this product");
      }else{
          currBalance-=product_price;
          balanceElement!.innerText = "$"+currBalance
          notify(`wow you bought ${items[i].name}`)
      }
    }
  });
}

function incrementBalance() {
  currBalance++;
  balanceElement!.innerText = "$" + currBalance;
}

/*TRANSACTION HANDLE*/

