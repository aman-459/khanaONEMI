 
let veg;
let bagItems;
onload();

function onload() {
    getVeg(items);
    displayVeg();
    let bagItemsStr = localStorage.getItem('bagItems')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    console.log(bagItemsStr);
    displayAddToCartIcon();
}



function getVeg(items) {
    veg= items.filter(item => item.type == "Veg");
}

function displayAddToCartIcon() {
    let icon = document.querySelector("sup");
    icon.innerHTML = bagItems.length;
}

function addToCart(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayAddToCartIcon();
}

function generateVegElement(item) {
    return `
        <div class="veg-card">
                <img src="../${item.image}" alt="food">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>type: Veg</p>
                <button class="add-to-cart" onclick='addToCart(${item.id})'>Add to Cart</button>
                <button class="order-now">Order Now</button>
            </div>
    `;

}

function displayVeg() {
    let vegCard = document.querySelector(".veg-cards");
    let innerHTML = '';
    veg.forEach(sweetItem => {
        innerHTML += generateVegElement(sweetItem);
    });
    vegCard.innerHTML = innerHTML;
}