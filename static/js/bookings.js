import { loadHeaderTo } from "./HEADER.js";
import { generateBookItems } from "./GRID.js";

document.addEventListener('DOMContentLoaded', async () => {
    await loadHeaderTo();
    generateBookItems();
});