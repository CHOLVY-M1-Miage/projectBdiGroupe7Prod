import {LigneCommande} from "./ligne-commande.model";

export class LigneCommandeResultat {
    ligneCommande!:LigneCommande;
    stockOk!: boolean;
    conditionsPD!: string[];
}
