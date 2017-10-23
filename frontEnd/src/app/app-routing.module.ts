import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { LoginAndRegComponent } from './login-and-reg/login-and-reg.component';
import { MyListingsComponent } from './my-listings/my-listings.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginAndRegComponent },
  {path: 'browse', pathMatch: 'full', component: BrowseComponent },
  {path: 'listing', pathMatch: 'full', component: MyListingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }