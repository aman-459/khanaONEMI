
onLoad();


function onLoad() {
    displayFoodItemsOnHomePage();
}

function displayFoodItemsOnHomePage() {
    const foodItems = document.querySelector(".cards");
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="food">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <button class="add-to-cart">Add to Cart</button>
                <button class="order-now">Order Now</button>
            </div>
        `;
    });
    foodItems.innerHTML = innerHTML;
}

