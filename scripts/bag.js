
let bagItemsObjects;
onLoad();

function onLoad() {
    loadBagItems();
    displayBagItems();
    displayBagSummery();
};

function loadBagItems() {
    bagItemsObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) return items[i];
        }
    });
}

function generateElement(item) {
    return `
        <div class="bag-card">
            <img src="../${item.image}" alt="">
            <div class="text">
                <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            </div>
            <i onclick="removeBagItem(${item.id})">X</i>
        </div>
    `;
}

function displayBagItems() {
    let bagCards = document.querySelector(".bag-cards");
    let innerHTML = '';
    bagItemsObjects.forEach(bagItem => {
        innerHTML += generateElement(bagItem);
    });
    bagCards.innerHTML = innerHTML;
}

function displayBagSummery() {
    let totalPrice = 0;
    bagItemsObjects.forEach(bagItem => {
        totalPrice += bagItem.price;
    });
    let bagSummery = document.querySelector(".bag-bill");
    bagSummery.innerHTML = `
        <h2>Total items: ${bagItems.length}</h2>
                <p>Total Price: ₹${totalPrice}</p>
                <button>Order now</button>
    `;

}

function removeBagItem(itemId) {
    bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    console.log(bagItems);
    loadBagItems();
    displayBagItems();
    displayBagSummery();
}