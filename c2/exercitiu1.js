// // const amalgam = {
// //   n: 20,
// //   x: "ardelean",
// //   y: 10.2,
// // };
// // amalgam.z = 800;
// // console.log(amalgam);

// // let x = 10;
// // x = "10";
// // let name1 = "Sami";
// // let comma = 10.5;
// // let answer = true;
// // console.log(x, name1, comma, answer);
// // let concatenation = 1 / 0;
// // console.log(concatenation);

// // let x = 10,
// //   y = 20;
// // console.log(x + y);
// // console.log(x / y);
// // console.log(x - y);
// // console.log(Math.floor(x / y));
// // console.log(x % y);
// // console.log(Math.round(x / y));
// // console.log(Math.random() * 9 + 1);

// // function Par(y) {
// //   if (y % 2 == 0) {
// //     console.log(y + "Este numar par");
// //   } else {
// //     console.log(y + "Este nr impar");
// //   }
// // }
// // let x = 32;
// // Par(x);
// // for (let n = 1; n <= 100; n++) {
// //   Par(n);
// // }
// // Par("sase");

// // function average(x, y) {
// //   return (x + y) / 2;
// // }
// // console.log(average(10, 20));

// // let food = ["Mazare", "Shawarma", "Pizza", "Carne de miel", "Cardabos"];
// // console.log(food);
// // for (let i = 0; i <= food.length - 1; i++) {
// //   console.log(food[i], i);
// // }

// // console.log("---------------------------");

// // for (let item of food) {
// //   console.log(item);
// // }

// let book = {
//   title: "Amintiri din copilarie",
//   author: "Ion Creanga",
//   year: 1892,
// };
// console.log(book);
// console.log(
//   "Cartea " +
//     book.title +
//     " de " +
//     book.author +
//     " a fost publicata in anul " +
//     book.year
// );

// let books = [
//   book,
//   { title: "Mos craciun", author: "Vasile Alecsandri", year: 1900 },
//   { title: "Anatomia omului", author: "Victor Papilian", year: 1930 },
//   { title: "Microbiologie", author: "Victor Papilian", year: 1930 },
// ];
// // console.log(books);
// // console.log(
// //   "Cartea " +
// //     books[0].title +
// //     "de " +
// //     books[0].author +
// //     " a fost publicata in anul " +
// //     books[0].year
// // );
// // console.log(
// //   "Cartea " +
// //     books[1].title +
// //     "de " +
// //     books[1].author +
// //     " a fost publicata in anul " +
// //     books[1].year
// // );

// // for (let i = 0; i <= books.length - 1; i++) {
// //   console.log(
// //     "Cartea " +
// //       books[i].title +
// //       "de " +
// //       books[i].author +
// //       " a fost publicata in anul " +
// //       books[i].year
// //   );
// //   console.log();
// // }

// let x = {
//   title: "blablabla",
//   year: 1700,
// };
// console.log(x.title);
// console.log(x["title"]);

/*1. ADVANCE CALCULATOR*/
let pow = 1;
function advanceCalculator(x, y, operator) {
  if (operator == "add") {
    console.log(x + y);
  } else if (operator == "substract") {
    console.log(x - y);
  } else if (operator == "multiply") {
    console.log(x * y);
  } else if (operator == "divide") {
    if (y == 0) {
      console.log("Nu este pozibila impartirea la 0");
    }
    console.log(x / y);
  } else if (operator == "power") {
    for (let i = 1; i <= y; i++) {
      pow = pow * x;
    }
    console.log(pow);
  }
}
advanceCalculator(2, 3, "add");
advanceCalculator(2, 3, "substract");
advanceCalculator(2, 3, "multiply");
advanceCalculator(2, 3, "divide");
advanceCalculator(2, 3, "power");

/*2. LIBRARY ORGANIZER*/
const library = [
  {
    title: "Amintiri din copilarie",
    author: "Ion Creanga",
    genre: "naration",
    year: 1898,
  },
  {
    title: "Anatomia omului",
    author: "Victor Papilian",
    genre: "medicine",
    year: 1939,
  },
  {
    title: "About Universe",
    author: "Stephen Hawkin",
    genre: "science",
    year: 1989,
  },
  {
    title: "Microbiologie",
    author: "Ardelean Samuel",
    genre: "medicine",
    year: 1996,
  },
];
console.log("Libraria contine urmatoarele carti");
console.log(library);
function filterByGenre(genre) {
  for (let i = 0; i <= library.length - 1; i++) {
    if (genre == library[i].genre) {
      console.log(library[i]);
    }
  }
}
console.log("Cartile care sunt incadrate in genul ales sunt urmatoarele:");
filterByGenre("science");

function latestPublication() {
  max = library[0].year;
  for (let i = 0; i <= library.length - 1; i++) {
    if (library[i].year > max) {
      max = library[i].year;
    }
  }
  for (let j = 0; j <= library.length - 1; j++) {
    if (library[j].year == max) {
      console.log(library[j]);
    }
  }
}
console.log("Cartea cea mai recet publicata este:");
latestPublication();
