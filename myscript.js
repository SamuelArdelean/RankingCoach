function openPreviewHandler(src) {
  console.log(src);
  document.getElementById("image").src = src;
  document.getElementById("image").style.display = "block";
  document.querySelector(".preview-container").style.display = "flex";
}
function closePreviewHandler() {
  document.getElementById("image").src = "";
  document.getElementById("image").style.display = "none";
  document.querySelector(".preview-container").style.display = "none";
}

// const closeButton = document.getElementById("closeButton");
// const modal = document.querySelector(".preview-container");
// closeButton.addEventListener("click", () => {
//   modal.style.display = "none";
// });
