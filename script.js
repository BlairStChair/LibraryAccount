const hello = document.querySelector(".hello");

var name = prompt("Please enter your name :)");

console.log(name);

hello.textContent = "Hello " + name + "!";
 
