function openPreviewHandler(src, description) {
  document.getElementById("image").src = src;
  document.querySelector(".preview-container").style.display = "flex";
  document.querySelector(".preview-container p").textContent = description;
}
function closePreviewHandler() {
  document.querySelector(".preview-container").style.display = "none";
}
