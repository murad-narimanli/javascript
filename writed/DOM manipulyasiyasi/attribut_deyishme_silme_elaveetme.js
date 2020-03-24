const  todoInput = document.getElementById("todo");
let element ;

// classs elave etmek setattribuite ile de olar 
element = todoInput.classList.add('newValue');
element = todoInput.classList.add('newVa');

// class silme
element = todoInput.classList.remove('newVa');

// placeholder
element = todoInput.placeholder;

// tapir
element = todoInput.getAttribute("placeholder");

// deyishir
element = todoInput.setAttribute("placeholder" , "salam");

// yoxlayir true false donur
element = todoInput.hasAttribute("title");

// silir
element = todoInput.removeAttribute("placeholder");

console.log(element);