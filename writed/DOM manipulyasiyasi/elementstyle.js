const element =  document.querySelector("#clear-todos");


// id getrir
console.log(element.id);

// class adlarin getrir
console.log(element.className);

// class siyahisin getrir
console.log(element.classList);

// class listde ilk classi getrir
console.log(element.classList[0]);

// elementin icindeki texti tapr 
console.log(element.textContent);

// hem text hem html varsa onu getrir
console.log(element.innerHTML);

// a dirsa hrefin getrir
console.log(element.href);

// style getrir hemde deyishmeyde istifade olunur 
console.log(element.style);


// style deyishdirme

element.className = "btn btn-primary";
element.style.color = '#000';
element.style.marginLeft = '20px';
element.href = "https://google.com";
element.target = "_blank";
element.textContent = "silin";
element.innerHTML = "<span class='text-danger'>Silin</span>";


// const elements  = document.querySelectorAll(".list-group-item");
// elements.forEach( function(el) {
// 	el.style.color = 'red';
// 	el.style.background = '#eee';
// });

let element2 = document.querySelector("li:nth-child(3)");

// tek childleri alir
element2 = document.querySelectorAll("li:nth-child(odd)");

// cut childleri atir
element2 = document.querySelectorAll("li:nth-child(even)");


element2.forEach(function(el) {
	// statements
	el.style.background  = '#ccc';
	el.style.color = 'red';
});
console.log(element2);

// console.log(element);