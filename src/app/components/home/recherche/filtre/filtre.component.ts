import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {DataCenterService} from "../../../../service/data-center.service";
import {RouteService} from "../../../../service/route.service";
@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css','../../../../app.component.css']
})
export class FiltreComponent {
  fournisseur = "";
  molecule = "";
  medicament = "";
  estGenerique= false;
  estCollectivite= false;

  constructor(private dataCenter:DataCenterService,private route:RouteService) {
  }

  search(){
    if (!(this.medicament == "" && this.molecule == "" && this.medicament == "" && !this.estGenerique && !this.estCollectivite)){
      this.route.getArticle(this.medicament.toUpperCase()," "+this.fournisseur.toUpperCase(),this.molecule.toUpperCase(),this.estGenerique,this.estCollectivite).subscribe(
          (resultatArticles)=> {
            console.log("ok");
            this.dataCenter.setResultatArticle(resultatArticles);
          }
      );
    }
  }
}
