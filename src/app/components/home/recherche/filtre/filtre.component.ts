import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent {
  fournisseur :any;
  mollecule :any;
  medicament :any;

  namefilter !: boolean;
  moleculefilter !: boolean;
  furnisherfilter !: boolean;
  filterByName(event : any){
    this.namefilter = event;
  }
  filterByMolecule(event : any){
    this.moleculefilter = event;
  }
  filterByFurnisher(event : any){
    this.furnisherfilter = event;
  }

  search(){
    const url = "mollecule="+ this.mollecule+  "fournisseur="+this.fournisseur + "medicament="+this.medicament;
    console.log(url);
  }
}
