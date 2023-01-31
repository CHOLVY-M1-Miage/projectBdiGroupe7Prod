import { Component, EventEmitter, Output } from '@angular/core';
import {DataCenterService} from "../../../service/data-center.service";

@Component({
  selector: 'app-connecteur',
  templateUrl: './connecteur.component.html',
  styleUrls: ['./connecteur.component.css']
})
export class ConnecteurComponent {

  @Output() eventLogin = new EventEmitter<string[]>();

  constructor(private dataCenter: DataCenterService) {}

  identifiantChange(){

  }


}
