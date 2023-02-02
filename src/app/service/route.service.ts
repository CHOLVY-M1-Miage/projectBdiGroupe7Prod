import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Presentation} from "../model/presentation.model";
import {Article} from "../model/article";
import {LigneCommande} from "../model/ligne-commande.model";
import {LigneCommandeSearch} from "../model/ligne-commande-search.model";
import {LigneCommandeResultat} from "../model/ligne-commande-resultat.model";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  urlRF = "http://localhost:8080/"
  urlPresentationId = "presentations/"
  currentToken !:string;
  constructor(private http: HttpClient,public auth: AngularFireAuth) {
    this.auth.authState.subscribe(
        user => {
          user?.getIdTokenResult().then(idToken => {
                this.currentToken=idToken.token;
                console.log("->",this.currentToken)
              }
          )
        }
    )
  }

  public getPresentation(id:number): Observable<Presentation[]> {
    const url = this.urlRF + this.urlPresentationId +id.toString() ;
    console.log('getPresentation: ' + url);
    return this.http.get<Presentation[]>(url,{headers:{'Access-Control-Allow-Origin':'',Authorization:this.currentToken}});
  }

  getArticle(medicament: string, molecule: string, fournisseur: string,estGenerique: boolean,estCollectivite: boolean): Observable<Article[]> {
    const url = this.urlRF + 'presentations/article';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('medicament', medicament);
    queryParams = queryParams.append('molecule', molecule);
    queryParams = queryParams.append('fournisseur', fournisseur);
    queryParams = queryParams.append('estGenerique', estGenerique);
    queryParams = queryParams.append('estCollectivite', estCollectivite);
    console.log('getArticle: ' + url);
    return this.http.get<Article[]>(url, { params: queryParams });
  }

    postLigneCommande(ligneCom: LigneCommandeSearch) {
      const url = this.urlRF + 'lignesCommande/add';
      console.log('postLigneCommande: ',url);
      return this.http.post<LigneCommandeResultat>(url, ligneCom);
    }
}
