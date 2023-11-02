function initMap() {
  let map = new google.maps.Map(document.createElement("div"), {});

  document.getElementById("searchBtn").addEventListener("click", () => {
    let city = document.getElementById("city").value
    
    if (city.trim() !== "") {
      let service = new google.maps.places.PlacesService(map);
      let request = {
        query: "hospitals in " + city,
      };

      service.textSearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          let mainHospitalCards = document.querySelector(".mainHospitalCards");
          mainHospitalCards.innerHTML = ""; // Clear previous results

          for (let i = 0; i <= results.length - 1; i++) {
            let name = results[i].name;
            let address = results[i].formatted_address;

            mainHospitalCards.innerHTML += `
              <div class='content'>
                <div>${i + 1}. ${name}</div>
                <div>${address}</div>
              </div>
            `;
          }
        }
      });
    } else {
      console.error("City is empty");
    }
  });
}
