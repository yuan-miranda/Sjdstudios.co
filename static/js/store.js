// static/js/store.js

import { loadHeaderTo } from "./HEADER.js";
import { generateGridItems } from "./GRID.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderTo();
    const values = [
        {
            id: 1,
            name: "Camera Setup 1",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 1000,
            category: "Camera",
            reference: "REF001",
            stock: 10,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 2,
            name: "Camera Setup 2",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 2000,
            category: "Camera",
            reference: "REF002",
            stock: 20,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 3,
            name: "Camera Setup 3",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 3000,
            category: "Camera",
            reference: "REF003",
            stock: 30,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 4,
            name: "Camera Setup 4",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 4000,
            category: "Camera",
            reference: "REF004",
            stock: 40,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 5,
            name: "Camera Setup 5",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 5000,
            category: "Camera",
            reference: "REF005",
            stock: 50,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 6,
            name: "Camera Setup 6",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 6000,
            category: "Camera",
            reference: "REF006",
            stock: 60,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 7,
            name: "Camera Setup 7",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 7000,
            category: "Camera",
            reference: "REF007",
            stock: 70,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 8,
            name: "Camera Setup 8",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 8000,
            category: "Camera",
            reference: "REF008",
            stock: 80,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 9,
            name: "Camera Setup 9",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 9000,
            category: "Camera",
            reference: "REF009",
            stock: 90,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 10,
            name: "Camera Setup 10",
            description: "This is a camera setup",
            image: "/media/sjd/4K_Camera_Setup.png",
            price: 10000,
            category: "Camera",
            reference: "REF010",
            stock: 100,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
    ]
    generateGridItems(values.length, values);
});