import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { take } from 'rxjs';
import { Utilisateur, UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gromed';
  currentUser: Promise<Utilisateur> | null = null;
  userService: UtilisateurService;

  constructor(
    public auth: AngularFireAuth,
    userService: UtilisateurService
  )
  {
    this.userService = userService;
    this.auth.authState.subscribe((user) => {
      user?.getIdTokenResult().then((idToken) => {
        localStorage.setItem('currentUserToken', JSON.stringify(idToken));
      });
    });
  }

  ngOnInit(): void {
    this.auth.user.pipe(take(2)).subscribe((user) => {
      if (user !== null)
        // this.currentChami = this.getChamiByEmail(user.email||'');
        this.currentUser = this.getUserById(user.uid || '');
      // this.currentChami?.then(data => this.chamiSubj.next(data))
    });
  }

  // Connexion avec Firebase
  login(creds: string[]): void {
    this.auth.signInWithEmailAndPassword(creds[0], creds[1]).then((userCred) => {
      this.currentUser = this.getUserById(userCred.user?.uid || '');
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  logout(): void {
    this.auth.signOut();
  }

  getUserById(userId: string): Promise<Utilisateur> {
    if (this.auth.user) {
      firebase
        .auth()
        .currentUser?.getIdToken(true)
        .then(function (idToken) {
          localStorage.setItem('currentUserToken', JSON.stringify(idToken));
        });
    }
    return this.userService.getUserById(userId);
  }
}
