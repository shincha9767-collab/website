const button = document.querySelector("button");

button.addEventListener("click", () => {

    alert("Welcome ❤️");

});
const music = document.getElementById("music");

document.body.addEventListener("click", () => {

    music.play();

}, { once:true });

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {

    button.innerHTML = "Open It ❤️";

});

button.addEventListener("mouseleave", () => {

    button.innerHTML = "Enter 💌";

});