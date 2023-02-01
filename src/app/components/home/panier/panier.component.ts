import { Component } from '@angular/core';
import {Article} from "../../../model/article";
import {LigneCommande} from "../../../model/ligne-commande.model";
import {DataCenterService} from "../../../service/data-center.service";
import {BehaviorSubject, Subscription} from "rxjs";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})



export class PanierComponent {
  panierSubscription: Subscription;
  totalSubscription: Subscription;
  articles: Article[] = [];
  totalPanier = 0;
  autoSuppression = true;

  constructor(private dataCenter: DataCenterService) {
    this.panierSubscription = this.dataCenter.articles$.subscribe((articles) => {
          this.articles = articles;
          console.log("articles update",this.articles);
        }
    );
    this.totalSubscription = this.dataCenter.total$.subscribe((prix) => {
      this.totalPanier = prix;
      console.log("prix update",this.totalPanier);
    })
  }

  updateQuantite(article:Article,newQuantite: any) {
    article.QUANTITE = Number(newQuantite.target.value);
    this.totalPanier =this.totalCommande();
    /*Auto suppression*/
    if ((this.autoSuppression) && (article.QUANTITE == 0)){
      this.removeArticleFromPanier(article);
    }
  }

  removeArticleFromPanier(art:Article){
  this.articles.forEach((article,id)=>{
      if(article.ID == art.ID) this.articles.splice(id,1);
    });
  }

  totalCommande():number{
    const init = 0;
    const totalPanier = this.articles?.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.PRIX * currentValue.QUANTITE),
        init
    );
    return totalPanier;
  }

  validerPanier(){
    this.articles.forEach((article:Article) => console.log(this.articleToLigneCommande(article)));
  }

  articleToLigneCommande(art:Article):LigneCommande{

    let ligCom = new LigneCommande();
    /*ligCom.idCommande = -1;
    ligCom.idPresentation = art.ID;
    ligCom.quantite = art.QUANTITE;
    */return ligCom;
  }

}
