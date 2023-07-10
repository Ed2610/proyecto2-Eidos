const menuprincipal = document.querySelector("#menuprincipal");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menuprincipal.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menuprincipal.classList.remove("visible");
})