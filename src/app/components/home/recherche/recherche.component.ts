import {AfterViewInit,Component, OnInit, ViewChild} from '@angular/core';
import {MatSort,Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {MedocRecherche} from "../../../model/medoc-recherche";
import {Article} from "../../../model/article";
import {ConvertPipe} from "../../../pipe/convert.pipe";
import {RouteService} from "../../../service/route.service";
import {LigneCommandeSearch} from "../../../model/ligne-commande-search.model";
import {LigneCommandeResultat} from "../../../model/ligne-commande-resultat.model";
import {DataCenterService} from "../../../service/data-center.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent{
  recherche !: string;

  displayedColumns: string[] = ["nom","presentation","substance","fournisseur","prix"];

  clickedRows = new Set<Article>();
  resultatSubscription: Subscription;
  resultat: Article[] = [];

  addArticle: LigneCommandeResultat = new LigneCommandeResultat();
  addArticleSubscription: Subscription;

  constructor(private _liveAnnouncer: LiveAnnouncer,private dataCenter:DataCenterService,private route:RouteService,private convert:ConvertPipe) {
    this.resultatSubscription = this.dataCenter.resultatArticles$.subscribe((res) => {
          this.resultat = res;
          console.log("resultat update",this.resultat);
        }
    );
    this.addArticleSubscription = this.dataCenter.addArticle$.subscribe((res) => {
      this.addArticle = res;
      if (!res.stockOk){

      }
      if (!res.conditionsPD){

      }
      console.log("addArticle",this.addArticle);
    })
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    //this.ar.sort = this.sort;
  }

  annouceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
    this.ngAfterViewInit();
  }

  addArticleToPanier(article:Article) {
    console.log("Article clicked: ");
    console.log(article);
    if (!article.quantite) article.quantite = 1;
    let ligneCom = this.convert.articleToLigneCommandeSearch(article);
    this.route.postLigneCommande(ligneCom).subscribe(
        (res) => this.dataCenter.setAddArticle(res)
    );

    //article.QUANTITE = 1;
    //this.dataCenter.addArticleInPanier(article);
  }

  /*
  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire

  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire,designationPharmaceutique
   */
}
