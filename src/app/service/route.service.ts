import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Presentation} from "../model/presentation.model";
import {Article} from "../model/article";

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

  getArticle(medicament: string, mollecule: string, fournisseur: string,estGenerique: boolean,estCollectivite: boolean): Observable<Article[]> {
    const url = this.urlRF + 'presentations/article';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('medicament', medicament);
    queryParams = queryParams.append('mollecule', mollecule);
    queryParams = queryParams.append('fournisseur', fournisseur);
    queryParams = queryParams.append('estGenerique', estGenerique);
    queryParams = queryParams.append('estCollectivite', estCollectivite);
    console.log('getArticle: ' + url);
    return this.http.get<Article[]>(url, { params: queryParams });
  }

}
