let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row"); 


value =  todoList;
value = todo;
value = cardrow;

// butun childleri getrir ama setrleride sayir oncun 4 element yerne 9 olur
value = todoList.childNodes;
value = todoList.childNodes[0];

// children methodu sadece  4 element gelir 
value =  todoList.children;
// sonuncunu almaq
value =  todoList.children[todoList.children.length-1];

// hemin childrenin ttextini deyishmek 
value =  todoList.children[todoList.children.length-1].textContent =  "deyishdi";

value = cardrow.children;
// childlerini parentleeri ve s tapmaq
value = cardrow.children[2].children[1].textContent= "deyishdi";

value =  todoList;

// ilk ve son childeler 
value =  todoList.firstElementChild;
value =  todoList.lastElementChild;
// element sayi tapma
value =  todoList.children.length;
value =  todoList.childElementCount;

// parentler
value =  cardrow.parentElement;

// siblings kardesh

// onceki kardesh
value =  todo.previousElementSibling;

// sonraki
value =  todo.nextElementSibling;


value = null;

console.log(value);














