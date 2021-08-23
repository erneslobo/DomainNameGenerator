/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let createDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io", ".org"];

  let ul = "";

  // let randompronoun = Math.floor(Math.random() * pronoun.length);
  // let randomadj = Math.floor(Math.random() * adj.length);
  // let randomnoun = Math.floor(Math.random() * noun.length);
  // let randomextension = Math.floor(Math.random() * extension.length);

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let h = 0; h < extension.length; h++) {
          console.log(pronoun[i] + adj[j] + noun[k] + extension[h]);
          ul += "<h2>" + pronoun[i] + adj[j] + noun[k] + extension[h] + "</h2>";
        }
      }
    }
  }
  return ul;
};

document.getElementById("domain").innerHTML = createDomain();
console.log(createDomain());
