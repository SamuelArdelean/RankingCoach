// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((response) => {
//     for (let item of response) {
//       document.getElementById("fetchList").innerHTML +=
//         "<li> " + item.name + ", " + item.email + " </li>";
//       // console.log(item.title);
//     }
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  // .then((response) => console.log(response));
  .then((response) => {
    for (let i = 0; i <= response.length - 1; i++) {
      const mainCards = document.querySelector(".main-cards");
      if (mainCards) {
        mainCards.innerHTML +=
          "<div class='card'><div><b>" +
          response[i].id +
          "</b></div>" +
          "<div>" +
          response[i].name +
          "</div>" +
          "<div>" +
          "Street: " +
          response[i].address.street +
          "<br>" +
          "City: " +
          response[i].address.city +
          "</div>" +
          "<div>" +
          response[i].company.name +
          "</div>" +
          "<div>" +
          response[i].phone +
          "</div></div>";
      }
    }
  });

function clickName() {
  let listName = [];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      for (let i = 0; i <= response.length - 1; i++) {
        listName += response[i].name + "\n";
      }
      alert(listName);
    });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i <= response.length - 1; i++) {
      const selector = document.querySelector(".main-cards-address");
      if (selector) {
        selector.innerHTML +=
          "<div class='card'><div><b>" +
          response[i].name +
          "</b></div>" +
          "<div>" +
          response[i].address.street +
          "</div>" +
          "<div>" +
          "Street: " +
          response[i].address.suite +
          "<br>" +
          "City: " +
          response[i].address.city +
          "</div>" +
          "<div>" +
          response[i].address.zipcode +
          "</div>" +
          "<div>" +
          response[i].address.zipcode +
          "</div>" +
          "<div>" +
          response[i].address.zipcode +
          "</div></div>";
      }
    }
  });
