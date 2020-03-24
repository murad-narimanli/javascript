const filter = document.getElementById("filter");


// Focus INPUTA FOCUS OLANDA ISHLEYIR
filter.addEventListener("focus",run);
// // Blur FOCUSDAN CIXDIGDA ISHLEYIR
filter.addEventListener("blur",run);

// Paste INPUTA NESE PASTE ETDIKDE ISHLEYIR 
filter.addEventListener("paste",run);
// Copy INPUTDAN COPYALADIGDA ISHLEYIR
filter.addEventListener("copy",run);

// Cut YAZILANI CUT ETDIKDE ISHLENIR 
filter.addEventListener("cut",run);

// Select
// YAZILANI SECENDE ISHLENIR
filter.addEventListener("select",run);





function run(e) {
    console.log(e.type);

}
