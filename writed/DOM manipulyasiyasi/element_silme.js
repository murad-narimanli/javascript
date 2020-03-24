// dinamik element silmek

const todoList = document.querySelector("ul.list-group");
const todo  = document.querySelectorAll("li.list-group-item");

// remove metodu
todo[1].remove();


// removeChild()

// listin son childi
todoList.removeChild(todoList.lastElementChild);

// li-nin 2 ci indexi 
todoList.removeChild(todo[2]);



console.log(todoList);
console.log(todo);