function preview(e) {
  console.log(e);
  document.getElementById("previewPanel").innerHTML =
    " Username: " + document.getElementById("username").value + "<br>";
  document.getElementById("previewPanel").innerHTML +=
    "About Me: " + document.getElementById("about").value + "<br>";
  let country = document.getElementById("country");
  document.getElementById("previewPanel").innerHTML +=
    "Country: " + country.value + "<br>"; //????
  let checkBox = document.getElementById("newsletter");
  document.getElementById("previewPanel").innerHTML +=
    "Receive Newsletter: " + checkBox.checked;
}

document.getElementById("previewBtn").addEventListener("click", preview);
document.querySelector("#username").addEventListener("input", preview);
document.querySelector("#about").addEventListener("input", preview);
document.querySelector("#country").addEventListener("input", preview);
document.querySelector("#newsletter").addEventListener("input", preview);
