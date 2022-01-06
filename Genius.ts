import CoresElementosHtml from "./CoresElementosHtml";
import IGame from "./IGame";

class Genius extends CoresElementosHtml implements IGame {

  protected ordemCores = [];
  protected ordemCliques = [];
  protected fase = 1; 
  protected pontuacao = 0;

  atualizarEstado = (pontuacao: boolean, fase: boolean, reiniciar: boolean = false) => {
    if(reiniciar){
      this.pontuacao = 0;
      document.getElementById("pontuacao").innerHTML = `Pontuação: <b>${this.pontuacao}</b>`;

      this.fase = 1;
      document.getElementById("fase").innerHTML = `Fase: <b>${this.fase}</b>`;
      return;
    }

    if(pontuacao){
      this.pontuacao++;
      document.getElementById("pontuacao").innerHTML = `Pontuação: <b>${this.pontuacao}</b>`;
    }

    if(fase){
      this.fase++;
      document.getElementById("fase").innerHTML = `Fase: <b>${this.fase}</b>`;
    }
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

    this.atualizarEstado(true, false);
    if(this.ordemCliques.length == this.ordemCores.length){
      let r = confirm("Você ganhou! Deseja continuar?");
      if(r){
        this.atualizarEstado(false, true);
        this.jogar();
        return;
      }
      this.ordemCores = [];
      this.ordemCliques = [];
      this.atualizarEstado(false, false, true);
    }
  }

  fimDoJogo() {
    let r = confirm("Você perdeu! Deseja começar uma nova partida?");
    this.ordemCores = [];
    this.ordemCliques = [];
    this.atualizarEstado(false, false, true);
    if(r){
      this.jogar();
    }
    return;
  }
}

export default Genius;