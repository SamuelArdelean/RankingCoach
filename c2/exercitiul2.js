document.addEventListener("DOMContentLoaded", function () {
  // Code to be executed when the DOM is ready
  //   let firstParagraph = document.querySelector(".intro p");
  //   console.log(firstParagraph.textContent);
  //   let boxes = document.getElementsByClassName("box");
  //   for (let i = 0; i < boxes.length; i++) {
  //     console.log(boxes[i].textContent);
  //   }
  //   let maintitle = document.getElementById("main-title");
  //   maintitle.innerHTML = "Modified bt JavaScript";
  //   const footercolor = document.querySelector(".footer");
  //   footercolor.style.backgroundColor = "lightgrey";
  //   let toggleHighlight = document.querySelector(".highlight");
  //   toggleHighlight.classList.toggle("highlight");
  //   let listInBox = document.querySelector(".box");
  //   listInBox.innerHTML +=
  //     "<ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>";
  //   let boxFont = document.querySelectorAll(".box");
  //   for (let i = 0; i <= boxFont.length - 1; i++) {
  //     boxFont[i].style.fontFamily = "arial";
  //   }
  //   console.log(boxFont);
  //   boxFont.style.fontFamily0= "Arial";
  // let boxes = document.querySelectorAll(".box");
  // boxes[1].setAttribute("data-info", "Additional Info");
  // console.log(boxes[1]);
  //   let removeHighlight = document.querySelector(".highlight");
  //   removeHighlight.classList.remove("highlight");
  //   let newButton = document.querySelector("#magic-button");
  //   let buttonClone = newButton.cloneNode(true);
  //   document.querySelector(".footer").appendChild(buttonClone);
});

function changeMainTitle() {
  document.getElementById("main-title").innerHTML =
    "THE TITLE WAS <i>CHANGED</i>";
}
// function addItem() {
//   let itemNumber = document.querySelectorAll("#unorderedList li").length;
//   let itemInBox = document.getElementById("unorderedList");
//   itemInBox.innerHTML += `<li> item  ${itemNumber + 1} </li>`;
// }

// function addItem() {
//   let items = document.querySelectorAll("#unorderedList li");
//   let lastItem = items[items.length - 1];
//   let text = lastItem.textContent;
//   let newText = text.replace("item ", "");
//   let number = Number(newText);
//   let list = document.querySelector("#unorderedList");
//   list.innerHTML += `<li> item ${number + 1} </li>`;
//   items.innerHTML += `<li> item  ${number + 1} </li>`;
//   console.log(items);
// }

