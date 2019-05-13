// Your code goes here
document.addEventListener('DOMContentLoaded', function(){
	console.log("The DOM has loaded");
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");

let someElement = document.getElementById('text');

document.addEventListener('DOMContentLoaded', function(){
	someElement.innerHTML = "This is really cool!";
});

