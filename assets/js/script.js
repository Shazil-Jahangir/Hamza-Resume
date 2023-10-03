const floatingButton = document.getElementById("floating-button");
const popup = document.getElementById("popup");

floatingButton.addEventListener("click", () => {
    popup.style.display = popup.style.display === "block" ? "none" : "block";
});
