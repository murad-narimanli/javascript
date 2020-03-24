// replace - deyishdirme

// cardi tapdiq
 const cardbody  = document.querySelectorAll(".card-body")[1];

// yeni element yaratdiq editledik
 const newElement =  document.createElement("h3");

 newElement.className = "card-title";
 newElement.id = "tasks-title";
 newElement.textContent = "yeni todolar";


// kohne elementi cagrdig
const oldELement = document.querySelector("#tasks-title");



// replace etdik
cardbody.replaceChild(newElement, oldELement);

 console.log(newElement);