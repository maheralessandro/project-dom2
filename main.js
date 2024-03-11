let color = document.getElementById("color-box");
let btn = document.getElementById("change-color-btn");

function casuale() {
    num = Math.round(Math.random() * 1001);
    color.style.backgroundColor= `#${num}`;
}