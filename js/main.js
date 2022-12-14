let ListProduct = [
    {
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./assets/img/1.png",
        category: 1
    },
    {
        id: 2,
        name: "Crispy Oven Baked Fish and Chips",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./assets/img/2.png",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./assets/img/3.png",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./assets/img/4.png",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./assets/img/5.png",
        category: 5
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./assets/img/6.png",
        category: 6
    }
]

let ListCategory = [
    {
        id: 1,
        name: "breakfast",
        image: "./assets/img/1_1.png"
    },
    {
        id: 2,
        name: "vegan",
        image: "./assets/img/1_2.png"
    },
    {
        id: 3,
        name: "meat",
        image: "./assets/img/1_3.png"
    },
    {
        id: 4,
        name: "dessert",
        image: "./assets/img/1_4.png"
    },
    {
        id: 5,
        name: "lunch",
        image: "./assets/img/1_5.png"
    },
    {
        id: 6,
        name: "chocolate",
        image: "./assets/img/1_6.png"
    }
];

function showProduct(data) {
    const popularList = document.querySelector(".main-content");
    if (popularList) {
        popularList.innerHTML = "";
        for (const item of data) {
            popularList.innerHTML += `
            <div class="main-item">
                <ul> 
                    <a href="./Detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                    <p class="title-food"><a href="./Detail.html?id=${item.id}">${item.name}</a></p>
                    <div class="detail">
                        <div class="time">
                            <img src="./assets/img/Time.png" alt="">
                            <p>30 Minutes</p>
                        </div>
                        <div class="food-name">
                            <img src="./assets/img/ForkKnife.png" alt="">
                            <p>Snack</p>
                        </div>
                    </div>
                </ul>
            </div>
            `
        }
    }
}
showProduct(ListProduct);




function showCategory() {
    const category = document.querySelector(".category-main");
    if (category) {
        for (const item of ListCategory) {
            category.innerHTML += `
            <div class="category-name">
                <img src="${item.image}" alt="">
                <p>${item.name}</p>
            </div>
            `
        }
    }
}
showCategory();

const filterSelect = document.querySelector("#filter-select")
function filterProduct() {
    const over30 = ListProduct.filter(function (item) {
        return item.price > 30;
    })
    console.log(over30);
    const under30 = ListProduct.filter(function (item) {
        return item.price <= 30
    })
    if (filterSelect.value == 'over30') {
        showProduct(over30);
    }
    if (filterSelect.value == 'under30') {
        showProduct(under30);
    }
    if (filterSelect.value == 'all') {
        showProduct(ListProduct);
    }
}
if (filterSelect) {
    filterSelect.addEventListener("change", filterProduct);
}




function detailProduct() {
    const productID = new URLSearchParams(window.location.search).get("id");
    const product = ListProduct.find(function (item) {
        return item.id == productID;
    });
    // console.log(product);
    const detailProductDiv = document.querySelector('.header-detail');
    if (detailProductDiv) {
        detailProductDiv.innerHTML = `
            <div class="content-title">
                <p class="content-title_header">${product.name}</p>
                <p class="content-quanlity" id="result">$${product.price}</p>
                <p>${product.desc}</p>
                <form>
                    <input type="number" placeholder="Quantity" onchange="changePrice()" min="1"  id="price"  required>
                    <button>Add To Cart</button>
                </form>
            </div>
            <div class="banner"><img src="${product.image}" alt=""></div>
            
        `

    }
}
detailProduct();
function changePrice() {
    const productID = new URLSearchParams(window.location.search).get("id");
    const product = ListProduct.find(function (item) {
        return item.id == productID;
    });
    var valuePrice = document.querySelector("#price").value
    if (Number(valuePrice) >= 1) {
        var dollarResult = document.querySelector("#result");
        var total = Number(valuePrice) * Number(product.price)
        return dollarResult.innerHTML = "$" + total;
    }
}
function listCategory() {
    for (const item of ListCategory) {
        document.querySelector(".sidebar").innerHTML += `
            <li>
            <a href="./Products.html?cateID=${item.id}" onclick="reRender(${item.id});event.preventDefault()">${item.name}</a>
            </li>
        `
    }
}
listCategory();

const searchBar = document.getElementById('searchBar');


searchBar.addEventListener('keyup', searchFood);
function searchFood(e) {
    const searchString = e.target.value.toLowerCase();
    const filterFoods = ListProduct.filter((food) => {
        return (
            food.name.toLowerCase().includes(searchString)
        )
    });
    listProductPage(filterFoods)
}

const listProductDiv = document.querySelector('.main-product');
function listProductPage(data) {
    if (listProductDiv) {
        listProductDiv.innerHTML = "";
        for (const item of data) {
            listProductDiv.innerHTML += `
                <div class="main-item">
                    <a href="./Detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                    <p class="item-title"><a href="./Detail.html?id=${item.id}">${item.name}</a></p>
                    <p class="item-price">$${item.price}</p>
                    <button class="add">Add To Cart</button>
                </div>
            `
        }
    }
}
listProductPage(ListProduct);

// function reRender(){
//     const cateId = new URLSearchParams(window.location.search).get('cateId')
//     const filterCategory = ListProduct.filter(function(item){
//         return item.category == cateId
//     })
//     if(cateId){
//         listProductPage(filterCategory)
//     }else{
//         listProductPage(ListProduct)
//     }
// }
// reRender()

function reRender(cateId) {
    if (cateId === "all") {
        listProductPage(ListProduct);
    } else {
        const filterCategory = ListProduct.filter(function (item) {
            return item.category == cateId
        });
        listProductPage(filterCategory)
    }
}



