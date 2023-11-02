// alert(document.getElementById("city").textContent);
// document.getElementById("searchBtn").addEventListener("click", function () {
//   window.alert(document.getElementById("city").value);
// });

// function initMap() {
//     let request = {
//       //   location: pyrmont,
//       //   radius: "500",
//       query: "hospitals in" + document.getElementById("city").value,
//     };
//     const map = new google.maps.Map(document.getElementById("map"), {});

//     document
//       .getElementById("searchBtn")
//       .addEventListener("click", function callback(results, status) {
//         console.log(results);
//         for (let i = 0; i <= results.length - 1; i++) {
//           document.querySelector(".mainHospitalCards").innerHTML +=
//             "<div class='content'><div class='card'>" +
//             results[i].name +
//             "</div>" +
//             "<div class='card'>" +
//             results[i].formatted_address +
//             "</div></div>";
//         }
//       });
//     let service = new google.maps.places.PlacesService(map);
//     service.textSearch(request, callback);
//   }

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {});

  document.getElementById("searchBtn").addEventListener("click", () => {
    let city = document.getElementById("city").value;
    if (city.trim() !== "") {
      let request = {
        query: "hospitals in " + city,
      };

      let service = new google.maps.places.PlacesService(map);

      service.textSearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          let mainHospitalCards = document.querySelector(".mainHospitalCards");
          mainHospitalCards.innerHTML = ""; // Clear previous results

          for (let i = 0; i <= results.length; i++) {
            let name = results[i].name;
            let address = results[i].formatted_address;

            let content = `<div class='content'><div class='card'>${
              i + 1
            }. ${name}</div><div class='card'>${address}</div></div>`;
            mainHospitalCards.innerHTML += content;
          }
        }
      });
    }
  });
}

//   function showHospitals(results) {
//     let mainHospitalCards = document.querySelector(".mainHospitalCards");
//     mainHospitalCards.innerHTML = ""; // Clear previous results

//     results.forEach((place) => {
//       let name = place.name;
//       let address = place.formatted_address;

//       let content = `<div class='content'><div class='card'>${name}</div><div class='card'>${address}</div></div>`;
//       mainHospitalCards.innerHTML += content;
//     });
//   }
// }
