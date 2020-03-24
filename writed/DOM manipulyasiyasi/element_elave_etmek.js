// yebi ELEMENT_NODE

 // <a id="clear-todos" class=" btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

// yuxaridaki buttonu yaratdiq sora o buttonu appenchildle card-bodye elave etdik 


// ilk once a linkini duzeltdik
 const newLink = document.createElement("a");
 // sora cardbodynin  2 ci sini tapqdiq cunki sehifede 2 deneydi
 const cardbody = document.getElementsByClassName("card-body")[1];

// sora linki duzeltdik id href class elave etdik
 newLink.id = "clear-todos";
 newLink.className = "btn btn-danger";
 newLink.href="https://www.google.com/webhp?hl=tr&sa=X&ved=0ahUKEwjd7b_S-rLoAhXMw6YKHZcKAzIQPAgH";
 newLink.target = "_blank";


// icine soz elave etmekcun textcontent yox textnode lazimdir cunki 
// textContent  hamsini silir 
// appenchildle yeni child yaratdiq ve onu card-bodye  eleve etdik icinde de textnode ile soz yazdiq
newLink.appendChild(document.createTextNode("yeni sehife"));

cardbody.appendChild(newLink);

 console.log(newLink);