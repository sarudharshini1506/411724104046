// Get the buttons
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");

// Change background to Red
redBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightcoral";
});

// Change background to Green
greenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightgreen";
});

// Change background to Blue
blueBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});