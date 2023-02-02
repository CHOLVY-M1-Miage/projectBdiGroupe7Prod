import { Injectable } from '@angular/core';
import { lastValueFrom, TimeoutError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

export interface Utilisateur{

}

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  currentUser!: Utilisateur;
  currentToken!: string;

  private url = environment.apiUrl;


  constructor(private httpClient: HttpClient,public auth: AngularFireAuth) { 
    this.auth.authState.subscribe(
      user => {
        user?.getIdTokenResult().then(idToken => { 
          this.currentToken=idToken.token;    
          console.log(this.currentToken)      
        }
        )
      }     
    )
  }

  public async getUserById(id: string): Promise<Utilisateur>{
    let  ret = await lastValueFrom(this.httpClient.get<Utilisateur>(this.url+'utilisateurs/'+id, {headers: new HttpHeaders({Authorization:this.currentToken})})).then(user =>this.currentUser=user);
    return ret;  }
}
