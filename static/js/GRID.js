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
                <p class="itemReference">Reference: ${itemReference}</p>
            </div>
            <div class="info">
                <h4>Booking Information</h4>
                <p class="name">Name: ${name}</p>
                <p class="contact">Contact: ${contact}</p>
                <p class="email">Email: ${email}</p>
                <p class="address">Address: ${address}</p>
                <p class="paymentMethod">Payment Method: ${paymentMethod}</p>
                <p class="country">Country: ${country}</p>
                <p class="province">Province: ${province}</p>
                <p class="city">City: ${city}</p>
                <p class="dateStart">Start Date: ${dateStart}</p>
                <p class="dateEnd">End Date: ${dateEnd}</p>
                <p class="totalCost">Total Cost: ${totalCost}</p>
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