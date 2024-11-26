import { loadHeaderTo } from './HEADER.js';

function defaultVal() {
    const country = document.getElementById("countryDropdown");
    const province = document.getElementById("provinceDropdown");
    const city = document.getElementById("cityDropdown");

    country.selectedIndex = 0;
    province.selectedIndex = 0;
    city.selectedIndex = 0;
}

function bookButtonListener() {
    const bookButton = document.getElementById("submitButton");

    bookButton.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
        const nameInput = document.getElementById("nameInput");
        const contactInput = document.getElementById("contactInput");
        const emailInput = document.getElementById("emailInput");
        const addressInput = document.getElementById("addressInput");
        const paymentMethodDropdown = document.getElementById("paymentMethodDropdown");
        const countryDropdown = document.getElementById("countryDropdown");
        const provinceDropdown = document.getElementById("provinceDropdown");
        const cityDropdown = document.getElementById("cityDropdown");
        const dateStart = document.getElementById("dateStart");
        const dateEnd = document.getElementById("dateEnd");
        const totalCostElement = document.getElementById("totalPrice");
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

        // focus on error
        if (!nameInput.value) {
            nameInput.focus();
            return;
        }
        if (!contactInput.value) {
            contactInput.focus();
            return;
        }
        if (!emailInput.value) {
            emailInput.focus();
            return;
        }
        if (!addressInput.value) {
            addressInput.focus();
            return;
        }
        if (!paymentMethodDropdown.value) {
            paymentMethodDropdown.focus();
            return;
        }
        if (!countryDropdown.value) {
            countryDropdown.focus();
            return;
        }
        if (!provinceDropdown.value) {
            provinceDropdown.focus();
            return;
        }
        if (!cityDropdown.value) {
            cityDropdown.focus();
            return;
        }
        if (!dateStart.value) {
            dateStart.focus();
            return;
        }
        if (!dateEnd.value) {
            dateEnd.focus();
            return;
        }

        // save to local storage (bookings)
        const booking = {
            name: nameInput.value,
            contact: contactInput.value,
            email: emailInput.value,
            address: addressInput.value,
            paymentMethod: paymentMethodDropdown.value,
            country: countryDropdown.value,
            province: provinceDropdown.value,
            city: cityDropdown.value,
            dateStart: dateStart.value,
            dateEnd: dateEnd.value,
            totalCost: totalCostElement.textContent,
            item: selectedItem,
        };
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        alert("Booking Successful!");
        window.location.href = "/bookings";
    });
}








const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

function calculateCost() {
    const oldDate = document.getElementById("oldDate");
    const dateStart = document.getElementById("dateStart");
    const dateEnd = document.getElementById("dateEnd");
    const itemCostElement = document.getElementById("itemCost");
    const totalCostElement = document.getElementById("totalPrice");

    const itemCost = selectedItem.price;
    itemCostElement.textContent = `Cost per day: PHP ${itemCost}`;
    const oldDateValue = selectedItem.startsIn;
    oldDate.value = oldDateValue;

    const today = new Date().toISOString().split("T")[0];
    dateStart.min = today;
    dateStart.value = today;

    const minEndDate = addDays(new Date(today), 1).toISOString().split("T")[0];
    dateEnd.min = minEndDate;
    dateEnd.value = minEndDate
    console.log(dateEnd.value);

    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function updateTotalCost() {
        const startDate = new Date(dateStart.value);
        const endDate = new Date(dateEnd.value);

        let totalCost = itemCost;
        if (startDate && endDate && endDate >= startDate) {
            const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
            totalCost = days * itemCost;
        }

        totalCostElement.textContent = `Total Cost: PHP ${totalCost.toFixed(2)}`;
    }

    dateStart.addEventListener("change", () => {
        const startDateValue = dateStart.value;
        const startDate = new Date(startDateValue);

        const minEndDate = addDays(startDate, 1).toISOString().split("T")[0];
        dateEnd.min = minEndDate;

        if (new Date(dateEnd.value) < new Date(minEndDate)) {
            dateEnd.value = minEndDate;
        }

        updateTotalCost();
    });

    dateEnd.addEventListener("change", () => {
        updateTotalCost();
    });

    updateTotalCost();
}







document.addEventListener('DOMContentLoaded', async () => {
    await loadHeaderTo();
    bookButtonListener();
    defaultVal();
    calculateCost();
});