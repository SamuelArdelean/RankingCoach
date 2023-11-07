window.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  renderList(cities);
});

let cities = []; //array - we will add city objects in array
let cityObj = {}; // object city={name:'',visited:'true or false'}

function renderList(cities) {
  let citiesListContainer = document.querySelector(".citiesListContainer");
  citiesListContainer.innerHTML = "";

  for (let i = 0; i <= cities.length - 1; i++) {
    let city = cities[i];

    let cityElement = document.createElement("div");
    cityElement.classList.add("cityBttnContent");
    cityElement.setAttribute("data-cityName", city.name);

    cityElement.innerHTML = `<div class=cityCheckBox">${
      city.name
    }<input type="checkbox"  class="check"  ${
      city.visited ? "checked" : ""
    }></div><button type="button" class="deleteBttn">"Delete City"</button>`;

    citiesListContainer.appendChild(cityElement);
  }
}

document.getElementById("addBttn").addEventListener("click", () => {
  let cityName = document.getElementById("city").value;
  if (cityName.trim() != "") {
    // document.querySelector(".citiesListContainer").innerHTML +=
    //   "<div class='cityBttnContent' data-cityName='" +
    //   cityName +
    //   "'>" +
    //   "<div class='cityCheckBox'>" +
    //   cityName +
    //   "<input type='checkbox'  class='check'></div>" +
    //   "<button type='button' class='deleteBttn'>" +
    //   "Delete City" +
    //   "</button></div>";
    let cityObj = { name: cityName, visited: false };
    cities.push(cityObj); // add cityObj to array
    renderList(cities);
  } else {
    window.alert("Enter a city!");
  }
  console.log(cities);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("check")) {
    console.log(event.target.checked);
    let checkbox = event.target;
    let cityElement = checkbox.closest(".cityBttnContent");
    let cityName = cityElement.getAttribute("data-cityName");
    for (let i = 0; i <= cities.length - 1; i++) {
      if ((cities[i].name = cityName)) {
        cities[i].visited = checkbox.checked;
        console.log(cities);
        break;
      }
    }
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBttn")) {
    let deleteBttn = event.target;
    let cityElement = deleteBttn.closest(".cityBttnContent");
    let cityName = cityElement.getAttribute("data-cityName");

    event.target.parentNode.remove();

    for (let i = 0; i < cities.length; i++) {
      if (cities[i].name === cityName) {
        cities.splice(i, 1);
        console.log(cities);
        break;
      }
    }
  }
});

function saveToLocalStorage() {
  const data = JSON.stringify(cities);
  localStorage.setItem("visitedCities", data);
  console.log(data);
}

function loadFromLocalStorage() {
  const data = localStorage.getItem("visitedCities");
  if (data) {
    cities = JSON.parse(data);
  }
}
