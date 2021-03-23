let title = document.querySelector("h1");
let title1 = document.querySelector("h2");
let title2 = document.querySelector("h3");
let p = document.querySelectorAll("p");

title.innerHTML = "toto"
title1.innerHTML = "toto"
title2.innerHTML = "toto"

title.style.backgroundColor = "yellow"


p.forEach(e => e.innerHTML = "toto")