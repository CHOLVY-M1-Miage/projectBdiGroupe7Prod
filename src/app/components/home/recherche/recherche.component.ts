import {Component, OnInit} from '@angular/core';
import {MatSort,Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";

export interface medoc {
  nom: string;
  mollecule: string;
  fournisseur: string;
}

const ELEMENT_DATA: medoc[] = [
  {nom: "medicament A",mollecule: "moll",fournisseur: "foy"}
];

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent{
  recherche !: string;

  displayedColumns: string[] = ['nom','mollecule','fournisseur'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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
