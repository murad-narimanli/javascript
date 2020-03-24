const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event  klikleme
title.addEventListener("click",run);
// Double Click  2defe klikleme
title.addEventListener("dblclick",run);

// Mouse Down click kimidi mausa basandaa olur
title.addEventListener("mousedown",run);
// Mouse Up basb sora buraxanda ishleyir
title.addEventListener("mouseup",run);

// Mouse Over mausu herek etdirende olur ama tek bir dive yox onun icine tesir edende de ishleyir 
title.addEventListener("mouseover",run);
// Mouse Out  div-den cixanda ishleyir ama tekce oznden yox icindeklerden cixandada ishleyir
title.addEventListener("mouseout",run);

cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave
// ancag daxil olanda ishleyir icindeki diger elementlere daxil olanda ishlemir mouserover kimi deyil
cardBody.addEventListener("mouseenter",run);

// ancag cixanda ishleyir diger elementlerden cixanda ishlemir mouseout kimi deyil
cardBody.addEventListener("mouseleave",run);



function run(e) {
    console.log(e.type);
}
