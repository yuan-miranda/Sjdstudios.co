export function bookNow(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    window.location.href = '/book';

}

export function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // check if item is already in cart
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].reference === item.reference) {
            alert(`Item ${item.name} is already in cart`);
            return;
        }
    }

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Item ${item.name} added to cart`);
}

export function moreInfo(item) {
    localStorage.setItem('selectedItem', JSON.stringify(item));
    window.location.href = '/details';
}

export function removeFromCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].reference === item.reference) {
            cart.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`Item ${item.name} removed from cart`);
            document.location.reload();
            return;
        }
    }
}

export function generateGridItems(n, itemArr) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    for (let i = 0; i < n; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.outline = 'black solid 1px';

        const addButtonId = `add-${i}`;
        const infoButtonId = `info-${i}`;

        let image = itemArr[i].image;
        let name = itemArr[i].name;
        let price = itemArr[i].price;
        let reference = itemArr[i].reference;

        gridItem.innerHTML += `
            <img src="${image}" alt="">
            <div class="info">
                <h4><b class="name">${name}</b></h4>
                <p class="price">₱${price} per day</p>
                <p class="reference">${reference}</p>
                <div class="buttons">
                    <button class="addToCartButton" id="${addButtonId}">Add to cart</button>
                    <button class="moreInfoButton" id="${infoButtonId}">More info</button>
                </div>
            </div>
        `;
        gridContainer.appendChild(gridItem);

        console.log(`Add button ${i} id: ${addButtonId}`);
        document.getElementById(addButtonId).addEventListener('click', () => {
            addToCart(itemArr[i]);
        });
        document.getElementById(infoButtonId).addEventListener('click', () => {
            moreInfo(itemArr[i]);
        });
    }
}

export function generateCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.grid-container');
    cartContainer.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('grid-item');
        cartItem.style.outline = 'black solid 1px';

        let image = cart[i].image;
        let name = cart[i].name;
        let price = cart[i].price;
        let reference = cart[i].reference;

        cartItem.innerHTML += `
            <img src="${image}" alt="">
            <div class="info">
                <h4><b class="name">${name}</b></h4>
                <p class="price">₱${price} per day</p>
                <p class="reference">${reference}</p>
                <div class="buttons">
                    <button class="bookNowButton">Book now</button>
                    <button class="moreInfoButton">More info</button>
                    <button class="removeFromCartButton">Remove from cart</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);

        cartItem.querySelector('.bookNowButton').addEventListener('click', () => {
            bookNow(cart[i]);
        });

        cartItem.querySelector('.moreInfoButton').addEventListener('click', () => {
            moreInfo(cart[i]);
        });

        cartItem.querySelector('.removeFromCartButton').addEventListener('click', () => {
            removeFromCart(cart[i]);
        });
        
    }
}

// import { loadHeaderTo } from './HEADER.js';

// function defaultVal() {
//     const country = document.getElementById("countryDropdown");
//     const province = document.getElementById("provinceDropdown");
//     const city = document.getElementById("cityDropdown");

//     country.selectedIndex = 0;
//     province.selectedIndex = 0;
//     city.selectedIndex = 0;
// }

// function bookButtonListener() {
//     const bookButton = document.getElementById("submitButton");

//     bookButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
//         const nameInput = document.getElementById("nameInput");
//         const contactInput = document.getElementById("contactInput");
//         const emailInput = document.getElementById("emailInput");
//         const addressInput = document.getElementById("addressInput");
//         const paymentMethodDropdown = document.getElementById("paymentMethodDropdown");
//         const countryDropdown = document.getElementById("countryDropdown");
//         const provinceDropdown = document.getElementById("provinceDropdown");
//         const cityDropdown = document.getElementById("cityDropdown");
//         const dateStart = document.getElementById("dateStart");
//         const dateEnd = document.getElementById("dateEnd");
//         const totalCostElement = document.getElementById("totalPrice");
//         const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

//         // save to local storage (bookings)
//         const booking = {
//             name: nameInput.value,
//             contact: contactInput.value,
//             email: emailInput.value,
//             address: addressInput.value,
//             paymentMethod: paymentMethodDropdown.value,
//             country: countryDropdown.value,
//             province: provinceDropdown.value,
//             city: cityDropdown.value,
//             dateStart: dateStart.value,
//             dateEnd: dateEnd.value,
//             totalCost: totalCostElement.textContent,
//             item: selectedItem,
//         };
//         bookings.push(booking);
//         localStorage.setItem('bookings', JSON.stringify(bookings));
//         alert("Booking Successful!");
//         window.location.href = "/bookings";
//     });
// }








// const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

// function calculateCost() {
//     const oldDate = document.getElementById("oldDate");
//     const dateStart = document.getElementById("dateStart");
//     const dateEnd = document.getElementById("dateEnd");
//     const itemCostElement = document.getElementById("itemCost");
//     const totalCostElement = document.getElementById("totalPrice");

