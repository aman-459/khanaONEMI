 

let nonVeg;
getNonVeg(items);
displayNonVeg();



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