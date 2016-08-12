require("./styles/main.less");

var a = 12;
var square = (x) => x*x; 

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#var").innerHTML = a;
	document.querySelector("#result").innerHTML = square(a);
});
