import { loadHeaderTo } from "./HEADER.js";
import { generateCartItems } from "./GRID.js";

document.addEventListener('DOMContentLoaded', async () => {
    await loadHeaderTo();
    generateCartItems();
});