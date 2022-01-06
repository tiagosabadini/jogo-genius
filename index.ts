/**
 * 1 Sortear as cores;
 * 2 Armazenar as cores sorteadas e ordem de apresentação;
 * 3 Capturar o clique do mouse;
 * 4 Gravar a ordem e cores selecionadas pelo usuário;
 * 5 Informar ao usuário se ele ganhou ou não;
 * 6 Oferecer opção para reiniciar o jogo (em caso de perda da partida)
 *    Oferecer opção de continuar em novo nível (caso de partida ganha); 
 */

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


