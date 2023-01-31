import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouteService} from "../../../service/route.service";
import {Presentation} from "../../../model/presentation.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent {
  idP = 156;
  pres = new BehaviorSubject<Presentation[]>([]);

  constructor(private route:RouteService) {
    this.route.getPresentation(this.idP).subscribe(e => {
      return this.pres.next(e);
    })
  }

  getPresentation():void{
    this.route.getPresentation(this.idP);
  }
}
