const shareButton = document.querySelector(".share-button");
const popup = document.querySelector(".share-popup");

shareButton.addEventListener("click", () => {
  popup.classList.toggle("active");
  shareButton.classList.toggle("active");
});
