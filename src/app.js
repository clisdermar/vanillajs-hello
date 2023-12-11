/* eslint-disable */

import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcusa();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcusa = () => {
  let pronombre = ["A", "El"];
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let proIndex = Math.floor(Math.random() * pronombre.length);
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    pronombre[proIndex] +
    " " +
    who[whoIndex] +
    " " +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex]
  );
};
