"use strict";
function switchBg(color) {
    document.body.style.backgroundColor = color;
}
let botones = document.getElementsByTagName("button");
for (let i = 0; 1 < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        document.getElementById("caja").style.backgroundColor = botones[i].id;
    });
}
