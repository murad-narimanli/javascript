const  filterInput = document.getElementById("filter");
const  todoform = document.getElementById("todo-form");


// submit olanda submitForm funcsiyasin ishletsin dyr
todoform.addEventListener("submit", submitForm);

// preventDefault() submit olanda bashqa sehifeye getmemesi ucundur
function submitForm (e) {
	// body... 
	console.log('test');

	e.preventDefault();
}


// inputa focus()  olunandda event olmasi ucun
filterInput.addEventListener("focus",function(e){
	// "e" bize bir obyekt verir
	console.log(e);
	// type yeni eventin novunu getrir
	console.log(e.type);
	// target  eventin harda oldugnu getrir
	console.log(e.target);
	// oldugu elementi sorada hemin yerin placeholderini getrir
	console.log(e.target.placeholder);
	// elementin classini getriri
	console.log(e.target.className);
});


// bu sade yoludur
filterInput.onfocus  = function (argument) {
	console.log('test');
}



// ****************************************************
// SEHIFE YUKLENENDEN SORA BU EVENT GERCEKLESHIR
document.addEventListener("DOMContentLoaded",load);


function load(e){
    console.log("Sayfa Yüklendi");

}
// ****************************************************
