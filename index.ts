import Genius from './Genius';

const genius = new Genius();
genius.jogar();

const cores = document.querySelectorAll('.genius a');
cores.forEach((elemento) => {
  elemento.addEventListener('click', function(e){
    let codigoElemento = genius.Cores[elemento.id];
    genius.checarOrdemDeCliques(codigoElemento);   
  });
})


