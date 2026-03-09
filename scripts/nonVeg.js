 

let nonVeg;
let bagItems;
onLoad();
function onLoad() {
    getNonVeg(items);
    displayNonVeg();
    let bagItemsStr = localStorage.getItem('bagItems');
    console.log(bagItemsStr);
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayAddToCartIcon();
}

function displayAddToCartIcon() {
    let icon = document.querySelector('sup');
    icon.innerHTML = bagItems.length;
}

function addToCart(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayAddToCartIcon();
}



function getNonVeg(items) {
    nonVeg= items.filter(item => item.type == "Non-Veg");
}

function generateNonVegElement(item) {
    return `
        <div class="nonVeg-card">
                <img src="../${item.image}" alt="food">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>type: NonVeg</p>
                <button class="add-to-cart" onclick='addToCart(${item.id})'>Add to Cart</button>
                <button class="order-now">Order Now</button>
            </div>
    `;

}

function displayNonVeg() {
    let nonVegCard = document.querySelector(".nonVeg-cards");
    let innerHTML = '';
    nonVeg.forEach(sweetItem => {
        innerHTML += generateNonVegElement(sweetItem);
    });
    nonVegCard.innerHTML = innerHTML;
}