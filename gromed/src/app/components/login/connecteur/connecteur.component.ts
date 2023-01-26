import { Component } from '@angular/core';
import {DataCenterService} from "../../../service/data-center.service";

@Component({
  selector: 'app-connecteur',
  templateUrl: './connecteur.component.html',
  styleUrls: ['./connecteur.component.css']
})
export class ConnecteurComponent {
  //dentifiant: string;
  //mdp: string;

  constructor(private dataCenter: DataCenterService) {}

  identifiantChange(){

  }


}
