/* eslint-disable */
// import "bootstrap";
// import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { end } from "@popperjs/core";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  domainNames();
};
let domainNames = () => {
  let pronoun = ["it", "your", "his", "her", "the", "our"];
  let adjetive = ["great", "big", "good", "generous", "pretty"];
  let noun = ["student", "airport", "computer", "family"];
  let endpoint = [".com", ".dev", ".gov", ".edu"];

  let div = document.querySelector("#myapp");
  let domainNamelist = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjetive.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < endpoint.length; l++) {
          domainNamelist.push(pronoun[i] + adjetive[j] + noun[k] + endpoint[l]);
          console.log(pronoun[i] + adjetive[j] + noun[k] + endpoint[l]);
        }
      }
    }
  }
  for (let i = 0; i < domainNamelist.length; i++) {
    div.innerHTML += "<p>" + domainNamelist[i] + "</p>";
  }
};
