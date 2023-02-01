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

  articleToLigneCommandeSearch(art:Article):LigneCommandeSearch{
    let ligCom = new LigneCommandeSearch();
    ligCom.ligneCommande = new LigneCommande();
    ligCom.ligneCommande.idLigneCommande = new IdLigneCommande();
    ligCom.ligneCommande.idLigneCommande.idCommande= -1;
    ligCom.ligneCommande.idLigneCommande.idPresentation = art.ID;
    ligCom.ligneCommande.quantite = art.QUANTITE;
    ligCom.forcePD = false;
    ligCom.forceStock = false;
    return ligCom;
  }

}
