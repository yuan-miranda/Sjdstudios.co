// static/js/store.js

import { loadHeaderTo } from "./HEADER.js";
import { generateGridItems } from "./GRID.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderTo();
    const values = [
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 1",
            price: "$1000",
            ref: "REF001"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 2",
            price: "$1200",
            ref: "REF002"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 3",
            price: "$1500",
            ref: "REF003"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 4",
            price: "$1800",
            ref: "REF004"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 1",
            price: "$1000",
            ref: "REF001"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 2",
            price: "$1200",
            ref: "REF002"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 3",
            price: "$1500",
            ref: "REF003"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 4",
            price: "$1800",
            ref: "REF004"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 1",
            price: "$1000",
            ref: "REF001"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 2",
            price: "$1200",
            ref: "REF002"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 3",
            price: "$1500",
            ref: "REF003"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 4",
            price: "$1800",
            ref: "REF004"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 1",
            price: "$1000",
            ref: "REF001"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 2",
            price: "$1200",
            ref: "REF002"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 3",
            price: "$1500",
            ref: "REF003"
        },
        {
            img: "/media/sjd/4K_Camera_Setup.png",
            name: "Camera Setup 4",
            price: "$1800",
            ref: "REF004"
        }
    ]
    generateGridItems(values.length, values);
});