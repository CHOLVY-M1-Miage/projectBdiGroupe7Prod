import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {DataCenterService} from "../../../../service/data-center.service";
import {RouteService} from "../../../../service/route.service";
@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent {
  fournisseur :any;
  mollecule :any;
  medicament :any;
  estGenerique: any;
  estCollectivite: any;

  constructor(private dataCenter:DataCenterService,private route:RouteService) {
  }

  search(){
    this.route.getArticle(this.medicament.toUpperCase()," "+this.fournisseur.toUpperCase(),this.mollecule.toUpperCase(),this.estGenerique,this.estCollectivite).subscribe(
        (resultatArticles)=> this.dataCenter.setResultatArticle(resultatArticles)
    );
  }
}
