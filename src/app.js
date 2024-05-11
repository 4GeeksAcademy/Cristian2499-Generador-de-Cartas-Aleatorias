/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").classList.add(generateRandomFigure());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomFigure = () => {
  let figures = ["spade", "club", "heart", "diamond"];
  let randomFigure = Math.floor(Math.random() * figures.length);
  return figures[randomFigure];
};

let generateRandomNumber = () => {
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};
