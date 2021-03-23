let title = document.querySelectorAll("h1");
let title1 = document.querySelectorAll("h2");
let title2 = document.querySelectorAll("h3");
let p = document.querySelectorAll("p");


title.forEach(e => e.innerHTML = "toto1")
title1.forEach(e => e.innerHTML = "toto")
title2.forEach(e => e.innerHTML = "toto")
p.forEach(e => e.innerHTML = "toto")


console.log(p);