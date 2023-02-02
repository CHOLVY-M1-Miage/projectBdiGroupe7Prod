import {Prez} from "./prez.model";

export class Article {
    id !: number;
    DENOMINATIONMEDICAMENT !: string;
    libellePresentation !: string;
    DENOMATIONSUBSTANCE !: string;
    titulaire !: string;
    prix!:number;
    quantite = 1;

    leMedoc !: string;

    laPrez !: Prez;
}
