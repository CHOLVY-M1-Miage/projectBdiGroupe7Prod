import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { ConnecteurComponent } from './components/login/connecteur/connecteur.component';
import { HomeComponent } from './components/home/home.component';
import { RechercheComponent } from './components/home/recherche/recherche.component';
import { CommandeTypeComponent } from './components/home/commande-type/commande-type.component';
import { PanierComponent } from './components/home/panier/panier.component';
import { ContenueComponent } from './components/home/panier/contenue/contenue.component';
import { ManegeComponent } from './components/home/panier/manege/manege.component';
import { FiltreComponent } from './components/home/recherche/filtre/filtre.component';
import { ResultatComponent } from './components/home/resultat/resultat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ToolComponent } from './components/dev/tool/tool.component';
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LoginComponent,
    ConnecteurComponent,
    HomeComponent,
    RechercheComponent,
    CommandeTypeComponent,
    PanierComponent,
    ContenueComponent,
    ManegeComponent,
    FiltreComponent,
    ResultatComponent,
    ToolComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatCheckboxModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
