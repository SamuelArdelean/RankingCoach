let cities = []; // array - we will add city objects in array
let cityObj = {}; // object city={name:'',visited:'true or false'}
document.getElementById("addBttn").addEventListener("click", () => {
  let cityName = document.getElementById("city").value;
  if (cityName.trim() != "") {
    document.querySelector(".citiesListContainer").innerHTML +=
      "<div class='cityBttnContent'><div class='cityCheckBox'>" +
      cityName +
      "<input type='checkbox'  class='check'></div>" +
      "<button type='button' class='deleteBttn' >Delete City</button></div>";
    cityObj = { name: cityName, visited: false };
    cities.push(cityObj); // add cityObj to array
    console.log(cities);
    console.log(document.querySelector(".check").checked);
  } else {
    window.alert("Enter a city!");
  }
});

document.addEventListener("change", function (event) {
  if (event.target.classList.contains("check")) {
    let x = event.target;
    event.target.checked = true;
  }
  console.log(event.target.checked);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBttn")) {
    event.target.parentNode.remove();
  }
});
