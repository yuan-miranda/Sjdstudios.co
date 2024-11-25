export function generateGridItems(n, itemArr) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    for (let i = 0; i < n; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.outline = 'black solid 1px';

        const addButtonId = `add-${i}`;
        const infoButtonId = `info-${i}`;

        let img = itemArr[i].img;
        let name = itemArr[i].name;
        let price = itemArr[i].price;
        let ref = itemArr[i].ref;

        gridItem.innerHTML += `
            <img src="${img}" alt="">
            <div class="info">
                <h4><b class="name">${name}</b></h4>
                <p class="price">${price}</p>
                <p class="ref">${ref}</p>
                <div class="buttons">
                    <button class="addToCartButton" id="${addButtonId}">Add to cart</button>
                    <button class="moreInfoButton" id="${infoButtonId}">More info</button>
                </div>
            </div>
        `;
        gridContainer.appendChild(gridItem);

        console.log(`Add button ${i} id: ${addButtonId}`);
        document.getElementById(addButtonId).addEventListener('click', () => {
            console.log(`Add button ${i} clicked`);
        });
        document.getElementById(infoButtonId).addEventListener('click', () => {
            console.log(`Info button ${i} clicked`);
        });


    }
}