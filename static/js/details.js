import { loadHeaderTo } from "./HEADER.js";
import { addToCart } from "./GRID.js";

function generateDetails() {
    const details = document.querySelector('.details');
    details.innerHTML = '';

    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    let image = selectedItem.image;
    let name = selectedItem.name;
    let price = selectedItem.price;
    let description = selectedItem.description;

    details.innerHTML += `
        <div class="details-image">
            <img src="${image}" alt="product">
        </div>
        <div class="details-info">
            <h2>${name}</h2>
            <h3>₱${price} per day</h3>
            <p>${description}</p>
            <button>Add to Cart</button>
        </div>
    `;

    details.querySelector('button').addEventListener('click', () => {
        addToCart(selectedItem);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderTo();
    generateDetails();
});