// Window Object
let value;
// butun documenti getirir obyekt kimi  
value = document;

// butun documenti array kimi getirir
value = document.all;

// butun documentin uzunlugunu mueyyenleshdirir 
value = document.all.length;

// 1 ci (arrayda 0 ci ) elementi cagrir
value = document.all[0];

// 7 ci (arrayda 6 ci elementi cagirir)
value = document.all[6];

// documentdeki son elementi getririr
value = document.all[document.all.length-1];


// dovrle butun elementleri alt alta geirir


const elements = document.all; //Html Collection
for(let i = 0; i < elements.length;i++) {
    console.log(elements[i]);
}


// foreach la sade weklde getrmek olmur evvelce arrayi obyekte cevirmek lazimdir
elements.forEach(function(element){
    console.log(element);
});

// arrayi obyeckte cevirmek ucun

const collections = Array.from(document.all);

collections.forEach(function(collection){
    console.log(collection);
});

// documentin icinde diger elementleri cagrmag ucun
value = document.all[8];
value = document.body;
value = document.head;
value = document.location; 
value = document.location.hostname; // hostname
value = document.location.port; // port

value = document.URL; // umumi url 

value = document.characterSet; // utf-8 meta ucub

console.log(value);

