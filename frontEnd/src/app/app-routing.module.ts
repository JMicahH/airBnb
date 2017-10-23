import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginAndRegComponent } from './login-and-reg/login-and-reg.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginAndRegComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }