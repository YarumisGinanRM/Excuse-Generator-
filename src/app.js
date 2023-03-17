/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird", "My brother"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my homework"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  console.log("Hello Rigo from the console!");
  let excuse = `${randomElements(who)} ${randomElements(
    action
  )} ${randomElements(what)} ${randomElements(when)}`;

  let element = document.getElementById("excuse");
  element.innerHTML = excuse;
};

function randomElements(array) {
  return array[Math.floor(Math.random() * array.length)];
}
