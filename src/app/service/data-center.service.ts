import { Injectable } from '@angular/core';
import {Article} from "../model/article";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataCenterService {
  identifiantUser!: String;
  mdp!: String;
  constructor() { }

  /*---PANIER----*/
  articles = new BehaviorSubject<Article[]>([]);
  articles$ = this.articles.asObservable();

  total = new BehaviorSubject<number>(0);
  total$ = this.total.asObservable();

  addArticleInPanier(art:Article){
    let include =false;
    this.articles.value.forEach(
        (a) => (a.ID == art.ID)?  include = true : include = include
    );
    if (include){
     this.articles.value.forEach((a)=>(a.ID == art.ID) ? a.QUANTITE += 1: a.QUANTITE);
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
        (accumulator, currentValue) => accumulator + (currentValue.PRIX * currentValue.QUANTITE),
        init
    );
    this.total.next(total);
    //console.log("update total:" + total);
  }

  /*---Résultat Recherche----*/
  resultatArticles = new BehaviorSubject<Article[]>([]);
  resultatArticles$ = this.resultatArticles.asObservable();

    setResultatArticle(res: Article[]) {
        this.resultatArticles.next(res);
    }
}
