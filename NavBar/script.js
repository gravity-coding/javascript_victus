var btn = document.querySelector("#btn");
var card = document.querySelector(".card");
var crossButton = document.querySelector(".ri-close-circle-line");

btn.addEventListener("click", function () {
    card.style.right = "0%"
})

crossButton.addEventListener("click", function () {
    card.style.right = "-100%"
})