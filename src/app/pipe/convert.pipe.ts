import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../model/article";
import {LigneCommande} from "../model/ligne-commande.model";
import {LigneCommandeSearch} from "../model/ligne-commande-search.model";
import {IdLigneCommande} from "../model/id-ligne-commande.model";

@Pipe({
  name: 'convert'
})

export class ConvertPipe implements PipeTransform {

  transform(a?:number):number {
    if (!a) { return 0;}
    return a+1;
  }

  decimal(value?: number): number {
    if (!value) { return 0.00; }
    const xe = Math.trunc(value);
    let x1 = '' + xe; // string
    const xd = Math.trunc(value * 100 - xe * 100); // decimal 2 precision
    let x2 = xd === 0 ? '00' : xd < 10 ? '0' + xd : '' + xd;

    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {   // add espace each 3
      x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    }
    x2 = x2 ? '.' + x2 : '';
    return Number(x1 + x2);
  }

  articleToLigneCommandeSearch(art:Article):LigneCommandeSearch{
    let ligCom = new LigneCommandeSearch();
    ligCom.ligneCommande = new LigneCommande();
    ligCom.ligneCommande.idLigneCommande = new IdLigneCommande();
    ligCom.ligneCommande.idLigneCommande.idCommande= 15;
    ligCom.ligneCommande.idLigneCommande.idPresentation = art.laPrez.id;
    ligCom.ligneCommande.quantite = art.quantite;
    ligCom.forcePD = true;
    ligCom.forceStock = true;
    return ligCom;
  }

}
