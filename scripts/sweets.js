 

let sweets;
getSweets(items);
displaysweets();



function getSweets(items) {
    sweets = items.filter(item => item.type == "Sweet");
}

function generateSweetsElement(item) {
    return `
        <div class="sweets-card">
                <img src="../${item.image}" alt="food">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>type: Sweets </p>
                <button class="add-to-cart" onclick='addToCart(${item.id})'>Add to Cart</button>
                <button class="order-now">Order Now</button>
            </div>
    `;

}

function displaysweets() {
    let sweetsCard = document.querySelector(".sweets-cards");
    let innerHTML = '';
    sweets.forEach(sweetItem => {
        innerHTML += generateSweetsElement(sweetItem);
    });
    sweetsCard.innerHTML = innerHTML;
}