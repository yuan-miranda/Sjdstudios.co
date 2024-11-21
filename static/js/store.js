// static/js/store.js

import { loadHeaderTo } from "./HEADER.js";

function dropdownSelectionListener() {
    const dropdownSelect = document.getElementById("dropdownSelect");
    dropdownSelect.addEventListener("change", async () => {
        window.location.href = dropdownSelect.value;
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderTo();
    dropdownSelectionListener();
});