// buscar el modal y los botones
const modal = document.getElementById('modal');
const mostrar = document.getElementById('mostrar-modal');
const cerrar = document.getElementById('cerrar-modal');

// mostrar el modal cuando den click
mostrar.addEventListener('click', ()=>{
    modal.style = "top: 0"
})
// cerrar el modal cuando den click en x
cerrar.addEventListener('click', ()=>{
    modal.style= "top: -100vh"
})