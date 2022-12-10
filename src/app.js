/* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector(".suit").innerHTML = generateRandomSuit();
  document.querySelector(".numbers").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["&#9829", "&#9830", "&#9824", "&#9824"];
  let indexSuit = Math.floor(Math.random() * suit.length);

  if (suit[indexSuit] === "&#9829" || suit[indexSuit] === "&#9830") {
    let color = document.getElementsByClassName("suit");
    let colorArray = [...color];
    colorArray.map(element => {
      element.style.color = "red";
      return element;
    });
    console.log(color);
  }
  return suit[indexSuit];
};

//write your code here
//"&hearts;""\2665";&#9829;
// "&diams""\2666";&#9830;
// "&spades;"\2660";&#9824;
// "&clubs;"\2663";&#9827;
