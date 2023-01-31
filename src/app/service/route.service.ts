import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Presentation} from "../model/presentation.model";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  urlRF = "http://localhost:8080/"
  urlPresentationId = "presentations/"
  constructor(private http: HttpClient) { }

  public getPresentation(id:number): Observable<Presentation[]> {
    const url = this.urlRF + this.urlPresentationId +id.toString() ;
    console.log('getPresentation: ' + url);
    return this.http.get<Presentation[]>(url);
  }

}
