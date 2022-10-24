// se localiza el modal gracias al id
const modal = document.getElementById("modal");
// se muestra el modal cambiando su propiedad style = toip 0 left 0
modal.style = "  top: 0 ; left: 0; transition: all 0.5s;";

// se detecta el click en el boton opara cerrar el modal
document.getElementById("btn-cerrar-modal").addEventListener("click", () => {
  // se cierrra el modal cambiando su propiedad style = toip -100vh
  modal.style = "  left: -100vh; top: 0; transition: all 0.5s ";
});
