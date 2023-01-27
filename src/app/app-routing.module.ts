import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {ToolComponent} from "./components/dev/tool/tool.component";

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'dev',component:ToolComponent},
  {path: 'login',component:LoginComponent},
  {path: '**',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
