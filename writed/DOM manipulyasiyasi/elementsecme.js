// elementi id e gore secme 

let element ;

// id ile tapmaq
element = document.getElementById("todo-form");

// classi tapmaq
element =  document.getElementsByClassName("list-group-item")[0];

// taq tapmaq
element = document.getElementsByTagName("li");


// query selector css selectorlar kimidir
// sadece 1 elementi verir
element =  document.querySelector("#todo-form");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");


// query selector all 1 elementi yox bir cox elementi verir 

// USTUNLUYU -----  FOREACH -- a salmaq olur 

element = document.querySelectorAll(".list-group-item");

element.forEach( function(el) {
	// statements
	console.log(el);
});


console.log(element);