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

  addArticleInPanier(art:Article){
    const newList = this.articles.value.map(a => a.ID ? a : art);
    this.articles.next(newList);
  }

  loadPanier():Article[]{
    const articles: Article[] = [
      {ID : 1, DENOMINATIONMEDICAMENT : "a1", LIBELLEPRESTATION : "b1", DENOMATIONSUBSTANCE: "d1", TITULAIRE : "c1", PRIX :1.0,QUANTITE: 1},
      {ID : 2, DENOMINATIONMEDICAMENT : "a2", LIBELLEPRESTATION : "b2", DENOMATIONSUBSTANCE: "d2", TITULAIRE : "c2", PRIX :2.0,QUANTITE: 2},
      {ID : 3, DENOMINATIONMEDICAMENT : "a3", LIBELLEPRESTATION : "b3", DENOMATIONSUBSTANCE: "d3", TITULAIRE : "c3", PRIX :3.0,QUANTITE: 3},
      {ID : 4, DENOMINATIONMEDICAMENT : "a4", LIBELLEPRESTATION : "b4", DENOMATIONSUBSTANCE: "d4", TITULAIRE : "c4", PRIX :4.0,QUANTITE: 5},
      {ID : 5, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5", TITULAIRE : "c5", PRIX :5.0,QUANTITE: 7},
      {ID : 6, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5", TITULAIRE : "c5", PRIX :5.0,QUANTITE: 7},
      {ID : 7, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5", TITULAIRE : "c5", PRIX :5.0,QUANTITE: 7},
      {ID : 8, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5", TITULAIRE : "c5", PRIX :5.0,QUANTITE: 7},
      {ID : 9, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5", TITULAIRE : "c5", PRIX :5.0,QUANTITE: 7},
      {ID : 10, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5", TITULAIRE : "c5", PRIX :5.0,QUANTITE: 7},
    ]

    return articles;
  }
}
