class CoresElementosHtml {

  public Cores: object = {
    boxGreen: 0,
    boxRed: 1,
    boxYellow: 2,
    boxBlue: 3
  }

  getElementoHTML(codigo: number): HTMLAnchorElement{
    switch(codigo){
      case 0:
        return document.getElementById('boxGreen') as HTMLAnchorElement;
      case 1: 
        return document.getElementById('boxRed') as HTMLAnchorElement;
      case 2: 
        return document.getElementById('boxYellow') as HTMLAnchorElement;
      case 3: 
        return document.getElementById('boxBlue') as HTMLAnchorElement;
      default:
        throw new Error(`O código ${codigo} é inválido.`);
    }
  }
}

export default CoresElementosHtml;