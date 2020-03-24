let value;

value = document;

// Scriptler

value = document.scripts;

// scripts uzunlugu
value = document.scripts.length;

// 0 ci script
value = document.scripts[0];

// Linkler

// butun linkler
value = document.links;

// 0 ci link
value = document.links[0];

// sonuncu link
value = document.links[document.links.length-1];

// son linkin classin tapmaq
value = document.links[document.links.length-1].getAttribute("class");

// a nin hrefin almaq
value = document.links[document.links.length-1].getAttribute("href");

// class adi tapmaq yolu yanyana 
value = document.links[document.links.length-1].className;

// class adi tapmaq yolu ayri ayri
value = document.links[document.links.length-1].classList;


// Formlar

// form almaq
value = document.forms;

// formlarin sayi
value = document.forms.length;

// 1 ci formu tapmaq
value = document.forms[0];

// forma name verb name -e gore tapmaq
value = document.forms["form"];

// id -sini tapmaq
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");

// nameni tapmaq
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");


// get ve ya post oldugu tapilir
value = document.forms[0].method;

console.log(value);