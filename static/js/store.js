// static/js/store.js

import { loadHeaderTo } from "./HEADER.js";
import { generateGridItems } from "./GRID.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderTo();

    const values = [
        {
            id: 1,
            name: "4K Camera Setup",
            description: "A professional 4K camera setup for high-quality video production.",
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
            name: "Advanced Laser Lighting",
            description: "Create stunning visual effects with this advanced laser lighting system.",
            image: "/media/sjd/Advanced_Laser_Lighting.png",
            price: 2000,
            category: "Lighting",
            reference: "REF002",
            stock: 20,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 3,
            name: "Basic Sound Package",
            description: "A basic sound package perfect for small to medium-sized events.",
            image: "/media/sjd/Basic_Sound_Package.png",
            price: 3000,
            category: "Sound",
            reference: "REF003",
            stock: 30,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 4,
            name: "Basic Video Package",
            description: "An essential video package for capturing high-quality footage at events.",
            image: "/media/sjd/Basic_Video_Package.png",
            price: 4000,
            category: "Video",
            reference: "REF004",
            stock: 40,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 5,
            name: "Deluxe Lighting Package",
            description: "An advanced lighting package with a variety of effects to enhance any event.",
            image: "/media/sjd/Deluxe_Lighting_Package.png",
            price: 5000,
            category: "Lighting",
            reference: "REF005",
            stock: 50,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 6,
            name: "Fog Machine",
            description: "Create atmospheric effects with this powerful fog machine.",
            image: "/media/sjd/Fog_Machine.png",
            price: 6000,
            category: "Lighting",
            reference: "REF006",
            stock: 60,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 7,
            name: "High-Power Subwoofer",
            description: "A high-power subwoofer for deep bass and impactful sound in any venue.",
            image: "/media/sjd/High-Power_Subwoofer.png",
            price: 7000,
            category: "Sound",
            reference: "REF007",
            stock: 70,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 8,
            name: "High-Quality Speaker System",
            description: "A high-quality speaker system for crystal-clear sound at any event.",
            image: "/media/sjd/High-Quality_Speaker_System.png",
            price: 8000,
            category: "Sound",
            reference: "REF008",
            stock: 80,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 9,
            name: "LED Uplighting Package",
            description: "Add vibrant color to your event with this LED uplighting package.",
            image: "/media/sjd/LED_Uplighting_Package.png",
            price: 9000,
            category: "Lighting",
            reference: "REF009",
            stock: 90,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 10,
            name: "Mini LED Moving Head Lights",
            description: "Compact and dynamic moving head lights for a stunning lighting display.",
            image: "/media/sjd/Mini_LED_Moving_Head_Lights.png",
            price: 10000,
            category: "Lighting",
            reference: "REF010",
            stock: 100,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 11,
            name: "Portable Projector",
            description: "A versatile portable projector for presentations and multimedia use.",
            image: "/media/sjd/Portable_Projector.png",
            price: 11000,
            category: "Video",
            reference: "REF011",
            stock: 110,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 12,
            name: "Premium DJ Set",
            description: "A top-tier DJ set for professional DJs, offering complete control over sound.",
            image: "/media/sjd/Premium_DJ_Set.png",
            price: 12000,
            category: "Sound",
            reference: "REF012",
            stock: 120,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 13,
            name: "Pro Audio Setup",
            description: "A premium audio setup designed for the highest quality sound production.",
            image: "/media/sjd/Pro_Audio_Setup.png",
            price: 13000,
            category: "Sound",
            reference: "REF013",
            stock: 130,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 14,
            name: "Stage Lighting Essentials",
            description: "All the essential stage lighting components you need for your event.",
            image: "/media/sjd/Stage_Lighting_Essentials.png",
            price: 14000,
            category: "Lighting",
            reference: "REF014",
            stock: 140,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        },
        {
            id: 15,
            name: "Wireless Microphone Set",
            description: "A professional wireless microphone set for seamless audio capture.",
            image: "/media/sjd/Wireless_Microphone_Set.png",
            price: 15000,
            category: "Sound",
            reference: "REF015",
            stock: 150,
            date_created: "2021-10-01",
            date_updated: "2021-10-01",
            date_deleted: null
        }
    ]
    generateGridItems(values.length, values);
});