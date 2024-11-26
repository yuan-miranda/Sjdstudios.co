import { loadHeaderTo } from './HEADER.js';

const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
const selectedBooking = JSON.parse(localStorage.getItem('selectedBooking'));

function bookButtonListener() {
    const bookButton = document.getElementById("submitButton");

    bookButton.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Collecting input values
        const nameInput = selectedBooking.name;
        const contactInput = selectedBooking.contact;
        const emailInput = selectedBooking.email;
        const addressInput = selectedBooking.address;
        const paymentMethodDropdown = selectedBooking.paymentMethod;
        const countryDropdown = selectedBooking.country;
        const provinceDropdown = selectedBooking.province;
        const cityDropdown = selectedBooking.city;
        const dateStart = document.getElementById("dateStart").value;
        const dateEnd = document.getElementById("dateEnd").value;
        const totalCostElement = document.getElementById("totalPrice").textContent;
        
        // Get the bookings from local storage
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        
        // Find the existing booking to update
        const bookingIndex = bookings.findIndex(booking => booking.item.id === selectedItem.id); // Assuming item.id is unique
        
        if (bookingIndex !== -1) {
            // If the booking already exists, update it
            bookings[bookingIndex] = {
                ...bookings[bookingIndex],  // Retain existing properties
                name: nameInput,
                contact: contactInput,
                email: emailInput,
                address: addressInput,
                paymentMethod: paymentMethodDropdown,
                country: countryDropdown,
                province: provinceDropdown,
                city: cityDropdown,
                dateStart: dateStart,
                dateEnd: dateEnd,
                totalCost: totalCostElement,
                item: selectedItem,
            };
            alert("Booking Updated!");
        } else {
            // If the booking doesn't exist, add it as a new one
            const booking = {
                name: nameInput,
                contact: contactInput,
                email: emailInput,
                address: addressInput,
                paymentMethod: paymentMethodDropdown,
                country: countryDropdown,
                province: provinceDropdown,
                city: cityDropdown,
                dateStart: dateStart,
                dateEnd: dateEnd,
                totalCost: totalCostElement,
                item: selectedItem,
            };
            bookings.push(booking);
            alert("Booking Successful!");
        }
        
        // Save the updated bookings back to local storage
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Redirect to the bookings page
        window.location.href = "/bookings";
    });
}

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

    // Use selectedBooking dates if available, otherwise fall back to today
    const bookingStart = selectedBooking?.dateStart || today;
    const bookingEnd = selectedBooking?.dateEnd || addDays(new Date(today), 1).toISOString().split("T")[0];

    // Set the minimum and initial values for the date inputs
    dateStart.min = today;
    dateStart.value = bookingStart;

    const minEndDate = addDays(new Date(bookingStart), 1).toISOString().split("T")[0];
    dateEnd.min = minEndDate;
    dateEnd.value = bookingEnd;

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
    calculateCost();
});
