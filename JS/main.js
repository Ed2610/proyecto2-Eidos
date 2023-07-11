const menuprincipal = document.querySelector("#menuprincipal");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menuprincipal.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menuprincipal.classList.remove("visible");
})

function cargarm()
{
document.getElementById('btnma').style.display = "none";
document.getElementById('textobio3').style.display = "grid";
document.getElementById('cerrarm').style.display = "grid";

}

function cerrarm(){
document.getElementById('cerrarm').style.display = "none";
document.getElementById('textobio3').style.display = "none";
document.getElementById('btnma').style.display = "block";
}