function switchBg(color:string){
    
    document.body.style.backgroundColor = color;
}

let botones: HTMLCollection = document.getElementsByTagName("button") as HTMLCollection;
for (let i = 0; 1 < botones.length; i++){
    botones[i].addEventListener("click", () => {
        document.getElementById("caja")!.style.backgroundColor = botones[i].id;
    });
}
