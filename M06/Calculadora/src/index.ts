function thisDisplay(valor: string) {
    let respuesta: HTMLInputElement;
    respuesta = document.getElementById("input") as HTMLInputElement;
    respuesta.value += valor;
}

function thisCalculate() {
    let respuesta: HTMLInputElement;
    respuesta = document.getElementById("input") as HTMLInputElement;
    respuesta.value = eval(respuesta.value);
}

function thisDelete() {
    let respuesta: HTMLInputElement;
    respuesta = document.getElementById("input") as HTMLInputElement;
    respuesta.value = respuesta.value.slice(0, -1);
}

function thisClear() {
    let respuesta: HTMLInputElement;
    respuesta = document.getElementById("input") as HTMLInputElement;
    respuesta.value = "";
}
