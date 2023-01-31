import {Component, OnInit} from '@angular/core';
import {MatSort,Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {MedocRecherche} from "../../../model/medoc-recherche";

const ELEMENT_DATA: MedocRecherche[] = [
  {CODECIS : 1, DENOMINATIONMEDICAMENT : "a1", LIBELLEPRESTATION : "b1", DENOMATIONSUBSTANCE: "d1", TITULAIRE : "c1", PRIX :1.0},
  {CODECIS : 1, DENOMINATIONMEDICAMENT : "a2", LIBELLEPRESTATION : "b2", DENOMATIONSUBSTANCE: "d2",TITULAIRE : "c2", PRIX :2.0},
  {CODECIS : 1, DENOMINATIONMEDICAMENT : "a3", LIBELLEPRESTATION : "b3", DENOMATIONSUBSTANCE: "d3",TITULAIRE : "c3", PRIX :3.0},
  {CODECIS : 1, DENOMINATIONMEDICAMENT : "a4", LIBELLEPRESTATION : "b4", DENOMATIONSUBSTANCE: "d4",TITULAIRE : "c4", PRIX :4.0},
  {CODECIS : 1, DENOMINATIONMEDICAMENT : "a5", LIBELLEPRESTATION : "b5", DENOMATIONSUBSTANCE: "d5",TITULAIRE : "c5", PRIX :5.0},
];

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent{
  recherche !: string;

  displayedColumns: string[] = ["nom","presentation","substance","fournisseur","prix"];
  dataSource = ELEMENT_DATA;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  annouceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  /*
  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire

  codeCis,libellePrestation,denominationMedicament,formeparmaceutique,titulaire,designationPharmaceutique
   */
}
