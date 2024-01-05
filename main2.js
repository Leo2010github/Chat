const firebaseConfig = {
    apiKey: "AIzaSyDr-BmF6Hlic6L71ibNKG8gfg0CqIsWqEU",
    authDomain: "fir-43253.firebaseapp.com",
    databaseURL: "https://fir-43253-default-rtdb.firebaseio.com",
    projectId: "fir-43253",
    storageBucket: "fir-43253.appspot.com",
    messagingSenderId: "927017912025",
    appId: "1:927017912025:web:7ddd868141148ee451e0c8"
  };
firebase.initializeApp(firebaseConfig);
Usuario = localStorage.getItem("Usuario");
document.getElementById("UsuarioEtiqueta").innerHTML = Usuario;
function BaseDeDatos(){
    firebase.database().ref("/").on("value", function(Orden){
        document.getElementById("Salas").value = "";
        Orden.forEach(function(Raiz){
            salas = Raiz.key;
            Div = "<div id=" + salas + " onclick='IrSala(this.id)'>" + salas + "</div>";
            document.getElementById("Salas").innerHTML += Div + "<br>";
        });
    });
}
BaseDeDatos();
function CrearSala(){
    NuevaSala = document.getElementById("NuevaSalaInput").value;
    firebase.database().ref("/").child(NuevaSala).update({contenido: "informacion sala"});
    localStorage.setItem("NuevaSala", NuevaSala);
    window.location = "Chat.html";
}
function IrSala(NuevaSala){
    localStorage.setItem("NuevaSala", NuevaSala);
    window.location = "Chat.html";
}
function Salir(){
    window.location = "index.html";
    localStorage.removeItem("Usuario");
    localStorage.removeItem("NuevaSala");
}
