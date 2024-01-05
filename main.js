var Miembros = "14";
var Usuario;
document.getElementById("MiembrosEtiqueta").innerHTML = Miembros;
function IniciarSesion() {
    Usuario = document.getElementById("NombreDeUsuarioI").value;
    localStorage.setItem("Usuario", Usuario);
    window.location = "index2.html";
}