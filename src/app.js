/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".us", ".io", "etc"];

let createDomain = (pronoun, adj, noun, extension) => {
  let randompronoun = Math.floor(Math.random() * pronoun.length);
  let randomadj = Math.floor(Math.random() * adj.length);
  let randomnoun = Math.floor(Math.random() * noun.length);
  let randomextension = Math.floor(Math.random() * extension.length);
  return (
    pronoun[randompronoun] +
    adj[randomadj] +
    noun[randomnoun] +
    extension[randomextension]
  );
};

document.getElementById("domain").innerHTML = createDomain(
  pronoun,
  adj,
  noun,
  extension
);
console.log(createDomain(pronoun, adj, noun, extension));
