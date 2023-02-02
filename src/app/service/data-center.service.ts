import { Injectable } from '@angular/core';
import {Article} from "../model/article";
import {BehaviorSubject} from "rxjs";
import {ConvertPipe} from "../pipe/convert.pipe";
import {LigneCommandeResultat} from "../model/ligne-commande-resultat.model";

@Injectable({
  providedIn: 'root'
})
export class DataCenterService {
  identifiantUser!: String;
  mdp!: String;
  constructor(private convert:ConvertPipe ) { }

  /*---PANIER----*/
  articles = new BehaviorSubject<Article[]>([]);
  articles$ = this.articles.asObservable();

  total = new BehaviorSubject<number>(0);
  total$ = this.total.asObservable();

  addArticleInPanier(art:Article){
    let include =false;
    this.articles.value.forEach(
        (a) => (a.id == art.id)?  include = true : include = include
    );
    if (include){
     this.articles.value.forEach((a)=>(a.id == art.id) ? a.quantite += 0: a.quantite);
    }
    else {
      this.articles.value.push(art);
    }
    //console.log(this.articles.value);
    this.updateTotal();
  }

  updateTotal(){
    let init = 0;
    const total = this.articles.value.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.prix * currentValue.quantite),
        init
    );
    this.total.next(this.convert.decimal(total));
    console.log("update total:" + total + "/" + this.convert.decimal(total));
  }

  /*---Résultat Recherche----*/
  resultatArticles = new BehaviorSubject<Article[]>([]);
  resultatArticles$ = this.resultatArticles.asObservable();

  addArticle = new BehaviorSubject<LigneCommandeResultat>(new LigneCommandeResultat());
  addArticle$ = this.addArticle.asObservable();

    setResultatArticle(res: Article[]) {
        this.resultatArticles.next(res);
    }

    setAddArticle(artRep: LigneCommandeResultat) {
        this.addArticle.next(artRep);
    }
}
