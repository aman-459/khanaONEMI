 

let veg;
getVeg(items);
displayVeg();



function getVeg(items) {
    veg= items.filter(item => item.type == "Veg");
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