let bagItems;
onLoad();


function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayFoodItemsOnHomePage();
    displayAddToCartIcon();
}

function addToCart(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayAddToCartIcon();
}

function displayAddToCartIcon() {
    let icon = document.querySelector("sup");
    if(bagItems.length > 0) {
        icon.style.visibility = 'visible';
        icon.innerHTML = bagItems.length;
    } else {
        icon.style.visibility = 'hidden';
    }
}

function displayFoodItemsOnHomePage() {
    let foodItems = document.querySelector(".cards");
    if(!foodItems) {
        //foodItems.innerHTML = "No food Items in store right now";
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="food">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button class="add-to-cart" onclick='addToCart(${item.id})'>Add to Cart</button>
                <button class="order-now">Order Now</button>
            </div>
        `;
    });
    foodItems.innerHTML = innerHTML;
}

