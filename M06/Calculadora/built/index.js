"use strict";
function thisDisplay(valor) {
    let respuesta;
    respuesta = document.getElementById("input");
    respuesta.value += valor;
}
function thisCalculate() {
    let respuesta;
    respuesta = document.getElementById("input");
    respuesta.value = eval(respuesta.value);
}
function thisDelete() {
    let respuesta;
    respuesta = document.getElementById("input");
    respuesta.value = respuesta.value.slice(0, -1);
}
function thisClear() {
    let respuesta;
    respuesta = document.getElementById("input");
    respuesta.value = "";
}
