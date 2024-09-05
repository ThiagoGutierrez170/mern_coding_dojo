const {
    mostrarImg,tamañoImg,colorfond,imagen,boddy
}={
    mostrarImg : document.getElementById('toggleButton'),
    tamañoImg : document.getElementById("resizeButton"),
    colorfond : document.getElementById("colorInput"),
    imagen : document.getElementById("surpriseImage"),
    boddy : document.body
}
mostrarImg.onclick=()=>{
    imagen.style.display = imagen.style.display === "none" ? "block" : "none";
};
tamañoImg.onclick = () => {
    imagen.style.width = imagen.style.width === "150px" ? "300px" : "150px";
};

colorInput.addEventListener("input", () => boddy.style.backgroundColor=colorInput.value);
