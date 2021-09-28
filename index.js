const colors = ["green", "cyan", "blue", "pink", "red", "yellow"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor];
    color.innerText = "pink";
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}
