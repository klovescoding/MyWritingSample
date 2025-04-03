// Copyright

let today = new Date();
let thisYear = today.getFullYear();
let small = document.querySelector("small");
let copyright = document.createElement("p")

copyright.innerHTML = `Copyright &copy; ${thisYear} - My Webpage`
small.appendChild(copyright);
small.style.textAlign = "center";

















