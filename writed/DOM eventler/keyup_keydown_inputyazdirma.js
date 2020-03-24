// key eventleri

// keypress ancag herf reqem
document.addEventListener("keypress", run);

function run (e) {
	// e wich ascii de kodunu gosterir
	console.log(e.which);
	// e key hansi herf reqem ishare oldugnu gosterir
	console.log(e.key);
}


// keydown 
document.addEventListener("keydown", run);

function run (e) {
	console.log(e.which);
	console.log(e.key);
}



// key up

document.addEventListener("keyup", run);

function run (e) {
	console.log(e.which);
	console.log(e.key);
}



//************************************kreavtiv****************************************
const header  = document.querySelector(".card-header");
const todo =  document.querySelector("#todo");


// inputa yazi yazdigca add olunur 
todo.addEventListener("keyup", change);
function change (e) {
	// e target value yazian herfleri goturur yeni hansi herfe bassag onu
	header.textContent = e.target.value;
}




// inputa yazi yazb save edende add olunur 
const  todoform = document.getElementById("todo-form");

todoform.addEventListener("submit", change);


function change (e) {
	// prevent default ise submitde sehife yenilenmesin deyedi
	e.preventDefault();
	header.textContent = todo.value;
}