import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
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
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {D} from "@angular/cdk/keycodes";

@Component({
  selector: 'dialog-stock-alert',
  templateUrl: 'dialog-stock-alert.html',
})
export class DialogStockAlert {
  constructor(
      public dialogRef: MatDialogRef<DialogStockAlert>,
      //@Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css','../../../app.component.css']
})

export class RechercheComponent{
  recherche !: string;

  displayedColumns: string[] = ["nom","presentation","substance","fournisseur","prix"];

  clickedRows = new Set<Article>();
  resultatSubscription: Subscription;
  resultat: Article[] = [];

  addArticle: LigneCommandeResultat = new LigneCommandeResultat();
  addArticleSubscription: Subscription;

  constructor(public dialog: MatDialog,private _liveAnnouncer: LiveAnnouncer,private dataCenter:DataCenterService,private route:RouteService,private convert:ConvertPipe) {
    this.resultatSubscription = this.dataCenter.resultatArticles$.subscribe((res) => {
          this.resultat = res;
          console.log("resultat update",this.resultat);
        }
    );
    this.addArticleSubscription = this.dataCenter.addArticle$.subscribe((res) => {
      this.addArticle = res;
      if (!res.stockOk){
        //open();
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogStockAlert, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
    if (!article.quantite){
      article.quantite = 1;
      let ligneCom = this.convert.articleToLigneCommandeSearch(article);
      this.route.postLigneCommande(ligneCom).subscribe(
          (res) => this.dataCenter.setAddArticle(res)
      );
    }

    this.dataCenter.addArticleInPanier(article);
  }

  /*
  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire

  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire,designationPharmaceutique
   */
}
