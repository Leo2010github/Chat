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
NuevaSala = localStorage.getItem("NuevaSala");
document.getElementById("NombreSalaEtiqueta").innerHTML =  "Sala: " + NuevaSala;
function Mensajes(){
  firebase.database().ref("/" + NuevaSala).on("value", function(Orden){
    document.getElementById("Mensajes").innerHTML = "";
    Orden.forEach(function (Raiz){
      keys = Raiz.key;
      contenido = Raiz.val();
      if (keys != "contenido") {
        NombreUsuario = keys;
        contenidoMensaje = contenido;
        contenidoSeparadoU = contenidoMensaje["contenidoSeparadoU"];
        contenidoSeparadoM = contenidoMensaje["contenidoSeparadoM"];
        contenidoSeparadoL = contenidoMensaje["contenidoSeparadoL"];
        NombreUsuarioE = "<h3>" + contenidoSeparadoU + "</h3>";
        fgsdfngmh = "<h3>" + contenidoSeparadoM + "</h3>";
        BotonLike = "<button class='Like' id=" + NombreUsuario + " value="+ contenidoSeparadoL + " onclick='Like(this.id)'>";
        BotonLikeT = "<h5>" + contenidoSeparadoL + "Likes" + "</h5> </button>";
        MensajesFinal = NombreUsuarioE + fgsdfngmh + BotonLike + BotonLikeT;
        document.getElementById("Mensajes").innerHTML += MensajesFinal;
      }
    });
  });
}
Mensajes();
function Like(Likes){
  NumeroDeLikes = Likes;
  TotalDeLikes = document.getElementById(NumeroDeLikes).value;
  LikesSeparados = Number(TotalDeLikes) + 1;
  console.log(LikesSeparados);
  firebase.database().ref(NuevaSala).child(NumeroDeLikes).update({contenidoSeparadoL: LikesSeparados});
  Mensajes();
}
function Enviar(){
  MensajeUsuario = document.getElementById("NuevoMensajeI").value;
  firebase.database().ref(NuevaSala).push({contenidoSeparadoU: Usuario, contenidoSeparadoM: MensajeUsuario, contenidoSeparadoL: 0});
  document.getElementById("NuevoMensajeI").value = "";
}
function Salir(){
  window.location = "index.html";
  localStorage.removeItem("Usuario");
  localStorage.removeItem("NuevaSala");
}
