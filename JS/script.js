const boton=document.getElementById('boton');
const texto=document.getElementById('texto');
function addElemento(texto) {
  campo = document.getElementById("campo");
  h1 = document.createElement("h1");
  h1.innerHTML = texto;
  campo.appendChild(h1);
}
boton.classList.add('mover')

texto.addEventListener('keyup', ()=> {
  textoo=texto.value.length;
  if((textoo>0 && textoo<=30  )){
      boton.classList.remove('mover');

  }
})
boton.addEventListener('click' ,()=> {
    html.classList.add('mover');
    boton.classList.add ('denuevo')
  })

  





















