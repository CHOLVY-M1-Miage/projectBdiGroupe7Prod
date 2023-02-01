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

const ELEMENT_DATA: Article[] = [
  {ID :1, DENOMINATIONMEDICAMENT : "a1", LIBELLEPRESTATION : "b1", DENOMATIONSUBSTANCE: "d1", TITULAIRE : "c1", PRIX :1.0, QUANTITE: 0},
  {ID :2, DENOMINATIONMEDICAMENT : "a2", LIBELLEPRESTATION : "b2", DENOMATIONSUBSTANCE: "d2",TITULAIRE : "c2", PRIX :2.0, QUANTITE: 0},
  {ID :3, DENOMINATIONMEDICAMENT : "a3", LIBELLEPRESTATION : "b3", DENOMATIONSUBSTANCE: "d3",TITULAIRE : "c3", PRIX :3.0, QUANTITE: 0},
  {ID :4, DENOMINATIONMEDICAMENT : "a4", LIBELLEPRESTATION : "b4", DENOMATIONSUBSTANCE: "d4",TITULAIRE : "c4", PRIX :4.0,  QUANTITE: 0},
  {ID :5, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :6, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :7, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :8, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :9, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :10, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :11, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :12,DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :13, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :14, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :15, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :16, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :17, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :18, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :19, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :20, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :21, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :22, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :23, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :24, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :25, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :26, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :27, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :28, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :29, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :30, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :31, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :32, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :33, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :34, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :35, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :36, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :37, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :38, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :39, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :40, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :41, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :42, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :43, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :44, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :45, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :46, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :47, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
  {ID :48, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0, QUANTITE: 0},
];

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent{
  recherche !: string;

  displayedColumns: string[] = ["nom","presentation","substance","fournisseur","prix"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<Article>();

  constructor(private _liveAnnouncer: LiveAnnouncer,private dataCenter:DataCenterService,private route:RouteService,private convert:ConvertPipe) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
    let ligneCom = this.convert.articleToLigneCommandeSearch(article);
    this.route.postLigneCommande(ligneCom).subscribe();
    //article.QUANTITE = 1;
    this.dataCenter.addArticleInPanier(article);
  }

  /*
  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire

  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire,designationPharmaceutique
   */
}