//     const itemCost = selectedItem.price;
//     itemCostElement.textContent = `Cost per day: PHP ${itemCost}`;
//     const oldDateValue = selectedItem.startsIn;
//     oldDate.value = oldDateValue;

//     const today = new Date().toISOString().split("T")[0];
//     dateStart.min = today;
//     dateStart.value = today;

//     const minEndDate = addDays(new Date(today), 1).toISOString().split("T")[0];
//     dateEnd.min = minEndDate;
//     dateEnd.value = minEndDate
//     console.log(dateEnd.value);

//     function addDays(date, days) {
//         const result = new Date(date);
//         result.setDate(result.getDate() + days);
//         return result;
//     }

//     function updateTotalCost() {
//         const startDate = new Date(dateStart.value);
//         const endDate = new Date(dateEnd.value);

//         let totalCost = itemCost;
//         if (startDate && endDate && endDate >= startDate) {
//             const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
//             totalCost = days * itemCost;
//         }

//         totalCostElement.textContent = `Total Cost: PHP ${totalCost.toFixed(2)}`;
//     }

//     dateStart.addEventListener("change", () => {
//         const startDateValue = dateStart.value;
//         const startDate = new Date(startDateValue);

//         const minEndDate = addDays(startDate, 1).toISOString().split("T")[0];
//         dateEnd.min = minEndDate;

//         if (new Date(dateEnd.value) < new Date(minEndDate)) {
//             dateEnd.value = minEndDate;
//         }

//         updateTotalCost();
//     });

//     dateEnd.addEventListener("change", () => {
//         updateTotalCost();
//     });

//     updateTotalCost();
// }







// document.addEventListener('DOMContentLoaded', async () => {
//     await loadHeaderTo();
//     bookButtonListener();
//     defaultVal();
//     calculateCost();
// });
export function generateBookItems() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookContainer = document.querySelector('.grid-container');
    bookContainer.innerHTML = '';

    for (let i = 0; i < bookings.length; i++) {
        const bookItem = document.createElement('div');
        bookItem.classList.add('grid-item');
        bookItem.style.outline = 'black solid 1px';

        let name = bookings[i].name;
        let contact = bookings[i].contact;
        let email = bookings[i].email;
        let address = bookings[i].address;
        let paymentMethod = bookings[i].paymentMethod;
        let country = bookings[i].country;
        let province = bookings[i].province;
        let city = bookings[i].city;
        let dateStart = bookings[i].dateStart;
        let dateEnd = bookings[i].dateEnd;
        let totalCost = bookings[i].totalCost;

        let item = bookings[i].item;
        let image = item.image;
        let itemName = item.name;
        let itemPrice = item.price;
        let itemReference = item.reference;

        bookItem.innerHTML += `
            <div class="info">
                <img src="${image}" alt="" style="width: 100px;>
                <h4><b class="itemName">${itemName}</b></h4>
                <p class="itemPrice">₱${itemPrice} per day</p>
                <p class="itemReference">${itemReference}</p>
            </div>
            <div class="info">
                <h4>Booking Information</h4>
                <p class="name">${name}</p>
                <p class="contact">${contact}</p>
                <p class="email">${email}</p>
                <p class="address">${address}</p>
                <p class="paymentMethod">${paymentMethod}</p>
                <p class="country">${country}</p>
                <p class="province">${province}</p>
                <p class="city">${city}</p>
                <p class="dateStart">${dateStart}</p>
                <p class="dateEnd">${dateEnd}</p>
                <p class="totalCost">${totalCost}</p>
            </div>
            <div class="buttons">
                <button class="extendBookingButton">Extend Booking</button>
                <button class="moreInfoButton">More info</button>
                <button class="removeBookingButton">Remove Booking</button>
            </div>
        `;
        bookContainer.appendChild(bookItem);

        bookItem.querySelector('.extendBookingButton').addEventListener('click', () => {
            extendBooking(bookings[i]);
        });

        bookItem.querySelector('.moreInfoButton').addEventListener('click', () => {
            moreInfo(item);
        });

        bookItem.querySelector('.removeBookingButton').addEventListener('click', () => {
            removeBooking(bookings[i]);
        });
    }
}

export function extendBooking(booking) {
    localStorage.setItem('selectedItem', JSON.stringify(booking.item));
    localStorage.setItem('selectedBooking', JSON.stringify(booking));
    window.location.href = '/extend';
}


function removeBooking(booking) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].name === booking.name) {
            bookings.splice(i, 1);
            localStorage.setItem('bookings', JSON.stringify(bookings));
            alert(`Booking for ${booking.name} removed`);
            document.location.reload();
            return;
        }
    }
}