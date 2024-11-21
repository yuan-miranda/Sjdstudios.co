// static/js/HEADER.js

export async function loadHeaderTo() {
    try {
        const response = await fetch("/html/HEADER.html");
        const data = await response.text();
        document.querySelector("header").innerHTML = data;
    } catch (error) {
        console.error(error);
    }
}