import CoresElementosHtml from "./CoresElementosHtml";
import IGame from "./IGame";

class Genius extends CoresElementosHtml implements IGame {

  protected ordemCores = [];
  protected ordemCliques = [];
  protected fase = 1; 
  protected pontuacao = 0;

  atualizarEstado = () => {
    //precisa implementar
  }

  jogar = () => {
    this.embaralhar(); 
  }

  embaralhar = async () => {
    this.ordemCores[this.ordemCores.length] = Math.floor(Math.random() * 4);
    this.ordemCliques = [];

    for(let i in this.ordemCores){
      let elemento = this.getElementoHTML(this.ordemCores[i]);      
      await this.ativarElemento(elemento);
      await this.desativarElemento(elemento);
    }
  }

  ativarElemento = (elemento : HTMLAnchorElement): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        elemento.classList.add('selected');
        resolve(1);
      }, 250);
    });
  }

  desativarElemento = (elemento : HTMLAnchorElement): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        elemento.classList.remove('selected');
        resolve(1);
      }, 2500);
    });
  }

  checarOrdemDeCliques = (codigoElemento: number) => {
    this.ordemCliques.push(codigoElemento);
    for(let i in this.ordemCliques){
      if(this.ordemCliques[i] !== this.ordemCores[i]){
        this.fimDoJogo();
        break;
      }
    } 

    if(this.ordemCliques.length == this.ordemCores.length){
      let r = confirm("Você ganhou! Deseja continuar?");
      if(r){
        this.jogar();
        return;
      }
      this.ordemCores = [];
      this.ordemCliques = [];
    }
  }

  fimDoJogo() {
    let r = confirm("Você perdeu! Deseja começar uma nova partida?");
    this.ordemCores = [];
    this.ordemCliques = [];
    this.fase = 0;
    this.pontuacao = 0;
    if(r){
      this.jogar();
    }
    return;
  }

  proximoNivel() {
      console.log('Passar para outro nível');
  }
}

export default Genius;